<!--  -->
<template>
<div class='distribution'>
    <div class="bgf part1">
        <el-row :gutter="20" type="flex" justify="space-between" align="center">
            <el-col :span="12">
                <div class="flexStart">
                    <img src="../../../assets/images/sales/fenxiao.png" class="icon" alt="">
                    <div class="textBox">
                        <h2>分销管理设置</h2>
                        <p>本模块可设置邀请奖励与分享佣金的明细设置</p>
                    </div>
                </div>
                <div class="switchBox">
                    <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="直播模块开关">
                            <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                            </el-switch>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="databox">
                    <p class="title">

                    </p>
                    <div class="flexStart">
                        <div class="eachData"></div>
                        <div class="eachData"></div>
                        <div class="eachData"></div>
                        <div class="eachData"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <p class="partTitle">邀请奖励</p>
    <div class="content bgf"></div>
    <p class="partTitle">分享佣金</p>
    <div class="content bgf"></div>
</div>
</template>

<script>
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {

        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
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
.part1 {
    padding: 39px 67px;
}
</style>
