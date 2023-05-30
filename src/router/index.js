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
import CategoryManage from "@/views/admin/CategoryManage.vue";
import TagManage from "@/views/admin/TagManage.vue";
import UpdateArticle from "@/views/admin/UpdateArticle.vue";

Vue.use(VueRouter)

let routes = [
  {
    // will match everything
    path: '*',
    name:'notfound',
    component: NotFoundView,
    layout: "empty"
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    layout:'front'
  },
  {
    path: '/article/:id',
    name:'article',
    component: ArticleView,
    layout: 'front'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    layout:'empty'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    layout:'admin'
  },
  {
    path: '/manage/article',
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
    path: '/update/article',
    name: 'updateArticle',
    component: UpdateArticle,
    layout: 'admin'
  },
  {
    path: '/category/manage',
    name: 'categoryManage',
    component: CategoryManage,
    layout: 'admin'
  },
  {
    path: '/tag/manage',
    name: 'tagManage',
    component: TagManage,
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


function addLayoutToRoute( route, parentLayout = "empty" )
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

// eslint-disable-next-line no-unused-vars
router.afterEach((to,from,next)=> {
  window.scroll(0, 0)
})
export default router
