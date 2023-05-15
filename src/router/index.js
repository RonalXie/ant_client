import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import DashBoard from "@/views/admin/DashBoard.vue";
import ArticleView from "@/views/ArticleView.vue";
import ArticleManage from "@/views/admin/ArticleManage.vue";
import CreateArticle from "@/views/admin/CreateArticle.vue";
import UserCenter from "@/views/admin/UserCenter.vue";

Vue.use(VueRouter)

let routes = [
  {
    // will match everything
    path: '*',
    name:'notfound',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    layout:'front'
  },
  {
    path: '/article',
    name:'article',
    component: ArticleView,
    layout: 'front'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    layout:'login'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    layout:'admin'
  },
  {
    path: '/article/manage',
    name: 'articleManage',
    component: ArticleManage,
    layout: 'admin'
  },
  {
    path: '/article/create',
    name: 'createArticle',
    component: CreateArticle,
    layout: 'admin'
  },
  {
    path: '/user/center',
    name: 'userCenter',
    component: UserCenter,
    layout: 'admin'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

function addLayoutToRoute( route, parentLayout = "front" )
{
  route.meta = route.meta || {} ;
  route.meta.layout = route.layout || parentLayout ;

  if( route.children )
  {
    route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
  }
  return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
  routes
})

export default router
