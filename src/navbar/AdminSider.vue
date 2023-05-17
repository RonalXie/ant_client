<template>
    <div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['/dashboard']" @click="menuClick">
            <a-menu-item key="/dashboard">
                <a-icon type="dashboard"/>
                <span>DashBoard</span>
            </a-menu-item>
            <a-sub-menu>
                <span slot="title"><a-icon type="book"/><span>内容管理</span></span>
                <a-menu-item key="/article/manage">
                    文章列表
                </a-menu-item>
                <a-menu-item key="/category/manage">
                    分类管理
                </a-menu-item>
                <a-menu-item key="/tag/manage">
                    标签管理
                </a-menu-item>
                <a-menu-item key="2">
                    评论管理
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu>
                <span slot="title"><a-icon type="setting"/><span>系统设置</span></span>
                <a-menu-item key="/user/center">
                    个人中心
                </a-menu-item>
            </a-sub-menu>

        </a-menu>
    </div>
</template>

<script>
import {store} from "@/store";

export default {
    name: "DefaultSider",
    data() {
        return {
            store
        }
    },
    methods: {
        menuClick({item, key, keyPath}) {
            // 获取到当前的key,并且跳转
            console.log(item, keyPath)
            if (this.$route.path === key) {
                //当前路径中不包括本path就执行
                return;
            }
            this.$router.push({
                path: key
            })
        },
    }
}
</script>

<style scoped>

</style>
