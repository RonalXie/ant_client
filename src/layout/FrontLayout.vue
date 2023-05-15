<template>
  <div>
      <div>
          <div class="header" >
            <a-row type="flex" justify="center">
              <a-col :xs="24" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
                <FrontHeader/>
              </a-col>
            </a-row>
          </div>
          <div :style="{paddingTop:'88px'}">
              <a-row type="flex" justify="center">
                  <a-col :xs="24" :sm="24" :md="22" :lg="20" :xl="20" :xxl="16">
                      <router-view/>
                  </a-col>
              </a-row>
          </div>
          <div>Footer</div>
      </div>
  </div>
</template>

<script>
import FrontHeader from "@/navbar/FrontHeader.vue";
export default {
    components: {FrontHeader}
}
</script>

<style scoped>

</style>
