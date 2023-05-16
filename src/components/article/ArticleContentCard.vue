<template>
    <div>
        <div class="card" style="padding: 0">
            <div>
                <img :src="articleData.cover" alt="" height="280" width="100%"
                     style="object-fit: cover">
            </div>
            <div style="padding: 24px">
                <div>
                    <h1>{{ articleData.name }}</h1>
                </div>
                <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline"
                     class="vertical_center">
                    <div>
                        <a-tag color="orange" v-for="(item,index) in articleData.tags" :key="index">{{ item.name }}
                        </a-tag>&nbsp;
                        <!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
                        <!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                    </div>
                    <div>
            <span>
                    <a-icon type="eye"/>
                    {{ articleData.views }}
                    <a-divider type="vertical"/>
                  </span>
                        <span>
                    <a-icon type="calendar"></a-icon>
                    2023-05-13
                  </span>
                    </div>
                </div>
                <a-divider/>
                <div>
                    <!--Markdown-->
                    <div id="preview"/>
                </div>
            </div>
        </div>
        <br>
        <!--    评论卡片-->
        <div class="card">
            <h2>评论</h2>

            <a-empty
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    :image-style="{
      height: '60px',
    }"
            >
                <span slot="description"> 暂时没有评论</span>
                <a-button type="primary">
                    添加评论
                </a-button>
            </a-empty>

        </div>
    </div>

</template>

<script>
import Vditor from "vditor";
import 'vditor/dist/index.css'
import {selectArticleBySid} from "@/api/article";


export default {
    name: "ArticleContentCard",
    data() {
        return {
            actions: [
                {type: 'eye', text: '156'},
                {type: 'message', text: '2'},
            ],
            articleData: {}
        }
    },
    mounted() {
    },
    created() {
        let sid = this.$route.params.sid;
        console.log(sid)
        if (sid===null||sid===undefined){
            this.$router.push("/404")
        }
        selectArticleBySid(sid).then((res => {
            this.articleData = res.data.record
            this.renderMarkdown(this.articleData.content)
        }))


    },
    methods: {
        renderMarkdown(md) {
            Vditor.preview(document.getElementById('preview'), md, {
                hljs: {style: 'github'}
            })
        },
    }
}
</script>

<style scoped>

</style>
