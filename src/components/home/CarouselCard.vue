<template>
    <a-carousel :after-change="onChange" dot-position="right">
        <div v-for="index in 4" :key="index">
            <TopArticleCard/>
        </div>
    </a-carousel>
</template>
<script>
import TopArticleCard from "@/components/home/TopArticleCard.vue";

export default {
    components: {TopArticleCard},
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
