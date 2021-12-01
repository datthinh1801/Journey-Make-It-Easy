<template>
  <div class="editor-container">
    <div :editor="editor" v-if="editor" class="editor-controller">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <b>B</b>
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <i>i</i>
      </button>
      <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
      >
        <u>U</u>
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <strike>S</strike>
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        H5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        H6
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        Divider
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().undo()"
      >
        Undo (ctrl+z)
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().redo()"
      >
        Redo (ctrl+y)
      </button>
      <button @click="editor.chain().focus().unsetAllMarks().run()">
        Clear formats
      </button>
    </div>
    <div class="editing-space">
      <div class="posting-additional-info">
        <div class="title-alert">{{ titleAlert }}</div>
        <div class="word-count">{{ wordCount }} words</div>
      </div>
      <editor-content :editor="editor" />
    </div>
    <button class="post-btn" @click="post">Post</button>
  </div>
</template>

<script>
import { Editor, EditorContent, History } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

export default {
  name: "PostEditor",
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
      titleAlert: "",
    };
  },
  computed: {
    wordCount() {
      if (this.editor.getText().length === 0) {
        return 0;
      }
      return this.editor.getText().trim().split(/\s+/).length;
    },
  },
  methods: {
    post() {
      let content = this.editor.getHTML();
      let re = /(?<=<h1>)(.*?)(?=<\/h1>)/g;
      let title = content.match(re)?.[0].trim();
      if (title) {
        this.titleAlert = "";
        content = content.replace(/^(<h1>)(.*)(<\/h1>)/, "");
        this.$store
          .dispatch("postBlog", { title: title, content: content })
          .then(() => {
            this.$router.push("/articles");
            location.reload();
          });
      } else {
        this.titleAlert = "Your post must have a title styled as H1!";
      }
    },
  },
  beforeMount() {
    this.editor = new Editor({
      content: "",
      extensions: [StarterKit, History, Underline],
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style scope>
.ProseMirror,
.ProseMirror-focused {
  outline: none;
}

.editor-container {
  border: 1px solid #777;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
}

.editor-controller {
  display: flex;
}

.editor-controller button {
  color: black;
  background-color: white;
  width: auto;
  min-width: 20px;
  height: auto;
  margin: 0 5px 0 0;
  border-radius: 4px;
  transition: 0.2s;
}

.editor-controller button:hover,
.editor-controller button:active {
  background-color: black;
  color: white;
}

.editing-space .ProseMirror {
  border: 1px solid #999;
  border-radius: 5px;
  padding: 5px;
  height: 500px;
  overflow-y: auto;
}

.word-count {
  margin-top: 20px;
  text-align: right;
  font-weight: 500;
  color: #777;
}

.post-btn {
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 7px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 18px;
}

.post-btn:hover {
  background-color: black;
  color: white;
  border: 1px solid black;
}

.posting-additional-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title-alert {
  color: red;
  font-weight: 500;
  font-size: 16px;
  font-style: italic;
}

@media only screen and (max-width: 500px) {
  .editor-container {
    width: auto;
  }

  .editor-controller {
    flex-wrap: wrap;
  }

  .editing-space .ProseMirror {
    height: 300px;
  }

  .post-btn {
    font-size: 16px;
  }

  .word-count {
    font-size: 14px;
  }
}
</style>
