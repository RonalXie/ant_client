<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<style>
#app {
  /*font-family:  sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*width:100%;*/
  height:100%;
  /*position:fixed;*/
  /*background-size:100% 100%;*/
}

</style>
<script>
import FrontLayout from "@/layout/FrontLayout.vue";

export default {
  components:{
    FrontLayout
  },
  computed: {
    layout() {
      return "layout-" + ( this.$route.meta.layout || "empty" ).toLowerCase() ;
    }
  },
}
</script>
