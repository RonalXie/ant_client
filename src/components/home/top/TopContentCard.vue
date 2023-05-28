<template>
  <div>
    <a-row :gutter="16" type="flex" justify="center">

      <a-col :xs="22" :sm="14" :md="16" :lg="16" :xl="17">
        <a-row :gutter="16">
          <a-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
            <carousel-card/>
          </a-col>
          <a-col :xs="24" :sm="10" :md="8" :lg="8" :xl="8">
            <div style="display: flex;flex-direction: column;justify-content: space-between;height: 350px">

              <div style="position: relative;box-sizing: border-box;border-radius: 8px;overflow: hidden">
                <div>
                  <img height="170"
                       width="100%"
                       src="https://pandapro.halo.nicetheme.xyz/upload/img00046.jpg"
                       style="object-fit: cover" alt="">
                </div>
                <div class="fix_bottom mask_title" style="height: 100%;opacity: 0.3"/>
                <div class="fix_bottom bottom_title" style="height: 100%;display: flex;align-items: center;justify-content: center">
                  <span style="color: #fff;font-size: large">后端开发</span>
                </div>
              </div>
              <div style="position: relative;box-sizing: border-box;border-radius: 8px;overflow: hidden">
                <div>
                  <img height="170"
                       width="100%"
                       src="https://pandapro.halo.nicetheme.xyz/upload/img00055.jpg"
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
      </a-col>


      <a-col :xs="22" :sm="14" :md="16" :lg="16" :xl="7">
        <user-card/>
      </a-col>

    </a-row>
  </div>
</template>

<script>
import CarouselCard from "@/components/home/top/CarouselCard.vue";
import tabCard from "@/components/home/top/TabCard.vue";
import UserCard from "@/components/home/sider/right/UserCard.vue";

export default {
  name: "TopContentCard",
  components: {UserCard, CarouselCard,tabCard}
}
</script>

<style scoped>

</style>
