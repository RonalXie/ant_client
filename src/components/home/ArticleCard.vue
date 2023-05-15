<template>
  <div>
      <div class="article_card card">

        <a-row>
          <a-col :span="6">
            <img
                class="article_cover"
                :src="article.cover"
            />
          </a-col>
          <a-col :span="18">
            <div>
              <div>
                <h1>后端开发</h1>
                <p>
                  {{article.abs}}
                </p>
              </div>

              <div style="">
                <div>
                  <a-tag v-for="(item,index) in article.tagDos" :key="index">{{item.name}}</a-tag>
                </div>
                <div>
                  <span style="color: gray;font-size: 10px"><a-icon type="calendar" />&nbsp;2023-05-05</span>
                </div>
              </div>
            </div>

          </a-col>
        </a-row>


      </div>
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
.article_card{

}
.article_cover:hover{
    transform: scale(1.05);
    transition: all 0.8s;
}

</style>
