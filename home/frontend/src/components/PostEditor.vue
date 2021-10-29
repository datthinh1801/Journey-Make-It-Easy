<template>
    <div class="editor-container">
        <div :editor="editor" v-if="editor" class="editor-controller">
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                bold
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                italic
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                strike
            </button>
            <button @click="editor.chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }">
                code
            </button>
            <button @click="editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </button>
            <button @click="editor.chain().focus().clearNodes().run()">
                clear nodes
            </button>
            <button @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }">
                paragraph
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                h1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                h2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                h3
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                h4
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                h5
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                h6
            </button>
            <button @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
                bullet list
            </button>
            <button @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }">
                ordered list
            </button>
            <button @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }">
                code block
            </button>
            <button @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
                blockquote
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </button>
            <button @click="editor.chain().focus().setHardBreak().run()">
                hard break
            </button>
            <button @click="editor.chain().focus().undo().run()">
                undo
            </button>
            <button @click="editor.chain().focus().redo().run()">
                redo
            </button>
        </div>
        <bubble-menu :editor="editor" v-if="editor" class="editor-controller">
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                bold
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                italic
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                strike
            </button>
        </bubble-menu>
        <div class="editing-space">
            <div class="word-count">{{ wordCount }} words</div>
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script>
import {Editor, EditorContent, BubbleMenu} from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';

export default {
    name: 'PostEditor',
    components: {
        EditorContent,
        BubbleMenu
    },
    data() {
        return {
            editor: null,
        }
    },
    computed: {
        wordCount() {
            return this.editor.state.doc.textContent.split(/\s+/).length - 1;
        }
    },
    mounted() {
        this.editor = new Editor({
            content: '',
            extensions: [ 
                StarterKit, 
            ],
            onUpdate({ editor }) {
                const wordCount = editor.state.doc.textContent.split(' ').length;
                this.wordCount = wordCount;
            },
        })
    },
    beforeDestroy() {
        this.editor.destroy();
    },
}
</script>

<style scope>
.ProseMirror,
.ProseMirror-focused {
    outline: none;
}

.editor-container {
    border: 2px solid black;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
}

.editor-controller button {
    color: black;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    width: auto;
    height: auto;
}

.editing-space .ProseMirror {
    border: 1px solid black;
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
</style>
