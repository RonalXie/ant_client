<template>
  <div class="home">
      <div class="top_content">
          <CarouselCard/>

      </div>

      <a-row :gutter="16">
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" v-for="index in 16" :key="index">
              <ArticleCard/>
          </a-col>
      </a-row>
  </div>
</template>

<script>

import ArticleCard from "@/components/home/ArticleCard.vue";
import CarouselCard from "@/components/home/CarouselCard.vue";

export default {
  name: 'HomeView',
  components: {
      CarouselCard,
      ArticleCard
  }
}
</script>
<style>
.top_content {


}
</style>
