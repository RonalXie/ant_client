<template>
    <div class="card" style="height:100%">
        <a-form layout="inline">
            <a-form-item label="标题">
                <a-input placeholder="" />
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
      <a-table :columns="columns" :data-source="data" :scroll="{y:400}">
        <a slot="name" slot-scope="name">{{ name }}</a>
        <p slot="abs" slot-scope="abs">{{ abs }}</p>
        <span slot="cover" slot-scope="cover">
                <img :src="cover" width="80" height="80" />
        </span>
        <span slot="tags" slot-scope="tags">
              <a-tag
                  v-for="tag in tags"
                  :key="tag"
                  :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
        <span slot="top" slot-scope="top">
                <a-switch v-if="top==1" default-checked></a-switch>
                <a-switch v-else-if="top==0"></a-switch>
            </span>
        <span slot="action">
                <a-button type="primary" icon="edit">编辑</a-button>
                <a-divider type="vertical"/>
                <a-button type="danger" icon="delete">删除</a-button>
                <a-divider type="vertical"/>
            </span>

      </a-table>
    </div>

</template>
<script>
const columns = [
  {
    title: "标题",
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {customRender: 'name'},
  },
  {
    title: '摘要',
    dataIndex: 'abs',
    key: 'abs',
    scopedSlots: {customRender: 'abs'}
  },
  {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
    scopedSlots: {customRender: 'category'}
  },
  {
    title: '封面',
    dataIndex: 'cover',
    key: 'cover',
    scopedSlots: {customRender: 'cover'}
  },
  {
    title: '分类',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: {customRender: 'tags'},
  },
  {
    title: '点击量',
    dataIndex: 'views',
    key: 'views',
  },
    {
        title: '评论数',
        dataIndex: 'comment',
        key: 'comment',
        scopedSlots: {customRender: 'comment'}
    },
  {
    title: '置顶',
    dataIndex: 'top',
    key: 'top',
    scopedSlots: {customRender: "top"}
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
    name: 'John Brown',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'https://cdn.dribbble.com/users/14059/avatars/small/fbf6169ddf58e93ca4fd6645af81371b.jpg?1514924171',
    tags: ['nice', 'developer'],
    top:1
  },
  {
    key: '2',
    name: 'Jim Green',
    abs:"asdfasdfasdfasdfadsf",
    views: 42,
    cover: 'London No. 1 Lake Park',
    tags: ['loser'],
    top:0
  },
  {
    key: '3',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },
  {
    key: '4',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },
  {
    key: '5',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },
  {
    key: '6',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },
  {
    key: '7',
    name: 'Joe Black',
    abs:"asdfasdfasdfasdfadsf",
    views: 32,
    cover: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    top: 0
  },



];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
