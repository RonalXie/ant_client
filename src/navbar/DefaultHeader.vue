<template>
  <div>
      <a-row>
          <a-col :span="4"></a-col>
          <a-col :span="16">
              <a-menu v-model="current" mode="horizontal" :style="{ lineHeight: '64px',border:'none',textAlign:'center'}">
                  <a-menu-item key="home"> <a-icon type="home" />首页</a-menu-item>
                  <a-menu-item key="app"> <a-icon type="appstore" />后端开发</a-menu-item>
                  <a-menu-item key="alipay">
                      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
                      >About</a
                      >
                  </a-menu-item>
              </a-menu>
          </a-col>
          <a-col :span="4">
              <HeaderRight/>
          </a-col>
      </a-row>

  </div>
</template>

<script>
import HeaderRight from "@/navbar/HeaderRight.vue";

export default {
    name: "DefaultHeader",
    components: {HeaderRight},
    data(){
        return{
            current: ['home'],
        }
    }
}
</script>

<style scoped>

</style>
