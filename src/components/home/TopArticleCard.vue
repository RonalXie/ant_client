<template>

    <div style="position: relative">
        <div>
            <!--      <img src="https://cdn.dribbble.com/userupload/6770098/file/original-2175c942648a1eaf8184d2052633e64a.jpg?compress=1&resize=1200x800" alt="">-->
            <img height="320"
                 src="https://cdn.dribbble.com/userupload/6784217/file/original-b154a78531694f492588e3d761b0bde5.png?compress=1&resize=1200x453"
                 style="object-fit: cover" alt="">
        </div>
        <div class="fix_bottom mask_title"/>
        <div class="fix_bottom bottom_title">
            <h1 style="margin-left: 14px;color: #fff">这是标题</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopArticleCard"
}
</script>

<style scoped>
.mask_title{
    background-color: black;
    opacity: 0.3;
    height: 46px;
}
.bottom_title{
    height: 46px;
    line-height: 46px
}


</style>
