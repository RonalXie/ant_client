<template>
  <div>
      <a-row :gutter="16">
          <a-col :span="2">
              <a-affix :offset-top="80">

                <left-util-card/>
              </a-affix>
          </a-col>
          <a-col :span="16">
              <article-content-card/>
          </a-col>
          <a-col :span="6">
              <user-card/>
                  <br>
              <recent-card/>

          </a-col>
      </a-row>
  </div>
</template>

<script>
import RecentCard from "@/components/home/sider/right/RecentCard.vue";
import UserCard from "@/components/home/sider/right/UserCard.vue";
import LeftUtilCard from "@/components/article/LeftUtilCard.vue";
import ArticleContentCard from "@/components/article/ArticleContentCard.vue";

export default {
    name: "ArticleView",
    components: {ArticleContentCard, LeftUtilCard, UserCard, RecentCard}
}
</script>

<style scoped>

</style>
