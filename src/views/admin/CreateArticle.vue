<template>
  <div class="edit-container">
    <div class="card" style="padding: 0">
      <EditorCard @getEditor="doEditor"/>
      <br>
      <div style="padding: 0 24px 24px 24px;text-align: right">
        <a-button type="primary" @click="showDrawer">
          发布
        </a-button>
         &nbsp;
        <a-button>
          清空
        </a-button>
      </div>
    </div>
    <a-drawer
        title="Basic Drawer"
        placement="right"
        :closable="false"
        :visible="visible"
        width="450"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>

  </div>
</template>

<script>


import EditorCard from "@/components/admin/article/EditorCard.vue";

export default {
  name: "CreateArticle",
  components: {
    EditorCard,
  },
  data() {
    return {
      visible: false,
      title_value: "",
      abs_value: "",
      addTagName: "",
      tagBut:false,
      tagData:[],
      cover_url:"",
      tag_value:[]

    }
  },
  created() {

  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    pushArticle(){
      const postData={
        name:this.title_value,
        abs:this.abs_value,
        cover:this.cover_url,
        tags:this.tag_value,
        content:this.content,
        views:0,
        top:0,

      }
      console.log(postData)

    },
    handleChange(value, option) {
      if (option.length <= 2) {
        this.tag_value=value
        console.log(value, option.length);
      } else {
        this.$message.warn("最多只能选择两个标签！", 3)
      }
    },
    handleOk() {
      this.tagBut=true
      // setTimeout(this.tagBut=false,3000)

    },
    doEditor(editor) {
      this.content=editor.getText()
      this.abs_value = editor.getText().slice(0, 200);
    },
    getCoverUrl(imgUrl){
      console.log(imgUrl)
      this.cover_url=imgUrl
    }
  }
}
</script>

<style scoped>
.edit-container {


}
</style>

