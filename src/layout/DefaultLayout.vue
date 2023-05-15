<template>
  <div>
      <a-layout>
          <a-layout-header class="card_shadow" :style="{padding:'0 16px',background:'#fff', position: 'fixed', zIndex: 1,width:'100%'}"><DefaultHeader/></a-layout-header>
          <a-layout-content :style="{background:'#fff',padding:'88px'}">
              <a-row type="flex" justify="center">
                  <a-col :span="20">
                      <router-view/>
                      <a-form-item label-width=""></a-form-item>
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

<style>

</style>
