<template>
  <div>
    <div id="vditor"/>
  </div>
</template>
<script>
import Vditor from "vditor";
import 'vditor/dist/index.css'

export default {

  mounted() {
    this.contentEditor = new Vditor('vditor', {
      height: 870,
      placeholder: '此处为话题内容……',
      theme: 'classic',
      counter: {
        enable: true,
        type: 'markdown'
      },
      preview: {
        actions:[],
        delay: 0,
        hljs: {
          style: 'monokai',
          lineNumber: true
        }
      },
      tab: '\t',
      typewriterMode: true,
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      mode: 'sv'
    })

  }

}

</script>
<style>
.vditor-toolbar{
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #d1d5da;
}
.vditor{
  border: none;
}
.vditor-preview{
  background-color: #ffffff;
}
.vditor{
  --textarea-background-color: #ffffff
}
.vditor-content{
  border-bottom: 1px solid #d1d5da;

}
</style>