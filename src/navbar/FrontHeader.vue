<template>
  <div>
    <div style="line-height: 72px;box-sizing: border-box">
      <div style="float: left">
        <img src="https://bulma.io/images/bulma-logo.png" height="35" alt=""
             style="margin-right: 20px">
      </div>
      <div style="float: left">
        <ul style="list-style: none" class="nav_menu">
          <li>
            <router-link to="/"><span><a-icon type="home"></a-icon>&nbsp;首页</span>
            </router-link>
          </li>
          <li>
            <router-link to=""><span><a-icon type="picture"></a-icon>&nbsp;相册</span>
            </router-link>
          </li>
          <li>
            <a-dropdown>
              <router-link to="" class="ant-dropdown-link" @click="e => e.preventDefault()"><span><a-icon type="inbox"></a-icon>&nbsp;工具箱</span></router-link>&nbsp;
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </li>
          <li>
            <router-link to=""><span>About</span></router-link>
          </li>
        </ul>
      </div>
      <div style="float: right;margin-left: 12px">
        <a-dropdown :trigger="['contextmenu']">
          <a-avatar src="https://cdn.dribbble.com/userupload/6730422/file/original-83442b9b8942f5eb628361c564f2282e.jpg?compress=1&resize=400x300&vertical=top" size="large"></a-avatar>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="/login">登录</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div style="float: right;margin-left: 12px" >
        <a-input-search style="width: 262px;" :size="'large'"></a-input-search>
      </div>

      </div>

  </div>

    <!--          </a-col>-->
    <!--      </a-row>-->

</template>

<script>

export default {
  name: "FrontHeader",
  components: {},
  data() {
    return {
      current: ['home'],
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.nav_menu li {
  display: inline-block;
  margin: 0 12px;
}
.nav_menu li span{
  font-size: large;
  color: #757575;
}
.nav_menu li span:hover{
  color: #485fc7;
}
</style>
