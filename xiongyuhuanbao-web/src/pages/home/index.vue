<template>
  <div>
    <!-- <tinymce-editor ref="editor"
      v-model="msg"
      :disabled="disabled"
      @onClick="onClick">
    </tinymce-editor> -->
    <tinymce v-model="content" :height="300" />
    <el-button @click="sureActon">预览</el-button>
    <!-- <div v-html="content"></div> -->
    <div >{{content}}</div>
  </div>
</template>
<script>
// import TinymceEditor from '@/components/tinymce-editor'
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    Tinymce
  },
  mounted() {

  },
  data() {
    return {
      content:
      ``,
      msg: 'Welcome to Use Tinymce Editor',
      disabled: false
      // setting: {
      //   menubar: false,
      //   toolbar:
      //     "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | lists image media table | link unlink | numlist bullist  | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat |",
      //   toolbar_drawer: "sliding",
      //   quickbars_selection_toolbar:
      //     "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
      //   plugins: "link image media table lists fullscreen quickbars",
      //   language: "zh_CN",
      //   height: 400,
      //   setup: (editor) => {
      //   editor.ui.registry.addButton('imageUpload', {
      //     tooltip: '插入图片',
      //     icon: 'image',
      //     onAction: () => {
      //       // let upload = that.$refs.imageUpload
      //       // upload.handleClick()
      //     }
      //   })
      // }
      // },
    };
  },
  methods: {

    sureActon() {
      console.log(JSON.stringify(this.content));
    },
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear () {
      this.$refs.editor.clear()
    }
    
  },
};
</script>

<style scope>
</style>