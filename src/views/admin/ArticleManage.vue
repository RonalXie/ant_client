<template>
  <div class="card" style="height:100%">
    <a-form layout="inline">
      <a-form-item label="标题">
        <a-input placeholder=""/>
      </a-form-item>
      <a-form-item label="标签">
        <a-select
            mode="multiple"
            :default-value="['a1', 'b2']"
            style="width: 200px"
            placeholder="Please select"
        >
          <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary">查询</a-button>
        <a-button style="margin-left: 8px">重置</a-button>
      </a-form-item>


    </a-form>
    <div style="text-align: right">
      <a-button type="primary" icon="plus" @click="$router.push('/article/create')">新建</a-button>
    </div>
    <br>
    <a-table :loading="visible"
             :rowKey="(record,index)=>{return record.sid}"
             :columns="columns"
             :data-source="data"
             :scroll="{x:400,y:700}"
             :pagination="pageParam"
             @change="handleChange">
      <a slot="name" slot-scope="title">{{ title }}</a>
      <!--            <p slot="abs" slot-scope="abs">{{ abs }}</p>-->
      <span slot="cover" slot-scope="cover">
                <img :src="cover" width="140" height="80" style="object-fit: cover"/>
        </span>
      <span slot="tags" slot-scope="tags">
              <a-tag
                  v-for="tag in tags"
                  :key="tag.sid"
              >
                {{ tag.name }}
              </a-tag>
            </span>
      <span slot="category" slot-scope="category">
              <a-tag
                  color="orange"
              >
                {{ category === null ? "暂未选择" : category.name }}
              </a-tag>
            </span>
      <span slot="top" slot-scope="top">
                <a-switch v-if="top==1" default-checked></a-switch>
                <a-switch v-else-if="top==0"></a-switch>
            </span>
      <template slot="action" slot-scope="record">
        <div style="display: flex">
          <a-button type="primary" icon="edit" @click="handleUpdate(record)">编辑</a-button>&nbsp;
          <a-button type="danger" icon="delete" @click="handleDelete(record)">删除</a-button>
        </div>
      </template>

    </a-table>
  </div>

</template>
<script>
import {deleteArticleBySid, selectArticleById, selectPage} from "@/api/article";

const columns = [
  {
    title: '封面',
    key: "cover",
    dataIndex: 'cover',
    scopedSlots: {customRender: 'cover'},
    align: 'center',
    width: 160

  },
  {
    title: "标题",
    dataIndex: 'title',
    key: "title",
    scopedSlots: {customRender: 'name'},
    ellipsis: true,
    align: 'center',
    width: 280


  },
  // {
  //   title: '摘要',
  //   dataIndex: 'abs',
  //   key: 'abs',
  //   scopedSlots: {customRender: 'abs'},
  //   ellipsis: true,
  //   align: 'center',
  //   width: 340
  //
  // },
  {
    title: '分类',
    key: "category",
    dataIndex: 'category',
    scopedSlots: {customRender: 'category'},
    align: 'center',
    width: 100

  },

  {
    title: '标签',
    key: "tags",
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
    align: 'center',
    width: 200

  },
  {
    title: '点击量',
    key: "views",
    align: 'center',

    dataIndex: 'views',
    scopedSlots: {customRender: 'views'},
    width: 80


  },
  {
    title: '评论数',
    key: "comment",
    dataIndex: 'comment',
    scopedSlots: {customRender: 'comment'},
    align: 'center',
    width: 80

  },
  {
    title: '置顶',
    key: "top",
    dataIndex: 'top',
    scopedSlots: {customRender: "top"},
    align: 'center',
    width: 70

  },
  {
    title: '操作',
    scopedSlots: {customRender: 'action'},
    align: 'center',
    width: 200

  },
];


export default {
  data() {
    return {
      data: [],
      visible: true,
      columns,
      pageParam: {
        pageSize: 10,
        total: 0
      }
    };
  },
  created() {
    this.initData()
  },
  methods: {
    initData(){
      selectPage({
        pageSize: 10,
        pageNum: 1
      }).then((res) => {
        this.data = res.data.record.dataList
        this.pageParam.total = res.data.record.total
        this.visible = false;
      })
    },
    // eslint-disable-next-line no-unused-vars
    handleChange(pagination, filters, sorter) {
      this.visible = true
      selectPage({
        pageSize: pagination.pageSize,
        pageNum: pagination.current
      }).then((res) => {
        // this.pageParam.total=res.data.record.total
        this.data = res.data.record.dataList
        this.visible = false;
      })

    },
    handleDelete(record){
      this.visible=true
      // eslint-disable-next-line no-unused-vars
      deleteArticleBySid(record.sid).then((res)=>{
          this.initData()
      })
    },
    handleUpdate(record){
      selectArticleById(record.id).then(res=>{
        this.updateData=res.data.record
        this.$router.push({
          name:"updateArticle",
          params:{
            data:res.data.record
          }
        })
      })
    }
  }
};
</script>
