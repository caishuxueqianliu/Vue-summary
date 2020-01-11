import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  path:'/',
  redirect:'/login'
},

 {
   path:'/login',
   name: 'login',
   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue') 
  },
  {
    path: '/',
    name: 'home',
     component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
    {
    path: '/main',
    name: 'main',
     component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
