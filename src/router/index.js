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


// 营销
import Sales from '@/pages/Sales/index'

// 评价
import Comment from '@/pages/Comment/index'

// 极星联盟

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
    component: Shops,
    children:[
      {
        path:'/',
        name:'shopMain',
        component:()=>import('@/pages/Shops/shopMain.vue')
      },
      {
        path:'editShop',
        name:'editShop',
        component:()=>import('@/pages/Shops/editShop.vue')
      }
    ]
  },{
    path: '/goods',
    name: 'Goods',
    component: Goods,
    children:[
      {
        path:'/',
        name:'goodsList',
        component:()=>import('@/pages/Goods/goodsList.vue')
      },{
        path:'editGoods',
        name:'editGoods',
        component:()=>import('@/pages/Goods/editGoods.vue')
      }
    ]
  },{
    path: '/customs',
    name: 'Customs',
    component: Customs
  },{
    path: '/live',
    name: 'Live',
    component: Live
  },{
    path: '/sales',
    name: 'Sales',
    component: Sales
  },{
    path: '/comment',
    name: 'Comment',
    component: Comment
  },{
    path:'/union',
    name:'Union',
    component:()=>import('@/pages/Union/index'),
    children:[{
      name: '联盟介绍',
      path:'introduce',
      component:()=>import('@/pages/Union/introduce'),
  },{
      name: '星秒订单',
      path:'order',
      component:()=>import('@/pages/Union/order'),
  },{
      name: '星秒商品',
      path:'goods',
      component:()=>import('@/pages/Union/goods'),
  }]
  }
]
export default routes;