import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'


// 订单
import Order from '@/pages/Order/index'

console.log(Order)
Vue.use(Router)
let routes=[
  {
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/order',
    name: 'Order',
    component: Order
  }
]
export default routes;