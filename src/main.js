import Vue from 'vue'

import router from './router'
import store from './store'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
// axios.defaults.baseURL='http://127.0.0.1:3000/'
import App from './App.vue'

// highlight.js代码高亮插件
import Highlight from './highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);

// 导入 NProgress 包对应的JS和CSS
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 在 request 拦截器中，展示进度条 NProgress.start()
// axios.interceptors.request.use(config => {
//   // console.log(config)
//   NProgress.start()
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须 return config
//   return config
// })
// // 在 response 拦截器中，隐藏进度条 NProgress.done()
// axios.interceptors.response.use(config => {
//   NProgress.done()
//   return config
// })
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
//Vue.prototype.$http=axios



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
