<template>
  <div class="card">
    <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
      <div slot="footer"><b>ant design vue</b> footer part</div>
      <a-list-item slot="renderItem" key="item.title" slot-scope="item">
        <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{ text }}
        </span>
        </template>
        <img
            slot="extra"
            width="280"
            alt="logo"
            style="border-radius: 4px"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        <a-list-item-meta>
          <template slot="description">
            <div>
              <a-tag color="#ED4C89">Java</a-tag>&nbsp;
              <a-tag color="#ED4C89">Python</a-tag>
            </div>
          </template>
          <h1 slot="title">{{ item.title }}</h1>
          <a-avatar slot="avatar" :src="item.avatar"/>
        </a-list-item-meta>
        <div style="height: 55px">
          {{ item.content }}
        </div>
      </a-list-item>
    </a-list>

  </div>
</template>
<script>
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top',
    description:
        'Ant Design, a design language for background applications,',
    content:
        'ity design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      },
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
    };
  },
};
</script>
<style></style>
