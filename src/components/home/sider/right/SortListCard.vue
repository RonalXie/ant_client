<template>
  <div class="card">
    <h2>排行榜</h2>
    <div class="vertical_center" v-for="i in 10" :key="i" style="margin-top: 16px">
      <div>
        <a-tag color="#f50" v-show="i<=3" style="width: 24px">
          {{ i }}
        </a-tag>
        <a-tag color="pink" v-show="i>3" style="width: 24px">
          {{ i }}
        </a-tag>
      </div>
      <div style="font-size: large">
        A title
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SortListCard"
}
</script>

<style scoped>

</style>