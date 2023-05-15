<template>
  <div class="card">
    <h2>为你推荐</h2>
    <div v-for="(item,index) in this.listData" :key="index">
      <a-skeleton :loading="loading" active>
        <a-row type="flex" align="middle" :gutter="16">
            <a-col :xs="8" :xxl="8" style="text-align: left">
                <img
                        width="100%"
                        alt="logo"
                        style="border-radius: 4px;object-fit: cover"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            </a-col>

          <a-col :xs="16" :xxl="16">
            <div style="height: 140px;display: flex;flex-direction: column;justify-content: space-between">
              <!--          标题-->
              <div>
                <h1>{{ item.title }}</h1>
              </div>
              <!--          摘要-->
              <div style="height: 55px;color: grey">
                <p>{{ item.content }}</p>
              </div>
              <!--          底部内容-->
              <div style="color: grey;font-size: small;justify-content: space-between;align-items: baseline" class="vertical_center">
                <div>
                  <a-tag color="orange">后端开发</a-tag>&nbsp;
<!--                  <a-tag color="pink">#Java</a-tag>&nbsp;-->
<!--                  <a-tag color="pink">#Python</a-tag>&nbsp;-->
                </div>
                <div>
                    <span>
                        ·Java
                    </span>
                    <span>
                        ·Java
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
      </a-skeleton>

    </div>

  </div>
</template>
<script>
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
      loading: false,
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
  created() {
    // setTimeout(()=>{
    //   this.loading=!this.loading
    // },3000)
  }
};
</script>
<style></style>
