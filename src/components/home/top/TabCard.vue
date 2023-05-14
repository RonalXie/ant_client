<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <div class="card" style="text-align: center">
          <span style="font-size: large;"><b>👉 为你推荐</b></span>
        </div>

      </a-col>
      <a-col :span="8">
        <div class="card" style="text-align: center">
          <span style="font-size: large;"><b>👍 热门阅读</b></span>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="card" style="text-align: center">
          <span style="font-size: large;"><b>🫰 最近更新</b></span>
        </div>
      </a-col>
    </a-row>
  </div>

</template>

<script>
export default {
  name: "TabCard"
}
</script>

<style scoped>
.btn_my{
  background-color: #ffe08a;
}
</style>