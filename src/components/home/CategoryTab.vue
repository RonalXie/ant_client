<template>
  <div class="card" style="padding: 12px">
    <a-button v-for="(item,index) in this.categoryData" :key="index"  shape="round" style="margin-right: 8px">{{item.name}}</a-button>
  </div>
</template>

<script>
import {getCategories} from "@/api/category";

export default {
  data(){
    return{
      categoryData:[]
    }
  },
  created() {
    getCategories().then(res=>{
      this.categoryData=res.data.record
    })
  }

}
</script>

<style scoped>

</style>
