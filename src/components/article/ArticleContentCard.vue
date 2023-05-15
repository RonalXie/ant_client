<template>
  <div>
    <div class="card" style="padding: 0">
      <div>
        <img src="https://cosy.halo.nicetheme.xyz/upload/image12.jpg" alt="" height="280" width="100%"
             style="object-fit: cover">
      </div>
      <div style="padding: 24px">
        <div>
          <h1>这是标题</h1>
        </div>
        <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline"
             class="vertical_center">
          <div>
            <a-tag color="orange">后端开发</a-tag>&nbsp;
            <a-tag color="orange">Java</a-tag>
            <!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
            <!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
          </div>
          <div>
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
        <a-divider/>
        <div>
          <!--Markdown-->
          <div id="preview" />
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



export default {
  name: "ArticleContentCard",
  data() {
    return {
      actions: [
        {type: 'eye', text: '156'},
        {type: 'message', text: '2'},
      ],
    }
  },
  mounted() {
    this.renderMarkdown()
  },
  methods:{
    renderMarkdown() {
      Vditor.preview(document.getElementById('preview'), '# hello world',{
        hljs: { style: 'github' }
      })
    },
  }
}
</script>

<style scoped>

</style>
