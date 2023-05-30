<template>
  <div class="edit-container">
    <div class="card" style="padding: 0">
      <EditorCard @handlePublish="getEditorValue" :text="this.updateData.content" />
    </div>
    <a-drawer
        title="编辑文章信息"
        placement="right"
        :closable="false"
        :visible="visible"
        width="450"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
            label="标题"
        >
          <a-input  v-decorator="[
          'title',
          { rules: [{ required: true, message: 'Please input your username!' }],initialValue:this.updateData.title },
        ]" placeholder="input placeholder" />
        </a-form-item>

        <a-form-item
            label="摘要"
        >
          <a-textarea   v-decorator="[
          'abs',
          { rules: [{ required: true, message: 'Please input your username!' }] ,initialValue:this.updateData.abs},
        ]" placeholder="Basic usage" :rows="4" :autoSize="{ minRows: 4, maxRows: 4 }" />
        </a-form-item>
        <a-form-item
            label="分类"
        >
          <a-select v-decorator="[
          'categoryId',
          { rules: [{ required: true, message: 'Please input your username!' }],initialValue:this.updateData.category.id },
        ]" style="width: 100%">
            <a-select-option v-for="(item,index) in this.categoryData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
            label="标签"
        >
          <a-select v-decorator="[
          'tagIds',
          { rules: [{ required: true, message: 'Please input your username!' }],initialValue:this.updateTags },
        ]" style="width: 100%" @change="handleChange"  mode="multiple">
            <a-select-option v-for="(item,index) in this.tagData" :value="item.id" :key="index">
              {{item.name}}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
            label="置顶"
        >
          <a-switch v-decorator="[
          'top',{valuePropName: 'checked',initialValue:this.updateData.top}]">
          </a-switch>
        </a-form-item>
        <a-form-item
            label="封面图"
        >
          <UploadCover v-decorator="[
          'cover',
        ]" :img="updateData.cover"/>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            发布
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>

  </div>
</template>

<script>
import EditorCard from "@/components/admin/article/EditorCard.vue";
import UploadCover from "@/components/admin/article/UploadCover.vue";
import {getCategories} from "@/api/category";
import {getTags} from "@/api/tag";
import {updateArticle} from "@/api/article";
export default {
  name: "CreateArticle",
  components: {
    EditorCard,
    UploadCover
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
      tag_value:[],
      categoryData:{},
      form:this.$form.createForm(this),
      updateData:[],
      updateTags:[]

    }
  },
  beforeCreate() {

  },
  created() {
    getCategories().then((res)=>{this.categoryData=res.data.record})
    getTags().then((res)=>{this.tagData=res.data.record})
    this.handleUpdate()

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
        // abs:this.abs_value,
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
    handleSubmit(e) {
      e.preventDefault();
      let formData=this.form.getFieldsValue()
      formData['content']=this.content
      formData['abs']=this.abs_value
      formData['id']=this.updateData.id



      console.log(formData,"表单")
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      updateArticle(formData).then((res)=>{
        console.log(res.data)
      })
    },
    handleOk() {
      this.tagBut=true
      // setTimeout(this.tagBut=false,3000)

    },
    getEditorValue(value) {
      console.log(value)
      this.content=value.content
      this.abs_value = this.content.slice(0, 200);
      this.visible=value.drawerVisible
    },
    getCoverUrl(imgUrl){
      console.log(imgUrl)
      this.cover_url=imgUrl
    },
    handleUpdate(){
      this.updateData=this.$route.params.data
        console.log(this.updateData,"data11")
        for (let tag of this.updateData.tags) {
          this.updateTags.push(tag.id)
        }

    }
  }
}
</script>

<style scoped>
.edit-container {


}
</style>

