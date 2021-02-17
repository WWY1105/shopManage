import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import VueRouter from 'vue-router';
import { getToken } from '@/utils/auth';

import { Message } from 'element-ui'
Vue.prototype.$message=Message;

Vue.use(ElementUI);

Vue.use(VueRouter)

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

Vue.prototype.$uploadApi=process.env.BASE_API+'/api/business/tencent/oss?access_token=' + getToken();
Vue.prototype.$downloadFileApi=process.env.BASE_API+'/api/business';


// 样式--start
import '@/assets/scss/index.scss'
import '@/theme/index.css'

// 样式--end

import router from '@/router/index.js';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location)
}
// 图片前缀
Vue.prototype.$imgurl=process.env.IMG_URL;
console.log(process.env.IMG_URL);


import store from './store'
console.log(store)
new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
});







