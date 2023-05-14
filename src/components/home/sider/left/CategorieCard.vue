<template>
  <div class="card">
    <h2>技术频道</h2>
    <div>
        <div v-for="(item,index) in data" :key="index">
            <router-link to=""><h3 class="link_cat"> <a-icon type="code"  /> &nbsp;{{ item }}</h3></router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorieCard",
  data(){
    return{
      data : [
        '后端开发',
        '前端开发',
        '数据挖掘',
        '人工智能',
        '大数据',
      ],
    }
  }
}
</script>

<style scoped>
.link_cat:hover{
  color:#485fc7 ;
}
</style>