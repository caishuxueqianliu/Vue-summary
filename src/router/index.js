import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
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
    path: '/home',
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


//挂载路由导航卫士
router.beforeEach((to,from,next)=>{
//to 将要访问的路径
//from 从哪个路径跳转而来
//next  一个函数 ，表示放行
// next() 放行  / next（'/login'）强制跳转
if(to.path ==='/login') return next()

//获取token
const tokenStr=window.sessionStorage.getItem('token')

if(!tokenStr) return next('/login')
next()




})

 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {return err})
}









export default router
