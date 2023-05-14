<template>

    <a-carousel :after-change="onChange" dot-position="right">
        <div v-for="index in 4" :key="index">
          <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
            <div>
              <img height="300"
                   src="https://cdn.dribbble.com/userupload/6784217/file/original-b154a78531694f492588e3d761b0bde5.png?compress=1&resize=1200x453"
                   style="object-fit: cover" alt="">
            </div>
            <div class="fix_bottom mask_title"/>
            <div class="fix_bottom bottom_title">
              <h1 style="margin-left: 14px;color: #fff">这是标题</h1>
            </div>
          </div>
        </div>
    </a-carousel>
</template>
<script>

export default {
    components: {},
    methods: {
        onChange(a, b, c) {
            console.log(a, b, c);
        },
    },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
    height: 320px;
    overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}
.mask_title{
  background-color: gray;
  opacity: 0.5;
  height: 46px;
}
.bottom_title{
  height: 46px;
  line-height: 46px
}
</style>
