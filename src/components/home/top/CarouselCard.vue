<template>

    <a-carousel :after-change="onChange" dot-position="right" autoplay>
        <div v-for="(item,index) in this.topData" :key="index">
          <router-link to="">
            <div style="position: relative;box-sizing: border-box;border-radius: 8px;overflow: hidden">
              <div>
                <img height="350"
                     width="100%"
                     :src="item.cover"
                     style="object-fit: cover" alt="">
              </div>
              <div class="fix_bottom mask_title"/>
              <div class="fix_bottom bottom_title">
                <h1 style="margin-left: 14px;color: #fff">{{item.name}}</h1>
              </div>
            </div>

          </router-link>
        </div>
    </a-carousel>
</template>
<script>

import {selectTop} from "@/api/article";

export default {
    components: {},
  data(){
    return{
      topData:[]
    }
  },
    methods: {
        onChange(a, b, c) {
            console.log(a, b, c);

        },
    },
  created() {
      selectTop({
        pageSize:10,
        pageNum:1,
      }).then((res)=>{
        this.topData=res.data.record.pageData
      })
  }
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
