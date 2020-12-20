import Vue from 'vue'
import Router from 'vue-router'


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
let routes = [
  {
    path: '/',
    name: 'Index',
    component: ()=>import ('@/pages/Index'),
    redirect:{
      name:'Center'
    },
    children: [
      {
        path: '/sysMsg',
        name: 'SysMsg',
        component: () => import('@/pages/SysMsg/sysMsg.vue')
      },{
        path: '/advice',
        name: 'Advice',
        component: () => import('@/pages/Advice/advice.vue')
      },{
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact/contact.vue')
      },
      {
        path: '/center',
        name: 'Center',
        component: ()=>import ('@/pages/center')
      },{
        path: 'order',
        name: 'Order',
        component: ()=>import ('@/pages/Order/index')
      }, {
        path: 'shops',
        name: 'Shops',
        component: Shops,
        children: [
          {
            path: '/',
            name: 'shopMain',
            component: () => import('@/pages/Shops/shopMain.vue')
          },
          {
            path: 'editShop',
            name: 'editShop',
            component: () => import('@/pages/Shops/editShop.vue')
          }
        ]
      }, {
        path: '/goods',
        name: 'Goods',
        component: Goods,
        children: [
          {
            path: '/',
            name: 'goodsList',
            component: () => import('@/pages/Goods/goodsList.vue')
          }, {
            path: 'editGoods',
            name: 'editGoods',
            component: () => import('@/pages/Goods/editGoods.vue')
          }, {
            path: 'addGoods',
            name: 'addGoods',
            component: () => import('@/pages/Goods/addGoods.vue')
          }
        ]
      }, {
        path: '/customs',
        name: 'Customs',
        component: Customs
      }, {
        path: '/live',
        name: 'Live',
        component: Live
      }, {
        path: '/sales',
        name: 'Sales',
        component: Sales,
        children:[
          {
            path:'/',
            name: 'saleMain',
            component: () => import('@/pages/Sales/main.vue'),
          },{
            path:'preSale',
            name: 'PreSale',
            component: () => import('@/pages/Sales/preSale.vue'),
          },{
            path:'coupon',
            name: 'Coupon',
            component: () => import('@/pages/Sales/coupon/index.vue'),
          },{
            path:'store',
            name: 'Store',
            component: () => import('@/pages/Sales/store/index.vue'),
          },{
            path:'distribution',
            name: 'Distribution',
            component: () => import('@/pages/Sales/distribution/index.vue'),
          },{
            path:'togetherDiscount',
            name: 'TogetherDiscount',
            component: () => import('@/pages/Sales/togetherDiscount/index.vue'),
          },{
            path:'lottery',
            name: 'Lottery',
            component: () => import('@/pages/Sales/lottery/index.vue'),
          }



        
        ]
      }, {
        path: '/comment',
        name: 'Comment',
        component: Comment
      }, {
        path: '/feedback',
        name: 'Feedback',
        component: () => import('@/pages/Feedback/index.vue'),
      }, {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/pages/Setting/index.vue'),
      }, {
        path: '/union',
        name: 'Union',
        component: () => import('@/pages/Union/index.vue'),
        children: [{
          name: '星秒联盟',
          path: '/',
          component: () => import('@/pages/Union/main.vue'),
        }, {
          name: '联盟介绍',
          path: 'introduce',
          component: () => import('@/pages/Union/introduce.vue'),
        }, {
          name: '星秒订单',
          path: 'order',
          component: () => import('@/pages/Union/order.vue'),
        }, {
          name: '星秒商品',
          path: 'goods',
          component: () => import('@/pages/Union/goods.vue'),
        }
        ]
      }]
  }, {
    path: '/reset',
    name: 'reset',
    component: () => import('@/pages/reset.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue')
  }
]
export default routes;