import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'


// 订单
import Order from '@/pages/Order/index'


// 商铺
import Shops from '@/pages/Shops/index'


// 商品
import Goods from '@/pages/Goods/index'

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
  },{
    path: '/shops',
    name: 'Shops',
    component: Shops
  },{
    path: '/goods',
    name: 'Goods',
    component: Goods
  }
]
export default routes;