<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="store.collapsed" :trigger="null" collapsible
                    breakpoint="lg"
                    width="300" style="height: 100%">
      <div class="logo"/>
      <admin-sider/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <AdminHeader/>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px', padding: '', height: '100%' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import AdminHeader from "@/navbar/AdminHeader.vue";
import AdminSider from "@/navbar/AdminSider.vue";
import {store} from "@/store";

export default {
  components: {AdminHeader, AdminSider},
  data() {
    return {
      store
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger{
  height: 100%;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(169, 29, 29, 0.2);
  margin: 16px;
}
</style>
