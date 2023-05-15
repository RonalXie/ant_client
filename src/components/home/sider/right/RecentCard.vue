<template>
  <div class="card">
    <h2>最近更新</h2>
    <!--    <a-list item-layout="horizontal" :data-source="data">-->
    <!--      <a-list-item slot="renderItem" slot-scope="item">-->
    <!--        <a-list-item-meta-->

    <!--        >-->
    <!--          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>-->
    <!--          <template slot="description">-->
    <!--            <div>-->
    <!--              <p>2023-05-12</p>-->
    <!--            </div>-->
    <!--          </template>-->
    <!--          <a-avatar-->
    <!--              slot="avatar"-->
    <!--              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"-->
    <!--          />-->
    <!--        </a-list-item-meta>-->
    <!--      </a-list-item>-->
    <!--    </a-list>-->
    <div>
      <div class="recent_list">
        <div v-for="(item,index) in data" :key="index">
          <div class="vertical_center">
            <div style="margin-right:16px">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="" style="border-radius: 4px" width="108" height="72">
            </div>
            <div>
              <div style="height: 50px">
                <h4>{{ item.title }}</h4>
              </div>
              <span style="font-size: small"><a-icon type="calendar"></a-icon> 2023-05-13</span>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },

];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>

<style scoped>
.recent_list {
  list-style: none;
}

.recent_list li {

}
</style>