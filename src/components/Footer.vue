<!--  -->
<template>
<div class="footer flexSpace" :style="bgc">
    <p>©2020 京ICP证00000000号 京公网安备00000000000000号</p>
    <div class="footBox flexCenter">
        <img src="../assets/images/login/footLogo.png" class="footLogo" alt="">
        <span class="line"></span>
        <img src="../assets/images/login/footErcode.png" class="footErcode" alt="">
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            props: {
                bgc: {
                    type: String,
                    default: '#fff'
                }
            }

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
.footer {
    min-height: 116px;
    width: 100%;
    background-color: #000;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 14px;
    color: #909090;
    line-height: 16px;
    box-sizing: border-box;
    padding: 0 48px;

    .footLogo {
        width: 232px;
        height: 56px;
    }

    .line {
        width: 1px;
        height: 56px;
        background-color: #848484;
        display: inline-block;
        margin: 0 30px;
    }

    .footErcode {
        width: 59px;
        height: 59px;
        margin-right: 48px;
    }
}
</style>
