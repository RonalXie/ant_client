import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ArticleView from "@/views/ArticleView.vue";

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
