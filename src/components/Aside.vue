<template>
<div>
    <div class="logo flexCenter">
        <img src="../assets/images/logo.png" alt="">
    </div>
    <el-menu router default-active="1" text-color="#ffffff" background-color="#235676" class="el-menu-vertical-demo">
        <template v-for="(item,index) in list">
            <el-menu-item :index="item.path+''" v-if="!item.subs">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">{{item.title}}</span>
                </template>
            </el-menu-item>
            <el-submenu v-if="item.subs&&item.subs.length>0">
                <el-menu-item v-for="(i,idx) in item.subs" :index="item.path+''" :key='idx'>选项1</el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            handleOpen: false,
            list: [{
                title: '管理中心',
                path: '/'
            }, {
                title: '店铺管理',
                path: '/shops'
            }, {
                title: '订单管理',
                path: '/order'
            }, {
                title: '商品管理',
                path: '/goods'
            }, {
                title: '客户管理',
                path: '/customs'
            }, {
                title: '直播管理',
                path: '/live'
            }, {
                title: '营销中心',
                path: '/sales'
            }, {
                title: '评价管理',
                path: '/comment'
            }, {
                title: '极星联盟'
            }, {
                title: '数据统计'
            }, {
                title: '客户建议'
            }, {
                title: '我要反馈'
            }, {
                title: '安全设置'
            }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.el-menu {
    padding: 0 26px;
    border: none;

    .el-menu-item {
        padding: 0 !important;
        border-bottom: 1px solid #1A3F56;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90px;
        &.is-active {
            background-color: #00B0F0 !important;
            color: #fff;
        }
    }
}

.logo {
    height: 100px;
    line-height: 100px;
}
</style>
