<template>
    <a-carousel :after-change="onChange">
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
    text-align: center;
    height: 280px;
    line-height: 280px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
    color: #fff;
}
</style>
