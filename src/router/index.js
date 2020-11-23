import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'


// 订单
import Order from '@/pages/Order/index'


// 商铺
import Shops from '@/pages/Shops/index'


// 商品
import Goods from '@/pages/Goods/index'


// 客户
import Customs from '@/pages/Customs/index'

// 直播
import Live from '@/pages/Live/index'

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
  },{
    path: '/customs',
    name: 'Customs',
    component: Customs
  },{
    path: '/live',
    name: 'Live',
    component: Live
  }
]
export default routes;