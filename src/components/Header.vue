<!--  -->
<template>
<div class='header flexSpace'>
    <h1 class="flagName">商户管理控制台</h1>
    <div class="userInfo">小明</div>
</div>
</template>

<script>
export default {
    components: {},
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
.header{
    height: 100px;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.11);
    padding: 0 28px;
    h1{
        color: #00B0F0;
        font-size: 27px;
    }
}
</style>
