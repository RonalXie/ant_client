<template>
  <div class="home">
    <div>
      <top-content-card/>
      <br>
      <a-row :gutter="16" type="flex" justify="center">
<!--        <a-col :xs="22" :xl="4">-->
<!--          <a-affix :offset-top="80">-->
<!--            <div>-->
<!--              <category-card/>-->
<!--              <br>-->
<!--              <tag-cloud-card/>-->
<!--            </div>-->
<!--          </a-affix>-->
<!--        </a-col>-->
        <a-col :xs="22" :xl="17">
          <category-tab/>
          <br>
          <article-card-list></article-card-list>
        </a-col>
        <a-col :xs="22" :xl="7">
            <div>
            <sort-list-card/>
          </div>
        </a-col>
      </a-row>
    </div>


  </div>
</template>

<script>

import TopContentCard from "@/components/home/top/TopContentCard.vue";
import SortListCard from "@/components/home/sider/right/SortListCard.vue";
import ArticleCardList from "@/components/home/ArticleCardList.vue";
import CategoryTab from "@/components/home/CategoryTab.vue";

export default {
  name: 'HomeView',
  components: {
    CategoryTab,
    ArticleCardList,
    SortListCard,
    TopContentCard,
  },
  data() {
    return {
      article_page: [],

    }
  },
  created() {

  }
}
</script>
<style>
. top_content{
  text-align: center;
}

</style>
