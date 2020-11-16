import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);




// 样式--start
// import './assets/scss/index.scss'
import '../theme/index.css'

// 样式--end

new Vue({
  el: '#app',
  render: h => h(App)
});







