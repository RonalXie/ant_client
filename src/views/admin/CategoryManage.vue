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
        <a-table :columns="columns" :data-source="data" :scroll="{y:400}">
            <a slot="name" slot-scope="name">{{ name }}</a>
            <span slot="articleCount" slot-scope="articleCount">
                {{articleCount}}
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
      <a-modal v-model="visible" title="添加分类" @ok="handleOk" centered>
          <a-input v-model="categoryName"></a-input>
      </a-modal>
    </div>

</template>
<script>
import {insertCategory} from "@/api/category";

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

const data = [
    {
        key: '1',
        name: '后端开发',
        articleCount: 32,
        createTime: '2023-05-17'
    },
    {
        key: '2',
        name: '人工智能',
        articleCount: 32,
        createTime: '2023-05-17'
    },
    {
        key: '3',
        name: '前端开发',
        articleCount: 32,
        createTime: '2023-05-17'
    }


];

export default {
    data() {
        return {
            data,
            columns,
          visible: false,
          categoryName:''

        };
    },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      insertCategory({
        name:this.categoryName
      })
      this.visible = false;
    },
  },

};
</script>
