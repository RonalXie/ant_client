<template>
  <div>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
        <carousel-card/>
        <tab-card/>
      </a-col>
      <a-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8">
        <div style="height: 385px;display:flex;justify-content: space-between;flex-direction: column">
          <div style="width: 100%;height: 120px" class="ant-btn ant-btn-primary vertical_center line_center">
            <span style="font-size: large">
              Back Home
            </span>
          </div>

          <div style="width: 100%;height: 120px" class="ant-btn ant-btn-danger vertical_center line_center">
            <span style="font-size: large">
              Back Home
            </span>
          </div>
          <div style="width: 100%;height: 120px" class="ant-btn ant-btn-primary vertical_center line_center">
            <span style="font-size: large">
              Back Home
            </span>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CarouselCard from "@/components/home/top/CarouselCard.vue";
import TabCard from "@/components/home/top/TabCard.vue";

export default {
  name: "TopContentCard",
  components: {TabCard, CarouselCard}
}
</script>

<style scoped>

</style>