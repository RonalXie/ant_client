<template>
  <div>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
        <carousel-card/>
      </a-col>
      <a-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8">

          <div style="display: flex;flex-direction: column;justify-content: space-between;height: 300px">

              <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                  <div>
                      <img height="140"
                           width="100%"
                           src="https://pandapro.halo.nicetheme.xyz/upload/img00046.jpg"
                           style="object-fit: cover" alt="">
                  </div>
                  <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                  <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                      <span style="color: #fff;font-size: large">后端开发</span>
                  </div>
              </div>
              <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
                  <div>
                      <img height="140"
                           width="100%"
                           src="https://pandapro.halo.nicetheme.xyz/upload/img00046.jpg"
                           style="object-fit: cover" alt="">
                  </div>
                  <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                  <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                      <span style="color: #fff;font-size: large">前端开发</span>
                  </div>
              </div>

          </div>


      </a-col>
    </a-row>
      <tab-card/>
  </div>
</template>

<script>
import CarouselCard from "@/components/home/top/CarouselCard.vue";
import tabCard from "@/components/home/top/TabCard.vue";

export default {
  name: "TopContentCard",
  components: { CarouselCard,tabCard}
}
</script>

<style scoped>

</style>
