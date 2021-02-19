<!--  -->
<template>
<div class='index'>
    <el-container>
        <el-aside width="150px" style="min-height:100vh;background-color:#235676">
            <Aside />
        </el-aside>
        <el-container>
            <el-header height="80px">
                <Header :user="user"/>
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
export default {
    components: {
        Aside,
        Header
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
     methods: {
        getBaseInfo() {
            let state = {
                ...this.$store.state
            };
            this.user = state.user ? state.user : {};
            if (!this.user.name) {
                this.$store.dispatch('GetInfo').then((res) => {

                })
            }
            if (!this.user.branch || this.user.branch.length <= 0) {
                this.$store.dispatch('Branch').then((res) => {
                    this.user.branch = res.data;
                })
            } else {
                // console.log('有店铺')
            }
        },
        // 获取营销
         getState() {
            if (!this.$store.state.distribution.distributions) {
                this.$store.dispatch('Getdistributions').then(result => {
                    this.saleData = result;
                })
            } else {
                this.saleData = this.$store.state.distribution.distributions;
            }
        },
    },
    created(){
        console.log('吧')
        this.getBaseInfo();
        this.getState()
    },
    mounted() {
          console.log('mounted')
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
