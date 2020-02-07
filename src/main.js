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
axios.defaults.baseURL='http://127.0.0.1:3000/'
import App from './App.vue'

import qs from 'qs'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
