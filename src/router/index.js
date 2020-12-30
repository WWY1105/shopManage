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
    redirect:'/center',
    children: [
      {
        path: '/',
        name: 'Center',
        component: ()=>import ('@/pages/center')
      },{
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
        path: 'order',
        name: 'Order',
        component: ()=>import ('@/pages/Order/index')
      }, {
        path: '/',
        name: 'Shops',
        component: Shops,
        children: [
          {
            path: '/shops',
            name: 'shopMain',
            component: () => import('@/pages/Shops/shopMain.vue')
          },
          {
            path: '/shops/editShop',
            name: 'editShop',
            component: () => import('@/pages/Shops/editShop.vue')
          }, {
            path: '/shops/acountSetting',
            name: 'acountSetting',
            component: () => import('@/pages/Shops/acountSetting.vue')
          }, {
            path: '/shops/setStyle',
            name: 'setStyle',
            component: () => import('@/pages/Shops/setStyle.vue')
          }


          
        ]
      }, {
        path: '/',
        name: 'Goods',
        component: Goods,
        children: [
          {
            path: '/goods',
            name: 'goodsList',
            component: () => import('@/pages/Goods/goodsList.vue')
          }, {
            path: '/goods/editGoods',
            name: 'editGoods',
            component: () => import('@/pages/Goods/editGoods.vue')
          }, {
            path: '/goods/addGoods',
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
        path: '/',
        name: 'Sales',
        component: Sales,
        children:[
          {
            path:'/sales',
            name: 'saleMain',
            component: () => import('@/pages/Sales/main.vue'),
          },{
            path:'/sales/preSale',
            name: 'PreSale',
            component: () => import('@/pages/Sales/preSale/index.vue'),
          },{
            path:'/sales/makeGroup',
            name: 'makeGroup',
            component: () => import('@/pages/Sales/makeGroup/index.vue'),
          },{
            path:'/sales/coupon',
            name: 'Coupon',
            component: () => import('@/pages/Sales/coupon/index.vue'),
          },{
            path:'/sales/store',
            name: 'Store',
            component: () => import('@/pages/Sales/store/index.vue'),
          },{
            path:'/sales/distribution',
            name: 'Distribution',
            component: () => import('@/pages/Sales/distribution/index.vue'),
          },{
            path:'/sales/togetherDiscount',
            name: 'TogetherDiscount',
            component: () => import('@/pages/Sales/togetherDiscount/index.vue'),
          },{
            path:'/sales/lottery',
            name: 'Lottery',
            component: () => import('@/pages/Sales/lottery/index.vue'),
          },{
            path:'/sales/member',
            name: 'member',
            component: () => import('@/pages/Sales/member/index.vue'),
          },{
            path:'/sales/messagePush',
            name: 'messagePush',
            component: () => import('@/pages/Sales/messagePush/index.vue'),
          },{
            path:'/sales/fullReductionDiscount',
            name: 'fullReductionDiscount',
            component: () => import('@/pages/Sales/fullReductionDiscount/index.vue'),
          },{
            path:'/sales/rebate',
            name: 'rebate',
            component: () => import('@/pages/Sales/rebate/index.vue'),
          },{
            path:'/sales/seckill',
            name: 'seckill',
            component: () => import('@/pages/Sales/seckill/index.vue'),
          },{
            path:'/sales/bargaining',
            name: 'bargaining',
            component: () => import('@/pages/Sales/bargaining/index.vue')
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
        path: '/',
        name: 'Setting',
        component: () => import('@/pages/Setting/main.vue'),
        children:[
          {
            path:'/setting',
            name: 'settingMain',
            component: () => import('@/pages/Setting/index.vue'),
          },
          {
            path:'/setting/setPhone',
            name: 'setPhone',
            component: () => import('@/pages/Setting/setPhone.vue'),
          }
        ]
      },{
        path:'/',
        name:'statistics',
        component: () => import('@/pages/Statistics/index.vue'),
        children: [{
          name: '',
          path: '/statistics',
          component: () => import('@/pages/Statistics/index.vue'),
        },{
          name: '订单统计',
          path: '/statistics/order',
          component: () => import('@/pages/Statistics/order.vue'),
        },{
          name: '商品统计',
          path: '/statistics/goods',
          component: () => import('@/pages/Statistics/goods.vue'),
        }]
      }, {
        path: '/',
        name: 'Union',
        component: () => import('@/pages/Union/index.vue'),
        children: [{
          name: '星秒联盟',
          path: '/union',
          component: () => import('@/pages/Union/main.vue'),
        }, {
          name: '联盟介绍',
          path: '/union/introduce',
          component: () => import('@/pages/Union/introduce.vue'),
        }, {
          name: '星秒订单',
          path: '/union/order',
          component: () => import('@/pages/Union/order.vue'),
        }, {
          name: '星秒商品',
          path: '/union/goods',
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
  }, {
    path: '/bindPhone',
    name: 'BindPhone',
    component: () => import('@/pages/bindPhone.vue')
  }
]
export default routes;