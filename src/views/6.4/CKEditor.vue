<template>
  <div class="_ckeditor">
    <div>
      <el-button @click="showTxt">查看文档</el-button>
      <el-button @click="setTxt">写入文档</el-button>
    </div>
    <!-- <div class="document-editor">
      <div class="document-editor__toolbar"></div>
      <div class="document-editor__editable-container">
        <div class="document-editor__editable">
          <p>The initial editor data.</p>
        </div>
      </div>
    </div> -->

    <div ref="document-editor" class="document-editor">
      <!-- 工具条位置 -->
      <div ref="document-content" class="document-editor__editable-container">
        <ckeditor :editor="editor" v-model="editorData" @ready="onReady"></ckeditor>
      </div>
    </div>
  </div>
</template>


<script>
import '@/assets/document-editor.css'
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

export default {
  data() {
    return {
      editor: DecoupledEditor,
      editorData: ""
    };
  },
  methods: {
    onReady(editor) {
      // debugger;
      //添加class
    //   debugger;
      //获取内容区
      var contentDom = editor.ui.getEditableElement();
      contentDom.classList.add("document-editor__editable");
      //获取工具条
      var toolDom = editor.ui.view.toolbar.element;
      toolDom.classList.add("document-editor__toolbar");
      this.$refs["document-editor"].insertBefore(
        toolDom,
        this.$refs["document-content"]
      );
    },
    //查看文档
    showTxt() {
      console.log(this.editorData);
    },
    //写入文档
    setTxt() {
      this.editorData = "1111";
    }
  }
};
</script>
