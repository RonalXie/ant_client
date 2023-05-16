<template>
  <div class="card">
    <h2>为你推荐</h2>
      <a-skeleton :loading="loading" active :paragraph="{ rows: 10 }">
    <div v-for="(item,index) in this.articlePage" :key="index" style="cursor: pointer">
        <a-row type="flex" align="middle" :gutter="16">
            <a-col :xs="8" :xxl="8" style="text-align: left">
                <img
                        width="100%"
                        height="150"
                        alt="logo"
                        style="border-radius: 4px;object-fit: cover"
                        :src="item.cover"
                />
            </a-col>

          <a-col :xs="16" :xxl="16">
            <div style="height: 140px;display: flex;flex-direction: column;justify-content: space-between">
              <!--          标题-->
              <div>
                <h1 @click="goArticlePage(item.sid)" style="cursor: pointer">{{ item.name }}</h1>
              </div>
              <!--          摘要-->
              <div style="height: 55px;color: grey">
                <p>{{ item.abs }}</p>
              </div>
              <!--          底部内容-->
              <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline" class="vertical_center">
                <div>
                  <a-tag color="orange" v-if="item.category!==null">{{item.category.name}}</a-tag>
<!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
<!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                </div>
                <div>
                    <span v-for="(tag,index) in item.tags" :key="index">
                        ·{{tag.name}}
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
        <hr>

    </div>
      </a-skeleton>


  </div>
</template>
<script>
import {selectPage} from "@/api/article";

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top',
    description:
        'Ant Design, a design language for background applications,',
    content:
        'ity desig beautifully and efficiently.',
  });
}

export default {
  data() {
    return {
      listData,
      loading: true,
        articlePage:[],
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
    methods:{
        goArticlePage(articleSid){
            this.$router.push({
                name:"article",
                params:{
                    sid:articleSid
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
          this.loading=false
      })
  }
};
</script>
<style></style>
