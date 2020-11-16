<template>
<el-menu router="true" default-active="1" text-color="#ffffff" background-color="#235676" class="el-menu-vertical-demo">
    <el-submenu :key="item.id"
                      :index="item.path+''" v-for="(item,index) in list" >
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item v-if="item.subs" index="1-1">选项1</el-menu-item>
    </el-submenu>

</el-menu>
</template>

<script>
export default {
    name: 'Aside',
    data() {
        return {
            handleOpen: false,
            list: [
              {
                title:'管理中心'
              },{
                title:'店铺管理'
              },{
                title:'订单管理',
                path:'/order'
              },{
                title:'商品管理'
              }, {
                title:'客户管理'
              },{
                title:'直播管理'
              },{
                title:'营销中心'
              },{
                title:'评价管理'
              },{
                title:'极星联盟'
              },{
                title:'数据统计'
              },{
                title:'客户建议'
              },{
                title:'我要反馈'
              }, {
                title:'安全设置'
              }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
