<template>
  <div>
      <a-card hoverable style="margin: 12px 0;border-radius: 8px;overflow: hidden" class="article_card card_shadow">
          <img
                  slot="cover"
                  alt="example"
                  class="article_cover"
                  :src="article.cover"
          />


          <div>
              <h1>{{article.name}}</h1>
              <p>
                  {{article.abs}}
              </p>
          </div>

          <div style="display: flex;justify-content: space-between">
              <div>
                  <a-tag v-for="(item,index) in article.tagDos" :key="index">{{item.name}}</a-tag>
              </div>
              <div>
                  <span style="color: gray;font-size: 10px"><a-icon type="calendar" />&nbsp;2023-05-05</span>
              </div>
          </div>
      </a-card>
  </div>
</template>

<script>
export default {
    name: "ArticleCard",
    props:{
        article:{}
    }
}
</script>

<style>
.article_card .ant-card-body{
    padding: 10px;
}
.article_cover:hover{
    transform: scale(1.05);
    transition: all 0.8s;
}
</style>
