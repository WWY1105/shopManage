<!--  -->
<template>
<div class='index'>
    <el-container>
        <el-aside width="150px" style="min-height:100vh;background-color:#235676">
            <Aside />
        </el-aside>
        <el-container>
            <el-header height="80px">
                <Header :user="userInfo" :branch="branch"/>
            </el-header>
            <el-main style="background:#F4F4F4">
                   <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import {mapState} from 'vuex'
export default {
    components: {
        Aside,
        Header
    },
    data() {
        return {

        };
    },
    computed:  mapState({
        userInfo:state=>state.user.userInfo,
        branch:state=>state.user.branch
    }),
    watch: {},
     methods: {
       
     
    },
    created(){
        //console.log(this.$store.state)
    },
    mounted() {
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="scss" scoped>

</style>
