<template>
  <div class="home">
    <div>
      <a-row :gutter="16" type="flex" justify="center">
        <a-col :xs="22" :xl="4">
          <a-affix :offset-top="80">
            <div>
              <category-card/>
              <br>
              <tag-cloud-card/>
            </div>
          </a-affix>
        </a-col>
        <a-col :xs="22" :xl="14">
          <top-content-card/>
           <br>
          <article-list-card></article-list-card>
        </a-col>
        <a-col :xs="22" :xl="6">
            <div>
            <user-card/>
            <br>
            <recent-card/>
            <br>
            <sort-list-card/>
          </div>
        </a-col>
      </a-row>
    </div>


  </div>
</template>

<script>

import {selectPage} from "@/api/article";
import CategoryCard from "@/components/home/sider/left/CategoryCard.vue";
import TopContentCard from "@/components/home/top/TopContentCard.vue";
import RecentCard from "@/components/home/sider/right/RecentCard.vue";
import SortListCard from "@/components/home/sider/right/SortListCard.vue";
import ArticleListCard from "@/components/home/ArticleListCard.vue";
import UserCard from "@/components/home/sider/right/UserCard.vue";
import TagCloudCard from "@/components/home/sider/left/TagCloudCard.vue";


export default {
  name: 'HomeView',
  components: {

    TagCloudCard,
    UserCard,
    ArticleListCard,
    SortListCard,
    RecentCard,
    TopContentCard,
    CategoryCard,
  },
  data() {
    return {
      article_page: [],

    }
  },
  created() {
    selectPage({
      pageNum: 1,
      pageSize: 10,
    }).then(res => {
      this.article_page = res.data.obj.pageData
      console.log(this.article_page)
    })
  }
}
</script>
<style>
. top_content{
  text-align: center;
}

</style>
