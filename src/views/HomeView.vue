<template>
  <div class="home">
      <div class="top_user">
          <a-row :gutter="16">
              <a-col :span="18">
                  <CarouselCard/>
              </a-col>
              <a-col :span="6">
                  <UserCard/>
              </a-col>
          </a-row>
      </div>
      <div class="top_content">
          <a-card hoverable class="card_shadow">
              <a-button shape="round" type="primary" size="large" ghost v-for="i in 10" :key="i" style="margin: 0 5px">
                  Primary
              </a-button>
          </a-card>
      </div>

      <a-row :gutter="16">
          <a-col :span="6" v-for="(item,index) in this.article_page" :key="index">
              <ArticleCard :article="item"/>
          </a-col>
      </a-row>
  </div>
</template>

<script>

import ArticleCard from "@/components/home/ArticleCard.vue";
import UserCard from "@/components/home/UserCard.vue";
import {selectPage} from "@/api/article";
import CarouselCard from "@/components/home/CarouselCard.vue";

export default {
  name: 'HomeView',
  components: {
      CarouselCard,
      UserCard,
      ArticleCard
  },
    data(){
      return{
          article_page:[]
      }
    },
    created() {
      selectPage({
          pageNum:1,
          pageSize:10,
      }).then(res=>{
          this.article_page=res.data.obj.pageData
          console.log(this.article_page)
      })
    }
}
</script>
<style>
.top_content {


}
</style>
