<!--  -->
<template>
<div class='index'>
    <el-container>
        <el-header height="100px">
            <Header />
        </el-header>
        <el-main style="background:#fff">
            <div class="center flexCenter">
                <el-form :inline="reue">
                    <el-form-item lable="输入旧密码">
                        <el-input placeholder="输入旧密码"></el-input>
                    </el-form-item>
                    <el-form-item lable="输入新密码">
                        <el-input placeholder="输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item lable="确认新密码">
                        <el-input placeholder="确认新密码" v-model="textarea">
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
    </el-container>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: {
        Header
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {

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
//@import url(); 引入公共css类
</style>
