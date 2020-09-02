<template>
  <div class="html-editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="html-editor__menu">

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.bold()" @click="commands.bold">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-bold b-icon bi"><g><path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.italic()" @click="commands.italic">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-italic b-icon bi"><g><path d="M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.strike()" @click="commands.strike">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-strikethrough b-icon bi"><g><path d="M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z"></path><path fill-rule="evenodd" d="M15 8.5H1v-1h14v1z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.underline()" @click="commands.underline">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-underline b-icon bi"><g><path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z"></path><path fill-rule="evenodd" d="M12.5 15h-9v-1h9v1z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.heading({ level: 5 })" @click="commands.heading({ level: 5 })">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-h1 b-icon bi"><g><path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.heading({ level: 6 })" @click="commands.heading({ level: 6 })">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-type-h2 b-icon bi"><g><path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.bullet_list()" @click="commands.bullet_list">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-list-ul b-icon bi"><g><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></g></svg>
        </button>

        <button type="button" class="btn btn-sm btn-transparent" 
          :pressed="isActive.ordered_list()" @click="commands.ordered_list">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-list-ol b-icon bi"><g><path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"></path><path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"></path></g></svg>
        </button>

      </div>
    </editor-menu-bar>

    <editor-content class="html-editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Italic,
  Strike,
  Underline,
} from "tiptap-extensions";


export default {
  components: {    
    EditorContent,
    EditorMenuBar
  },
  props: {
    value: String,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new BulletList(),
          new Heading({ levels: [5, 6] }),
          new ListItem(),
          new OrderedList(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
        ],
        content: this.value,
        onUpdate: ({ getHTML }) => {
          this.$emit("input", getHTML());
        },
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">

.html-editor {
  border: 1px solid #ced4da;

  .ProseMirror {
    text-align: initial;

    &:focus {
      outline: none;
    }
  }

  .html-editor__menu  {
    padding: 0.375rem 0.75rem;
    border-bottom: 1px solid #ced4da;

    .btn[pressed="true"] {
      background-color: #dae0e5;
    }
  }

  .html-editor__content  {
    min-height: 200px;
    padding: 0.375rem 0.75rem;
  }
}
</style>