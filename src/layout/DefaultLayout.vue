<template>
  <div>
      <a-layout>
          <a-layout-header :style="{padding:0,background:'#fff', position: 'fixed', zIndex: 1,width:'100%'}"><DefaultHeader/></a-layout-header>
          <a-layout-content :style="{background:'#fff',padding:'88px'}">
              <a-row type="flex" justify="center">
                  <a-col :xs="24" :sm="20" :md="18" :lg="18" :xl="16">
                      <router-view/>
                  </a-col>
              </a-row>
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
  </div>
</template>

<script>
import DefaultHeader from "@/navbar/DefaultHeader.vue";

export default {
    name: "DefaultLayout",
    components: {DefaultHeader}
}
</script>

<style scoped>

</style>
