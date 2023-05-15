<template>

    <a-carousel :after-change="onChange" dot-position="right">
        <div v-for="index in 4" :key="index">
          <div style="position: relative;box-sizing: border-box;border-radius: 4px;overflow: hidden">
            <div>
              <img height="300"
                   width="100%"
                   src="https://pandapro.halo.nicetheme.xyz/upload/img00023.jpg"
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

</style>
