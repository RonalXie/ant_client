<template>
    <div class="card" style="height:100%">
        <a-form layout="inline">
            <a-form-item label="按名称">
                <a-input placeholder="" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left: 8px">重置</a-button>
            </a-form-item>
        </a-form>
        <div style="text-align: right">
            <a-button type="primary" icon="plus" @click="showModal">新建</a-button>
        </div>
        <a-table :columns="columns" :data-source="this.tagData" :rowKey="(record,index)=>{return record.sid}">
            <a slot="name" slot-scope="name">{{ name }}</a>
            <span slot="articleCount">
                0
            </span>
            <span slot="createTime" slot-scope="createTime">
                {{createTime}}
            </span>
            <span slot="action">
                <a-button type="primary" icon="edit">编辑</a-button>
                <a-divider type="vertical"/>
                <a-button type="danger" icon="delete">删除</a-button>
                <a-divider type="vertical"/>
            </span>

        </a-table>
      <a-modal v-model="visible" title="添加标签" @ok="handleOk" centered>
        <a-input v-model="tagName"></a-input>
      </a-modal>
    </div>

</template>
<script>
import {insertTag, selectPage} from "@/api/tag";

const columns = [
    {
        title: "标题",
        dataIndex: 'name',
        key: 'name',
        scopedSlots: {customRender: 'name'},
    },
    {
        title: '文章数',
        dataIndex: 'articleCount',
        key: 'articleCount',
        scopedSlots: {customRender: 'articleCount'}
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        scopedSlots: {customRender: 'createTime'}
    },
    {
        title: 'Action',
        key: 'action',
        scopedSlots: {customRender: 'action'},
    },
];


export default {
  data() {
    return {
      columns,
      visible: false,
      tagName:"",
      tagData:[]

    };
  },
  created() {
    selectPage({
      pageSize:10,
      pageNum:1
    }).then(res=>{
      this.tagData=res.data.record.pageData
    })
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      insertTag({
        name:this.tagName
      })
      this.visible = false;
    },
  },
};
</script>
