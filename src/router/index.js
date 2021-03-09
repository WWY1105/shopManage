import Vue from 'vue'
import Router from 'vue-router'

import Goods from '@/pages/Goods/index'
import Live from '@/pages/Live/index'
import Custom from '@/pages/Customs/index'
import Sales from '@/pages/Sales/index'
import Comment from '@/pages/Comment/index'
import Advice from  '@/pages/Advice/advice.vue'
import Class from '@/pages/Class/index.vue'
// 极星联盟

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index'),
    redirect: '/center',
    children: [
      {
        path: '/',
        name: 'Center',
        component: () => import('@/pages/center'),
        meta: {
          title: "管理中心"
        }
      }, {
        path: '/sysMsg',
        name: 'SysMsg',
        component: () => import('@/pages/SysMsg/sysMsg.vue'),
        meta: {
          title: "系统消息"
        }
      }, {
        path: '/advice',
        name: 'Advice',
        component: Advice,
        meta: {
          title: "客户建议"
        }
      }, {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact/contact.vue'),
        meta: {
          title: ""
        }
      }, {
        path: '/class',
        name: 'class',
        component: Class,
        meta: {
          title: "极星课堂"
        }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/pages/Order/index'),
        meta: {
          title: "订单管理"
        }
      },
      
      
      
      
      {
        path: '/',
        name: 'Shops',
        component: ()=>import('@/pages/Shops/index'),
        children: [
          {
            path: '/shops',
            name: 'shopMain',
            component: () => import('@/pages/Shops/shopMain.vue'),
            meta: {
              title: "店铺管理"
            }
          },
          {
            path: '/shops/editShop',
            name: 'editShop',
            component: () => import('@/pages/Shops/editShop.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/shops/addShop',
            name: 'addShop',
            component: () => import('@/pages/Shops/addShop.vue'),
            meta: {
              title: "添加店铺"
            }
          }, {
            path: '/shops/acountSetting',
            name: 'acountSetting',
            component: () => import('@/pages/Shops/acountSetting.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/shops/setStyle',
            name: 'setStyle',
            component: () => import('@/pages/Shops/setStyle.vue'),
            meta: {
              title: "主题设置"
            }
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
            component: () => import('@/pages/Goods/goodsList.vue'),
            meta: {
              title: "商品管理"
            }
          }, {
            path: '/goods/editGoods',
            name: 'editGoods',
            component: () => import('@/pages/Goods/editGoods.vue'),
            meta: {
              title: "商品编辑"
            }
          }, {
            path: '/goods/addGoods',
            name: 'addGoods',
            component: () => import('@/pages/Goods/addGoods.vue'),
            meta: {
              title: "添加商品"
            }
          }
        ]
      }, {
        path: '/customs',
        name: 'Customs',
        component: Custom,
        meta: {
          title: "客户管理"
        }
      }, {
        path: '/live',
        name: 'Live',
        component: Live,
        meta: {
          title: "直播管理"
        }
      }, {
        path: '/',
        name: 'Sales',
        component: Sales,
        children: [
          {
            path: '/sales',
            name: 'saleMain',
            component: () => import('@/pages/Sales/main.vue'),
            meta: {
              title: "营销中心"
            }
          }, {
            path: '/sales/preSale',
            name: 'PreSale',
            component: () => import('@/pages/Sales/preSale/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/makeGroup',
            name: 'makeGroup',
            component: () => import('@/pages/Sales/makeGroup/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/coupon',
            name: 'Coupon',
            component: () => import('@/pages/Sales/coupon/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/store',
            name: 'Store',
            component: () => import('@/pages/Sales/store/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/distribution',
            name: 'Distribution',
            component: () => import('@/pages/Sales/distribution/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/distribute',
            name: 'Distribute',
            component: () => import('@/pages/Sales/distribute/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/togetherDiscount',
            name: 'TogetherDiscount',
            component: () => import('@/pages/Sales/togetherDiscount/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/lottery',
            name: 'Lottery',
            component: () => import('@/pages/Sales/lottery/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/member',
            name: 'member',
            component: () => import('@/pages/Sales/member/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/messagePush',
            name: 'messagePush',
            component: () => import('@/pages/Sales/messagePush/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/shortMessage',
            name: 'shortMessage',
            component: () => import('@/pages/Sales/shortMessage/index.vue'),
            meta: {
              title: ""
            }
          },{
            path: '/sales/fullReductionDiscount',
            name: 'fullReductionDiscount',
            component: () => import('@/pages/Sales/fullReductionDiscount/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/rebate',
            name: 'rebate',
            component: () => import('@/pages/Sales/rebate/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/seckill',
            name: 'seckill',
            component: () => import('@/pages/Sales/seckill/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/bargaining',
            name: 'bargaining',
            component: () => import('@/pages/Sales/bargaining/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/free',
            name: 'free',
            component: () => import('@/pages/Sales/free/index.vue'),
            meta: {
              title: ""
            }
          }, {
            path: '/sales/integral',
            name: 'integral',
            component: () => import('@/pages/Sales/integral/index.vue'),
            meta: {
              title: ""
            }
          }

        ]
      }, {
        path: '/comment',
        name: 'Comment',
        component: Comment,
        meta: {
          title: "评价管理"
        }
      }, {
        path: '/feedback',
        name: 'Feedback',
        component: () => import('@/pages/Feedback/index.vue'),
        meta: {
          title: "我要反馈"
        }
      }, {
        path: '/',
        name: 'Setting',
        component: () => import('@/pages/Setting/main.vue'),
        children: [
          {
            path: '/setting',
            name: 'settingMain',
            component: () => import('@/pages/Setting/index.vue'),
            meta: {
              title: "安全设置"
            }
          },
          {
            path: '/setting/setPhone',
            name: 'setPhone',
            component: () => import('@/pages/Setting/setPhone.vue'),
          }
        ]
      }, {
        path: '/',
        name: 'statistics',
        component: () => import('@/pages/Statistics/index.vue'),
        children: [{
          name: '',
          path: '/statistics',
          component: () => import('@/pages/Statistics/index.vue'),
          meta: {
            title: ""
          }
        }, {
          name: '订单统计',
          path: '/statistics/order',
          component: () => import('@/pages/Statistics/order.vue'),
          meta: {
            title: "订单统计"
          }
        }, {
          name: '商品统计',
          path: '/statistics/goods',
          component: () => import('@/pages/Statistics/goods.vue'),
          meta: {
            title: "商品统计"
          }
        }, {
          name: '客户统计',
          path: '/statistics/custom',
          component: () => import('@/pages/Statistics/custom.vue'),
          meta: {
            title: "客户统计"
          }
        }]
      }, {
        path: '/',
        name: 'Union',
        component: () => import('@/pages/Union/index.vue'),
        children: [{
          name: '极星联盟',
          path: '/union',
          component: () => import('@/pages/Union/main.vue'),
          meta: {
            title: "极星联盟"
          }
        }
        ]
      }]
  }, {
    path: '/reset',
    name: 'reset',
    component: () => import('@/pages/reset.vue'),
    meta: {
      title: ""
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
    meta: {
      title: ""
    }
  }, {
    path: '/bindPhone',
    name: 'BindPhone',
    component: () => import('@/pages/bindPhone.vue'),
    meta: {
      title: ""
    }
  }
]
})