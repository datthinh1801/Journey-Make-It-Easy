<template>
    <div class="editor-container">
        <div :editor="editor" v-if="editor" class="editor-controller">
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                <b>B</b>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                <i>i</i>
            </button>
            <button @click="editor.chain().focus().toggleUnderline().run()"
                :class="{ 'is-active': editor.isActive('underline') }">
                <u>U</u>
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                Strike
            </button>
            <button @click="editor.chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }">
                Code
            </button>
            <button @click="editor.chain().focus().unsetAllMarks().run()">
                Clear
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
                H5
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                H6
            </button>
            <button @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }">
                Code block
            </button>
            <button @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }">
                Blockquote
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
                Divider
            </button>
            <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()">
                Undo (ctrl+z)
            </button>
            <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()">
                Redo (ctrl+y)
            </button>
        </div>
        <bubble-menu :editor="editor" v-if="editor" class="editor-controller">
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                B
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                <i>I</i>
            </button>
            <button @click="editor.chain().focus().toggleUnderline().run()"
                :class="{ 'is-active': editor.isActive('underline') }">
                <u>U</u>
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                <strike>strike</strike>
            </button>
        </bubble-menu>
        <div class="editing-space">
            <div class="word-count">{{ wordCount }} words</div>
            <editor-content :editor="editor" />
        </div>
    </div>
</template>

<script>
import {Editor, EditorContent, BubbleMenu, History} from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';

export default {
    name: 'PostEditor',
    components: {
        EditorContent,
        BubbleMenu,
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
                History,
                Underline
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
