import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import VueRouter from 'vue-router';


import { Message } from 'element-ui'
Vue.prototype.$message=Message;

Vue.use(ElementUI);

Vue.use(VueRouter)


// 样式--start
import '@/assets/scss/index.scss'
import '@/theme/index.css'

// 样式--end

import Routes from '@/router/index.js';

const router = new VueRouter({
  routes: Routes,
  mode: "hash"
})

import store from './store'
console.log(store)
new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
});







