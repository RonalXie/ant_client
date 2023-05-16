<template>
  <div style="height: 100%">
      <div style="height: 100%">
         <ArticleTable/>
      </div>
  </div>
</template>

<script>

import ArticleTable from "@/components/admin/article/ArticleTable.vue";

export default {
    name: "ArticleView",
  components: {ArticleTable}
}
</script>

<style scoped>

</style>
