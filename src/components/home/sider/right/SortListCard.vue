<template>
  <div class="card">
    <h2>热门文章</h2>
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
        <div v-for="(item,index) in this.dataList" :key="index">
          <div class="vertical_center">
            <div style="margin-right:16px;width: 108px;height: 72px;overflow: hidden;border-radius: 8px;">
              <img :src="item.cover" alt="" style="border-radius: 8px;object-fit: cover" width="100%" height="100%" class="scale">
            </div>
            <div>
              <div style="height: 50px">
                <h4>{{ item.title }}</h4>
              </div>
              <span style="font-size: small"><a-icon type="calendar"></a-icon> {{item.createTime}}</span>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {selectHot} from "@/api/article";

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
      dataList:[]
    };
  },
  created() {
    selectHot().then((res)=>{
      this.dataList=res.data.record
    })
  }

};
</script>

<style scoped>
.recent_list {
  list-style: none;
}

.recent_list li {

}
</style>
