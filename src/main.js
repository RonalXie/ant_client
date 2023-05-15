import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.less"
import "@/assets/css/app.css"
import FrontLayout from "@/layout/FrontLayout.vue";
import BackLayout from "@/layout/BackLayout.vue";
import LoginView from "@/views/LoginView.vue";

Vue.config.productionTip = false
Vue.use(Antd)
Vue.component("layout-front", FrontLayout);
Vue.component("layout-back", BackLayout);
Vue.component("layout-login", LoginView);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
