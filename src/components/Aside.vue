<template>
<div class="asliderBox">
    <div class="logo flexCenter">
        <img src="../assets/images/logo.png" alt="">
    </div>
    <el-menu router default-active="1" text-color="#ffffff" background-color="#235676" class="el-menu-vertical-demo">
        <template v-for="(item,index) in list">
            <el-menu-item :index="item.path+''" v-if="!item.subs" :key="index">
                <template slot="title">
                    <div class="menuContent">
                        <img :src="item.icon" alt="" class="icon">
                        <span slot="title" style=" margin-left:10px;">{{item.title}}</span>
                    </div>
                </template>
            </el-menu-item>
            <el-submenu v-if="item.subs&&item.subs.length>0" :index="item.path+''" :key="index">
                <template slot="title">
                     <img :src="item.icon" alt="" class="icon">
                    <span slot="title" style=" margin-left:10px;">{{item.title}}</span>
                </template>
                <el-menu-item v-for="(i,idx) in item.subs" :index="i.path+''" :key='idx'>{{i.title}}</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</div>
</template>

<script>
import anquan from '../assets/images/slide/anquan.png';
import dianpu from '../assets/images/slide/dianpu.png';
import dingdan from '../assets/images/slide/dingdan.png';
import fankui from '../assets/images/slide/fankui.png';
import guanli from '../assets/images/slide/guanli.png';
import jianyi from '../assets/images/slide/jianyi.png';
import jixing from '../assets/images/slide/jixing.png';
import kehu from '../assets/images/slide/kehu.png';
import pingjia from '../assets/images/slide/pingjia.png';
import shangpin from '../assets/images/slide/shangpin.png';
import shuju from '../assets/images/slide/shuju.png';
import zhibo from '../assets/images/slide/zhibo.png';
import yingxiao from '../assets/images/slide/yingxiao.png';
export default {
    name: 'Aside',
    data() {
        return {
            handleOpen: false,
            list: [{
                title: '管理中心',
                path: '/',
                icon:guanli
            }, {
                title: '店铺管理',
                path: '/shops',
                icon:dianpu
            }, {
                title: '订单管理',
                path: '/order',
                icon:dingdan
            }, {
                title: '商品管理',
                path: '/goods',
                icon:shangpin
            }, {
                title: '客户管理',
                path: '/customs',
                icon:kehu
            }, {
                title: '直播管理',
                path: '/live',
                icon:zhibo
            }, {
                title: '营销中心',
                path: '/sales',
                icon:yingxiao
            }, {
                title: '评价管理',
                path: '/comment',
                icon:pingjia
            }, {
                title: '极星联盟',
                path: '/union',
                icon:jixing
                // subs: [{
                //     title: '联盟介绍',
                //     path: '/union/introduce',
                // }, {
                //     title: '星秒订单',
                //     path: '/union/order',
                // }, {
                //     title: '星秒商品',
                //     path: '/union/goods',
                // }]
            }, {
                title: '数据统计',
                path: '/statistics',
                icon:shuju,
                subs: [{
                    title: '订单统计',
                    path: '/statistics/order',
                }, {
                    title: '商品统计',
                    path: '/statistics/goods',
                }, {
                    title: '客户统计',
                    path: '/statistics/custom',
                }]
            }, {
                title: '客户建议',
                path: '/advice',
                icon:jianyi
            }, {
                title: '我要反馈',
                path: '/feedback',
                icon:fankui
            }, {
                title: '极星课堂',
                path: '/class',
                icon:jixing
            }, {
                title: '安全设置',
                path: '/setting',
                icon:anquan
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
::-webkit-scrollbar{
    display:none;
}
.asliderBox{
    max-height:100vh;overflow-y:scroll;position:fixed;left: 0;top:0;width: 180px;
}
.el-submenu {
    /deep/ .el-menu {
        background-color: #0C2332 !important;
    }

    /deep/ .el-menu-item {
        background-color: #0C2332 !important;

        &:hover {
            background-color: #00B0F0 !important;
        }
    }
}

 /deep/  .el-menu {

    border: none;

   /deep/ .menuContent {
        // border-bottom: 1px solid #1A3F56;
        height: 75px;
        line-height: 75px;
        width: 100%;
        text-align: center;
        .icon{
            width: 30px;
            height: 30px;
        }
      
    }

    .el-menu-item {
        // padding: 0 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        font-size: 14px;

        &:hover {
            background-color: #00B0F0 !important;
        }

        &.is-active {
            background-color: #00B0F0 !important;
            color: #fff;
        }
    }

    /deep/ .el-submenu__title {
        padding: 0 !important;
        border-bottom: 1px solid #1A3F56;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90px;
        font-size: 16px;

        &.is-active {
            background-color: #00B0F0 !important;
            color: #fff;
        }
        .icon{
                   width: 30px;
            height: 30px;
        }
    }
}

.logo {
    height: 100px;
    line-height: 100px;
    img{
        width: 120px;
    }
}
</style>
