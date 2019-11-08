<template>
  <div>
    <div class="document-editor">
      <div class="document-editor__toolbar"></div>
      <div class="document-editor__editable-container">
        <div class="document-editor__editable">
          <p>The initial editor data.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/document-editor.css'
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  mounted() {
    DecoupledEditor.create(
      document.querySelector(".document-editor__editable"),
      {
        cloudServices: {}
      }
    )
      .then(editor => {
        const toolbarContainer = document.querySelector(
          ".document-editor__toolbar"
        );

        toolbarContainer.appendChild(editor.ui.view.toolbar.element);

        window.editor = editor;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

