<template>
  <div>
    <a-skeleton :loading="loading" active>
      <div v-for="(item,index) in this.articlePage" :key="index" style="cursor: pointer;margin-bottom: 16px"
           class="card">
        <a-row type="flex" align="middle" :gutter="16">
          <a-col :xs="8" :xxl="7" style="text-align: left">
            <img
                width="100%"
                height="160"
                alt="logo"
                style="border-radius: 4px;object-fit: cover"
                :src="item.cover"
            />
          </a-col>

          <a-col :xs="16" :xxl="17">
            <div style="height: 100%;display: flex;flex-direction: column;justify-content: space-between">
              <!--          标题-->
              <div>
                <h1 @click="goArticlePage(item.sid)" style="cursor: pointer">{{ item.name }}</h1>
              </div>
              <!--          摘要-->
              <div style="height: 80px;color: grey">
                <p>{{ item.abs }}</p>
              </div>
              <!--          底部内容-->
              <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline"
                   class="vertical_center">
                <div>
                  <a-tag color="orange" v-if="item.category!==null">{{ item.category.name }}</a-tag>
                  <!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
                  <!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                </div>
                <div>
                    <span v-for="(tag,index) in item.tags" :key="index">
                        ·{{ tag.name }}
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

          </a-col>
        </a-row>

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
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      },
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
      this.loading = false
    })
  }
};
</script>
<style></style>
