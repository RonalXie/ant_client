<template>
  <div>
      <div class="bg_user" style="text-align: center;width: 100%;position: relative">
          <div style="position: absolute;bottom: 16px;
    transform: translate(-50%);
      left: 50%;
            ">
              <a-avatar :size="96"  style="overflow: hidden;" class="user" src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"></a-avatar>
              <h1>RonalXie</h1>
              <span>Life is fantastic</span>
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
.user img:hover{
  transform: scale(1.1);
    transition: all 1.1s;
}
.bg_user{
    background-image: url("https://cdn.dribbble.com/userupload/6790091/file/original-3ded9e6c31ebf3d79bd84c1caaf4562f.png?compress=1&resize=1200x900");
    height: 320px;
    background-repeat: no-repeat;
    background-size:100% 60%;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);;



}

</style>
