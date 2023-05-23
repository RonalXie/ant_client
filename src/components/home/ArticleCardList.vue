<template>
  <div>
    <a-skeleton :loading="loading" active>
      <a-row type="flex" align="middle" :gutter="16">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"  v-for="(item,index) in this.articlePage" :key="index">
          <div class="card" style="padding: 0">
            <div>
              <img
                  width="100%"
                  height="280"
                  alt="logo"
                  style="border-radius: 4px;object-fit: cover"
                  :src="item.cover"
              />
            </div>
            <div style="padding: 16px">
              <!--          标题-->
              <div>
                <h1 @click="goArticlePage(item.sid)" style="cursor: pointer">{{ item.name }}</h1>
              </div>
              <!--          摘要-->
              <div style="height: 60px;color: grey">
                <p>{{ item.abs }}</p>
              </div>
<!--底部内容-->
              <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline"
                   class="vertical_center">
                <div>
                  <a-tag color="orange" v-if="item.category!==null">{{ item.category.name }}</a-tag>
                  <!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
                  <!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                </div>
                <div>
                    <span v-for="(tag,index) in item.tags" :key="index">
                        # {{ tag.name }}&nbsp;
                    </span>
                  <a-divider type="vertical"/>

                  <span v-for="{ type, text } in actions" :key="type">
                    <a-icon :type="type"/>
                    {{ text }}
                    <a-divider type="vertical"/>
                  </span>
                  <span>
                    <a-icon type="calendar"></a-icon>
                    2023-05-13
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
      current:1,
      total:0,
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
    handlePageChange(page,pageSize){
      this.loading=true
      selectPage({
        pageNum:page,
        pageSize:pageSize
      }).then(res=>{
        this.articlePage = res.data.record.pageData
        this.total=res.data.record.total
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
      this.total=res.data.record.total
      this.loading = false
    })
  }
};
</script>
<style></style>
