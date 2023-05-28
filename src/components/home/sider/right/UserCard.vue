<template>
  <div>
    <div class="bg_user">
      <div style="position: absolute;bottom: 14px;left: 0;right:0;margin:auto;text-align: center;
            ">
        <a-avatar :size="108" style="overflow: hidden;" class="user"
                  src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"></a-avatar>
        <div style="font-size: 24px">
          RonalXie
        </div>
        <div style="margin: 12px 0">Life is fantastic</div>
        <div style="font-size: large">
          <span>文章: 18</span>
          <a-divider type="vertical"></a-divider>
          <span>分类: 18</span>
          <a-divider type="vertical"></a-divider>
          <span>标签: 18</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard"
}
</script>

<style>
.user img:hover {
  transform: scale(1.1);
  transition: all 1.1s;
}

.bg_user {
  background: #ffffff url("@/assets/cool-background.png") no-repeat;
  height: 445px;
  background-size: 100% 60%;
  border-radius: 8px;
  box-shadow: 2px 1px 12px 3px #eee;
  width: 100%;
  position: relative


}

</style>
