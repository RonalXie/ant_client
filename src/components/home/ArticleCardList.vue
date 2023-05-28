<template>
  <div>
    <a-skeleton :loading="loading" active>
      <a-row type="flex" align="middle" :gutter="16">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" v-for="(item,index) in this.articlePage" :key="index">
          <div class="card" style="padding: 0;position: relative">
            <div
                class="category-content">
              后端开发
            </div>
            <!--            <div style="z-index:999;height: 25px;text-align:center;line-height:25px;border-radius: 25px;opacity: 0.3;color:#ffffff;width:100px;background-color: rgb(0 0 0 / 40%);position: absolute; top: 0.375rem;left: 0.375rem">-->

            <!--            </div>-->
            <div style="height: 200px;width: 100%;overflow: hidden">
              <img
                  width="100%"
                  height="100%"
                  alt="logo"
                  style="border-radius: 8px;border-bottom-left-radius:0;border-bottom-right-radius:0;object-fit: cover"
                  :src="item.cover"
              />
            </div>
            <div style="padding: 16px">
              <div style="display: flex;justify-content: space-between">
                <!--                <a-tag color="orange" v-if="item.category!==null">{{ item.category.name }}</a-tag>-->
                <!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
                <!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                <div>
                                  <span v-for="(tag,index) in item.tags" :key="index">
                        # {{ tag.name }}&nbsp;
                    </span>
                </div>


                <div>
                                                    <span style="font-size: small">
                                    <a-icon type="calendar"></a-icon>
                                    {{item.createTime}}
                                  </span>
                </div>
              </div>
              <!--          标题-->
              <div>
                <router-link :to="{path: '/article/'+item.sid}"  target="_blank"><h2 style="">{{ item.name }}</h2></router-link>
              </div>
              <!--          摘要-->
              <!--              <div style="height: 55px;color: grey">-->
              <!--                <p>{{ item.abs }}</p>-->
              <!--              </div>-->
              <!--底部内容-->
              <div
                  style="color: grey;font-size: small;display: flex;justify-content: space-between;align-items: center">
                <div class="" style="display: flex;align-items: center">
                  <a-avatar
                      src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top"/>
                  &nbsp;
                  <span>RonalXie</span>
                </div>
                <div style="">
                  <!--                    <span v-for="(tag,index) in item.tags" :key="index">-->
                  <!--                        # {{ tag.name }}&nbsp;-->
                  <!--                    </span>-->
                  <span>
                    <a-icon type="eye"/>
                    56
                    <a-divider type="vertical"/>
                                        <a-icon type="message"/>
                    56
                  </span>

                </div>
              </div>

            </div>
          </div>
          <br>
        </a-col>
      </a-row>
      <div style="text-align:center;width: 100%">
        <a-pagination v-model="current" :total="total" show-less-items @change="handlePageChange"/>

      </div>
    </a-skeleton>


  </div>
</template>
<script>
import {selectPage} from "@/api/article";

export default {
  data() {
    return {
      loading: true,
      articlePage: [],
      current: 1,
      total: 0,
      actions: [
        {type: 'eye', text: '156'},
        {type: 'message', text: '2'},
      ],
    };
  },
  methods: {
    goArticlePage(articleSid) {
      this.$router.push({
        name: "article",
        params: {
          sid: articleSid
        }
      })
    },
    handlePageChange(page, pageSize) {
      this.loading = true
      selectPage({
        pageNum: page,
        pageSize: pageSize
      }).then(res => {
        this.articlePage = res.data.record.pageData
        this.total = res.data.record.total
        this.loading = false
      })
    }
  },
  created() {
    // setTimeout(()=>{
    //   this.loading=!this.loading
    // },3000)
    //
    selectPage({
      pageNum: 1,
      pageSize: 10,
    }).then(res => {
      this.articlePage = res.data.record.pageData
      this.total = res.data.record.total
      this.loading = false
    })
  }
};
</script>
<style scoped>
.card img:hover {
  transform: scale(1.1);
  transition: all 1.1s;
}
.category-content{
  z-index:999;
  text-align:center;
  border-radius: 3rem;
  color:#ffffff;
  position: absolute;
  top: 0.375rem;
  left:0.375rem;
  background-color: rgb(0 0 0 / 40%);
  padding: 0.125rem 0.5rem
}
</style>
