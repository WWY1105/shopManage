<!--  -->
<template>
<div class='sale'>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            value: ''
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
.sale {

    //min-height: 100%;
    .part {
        margin-bottom: 20px;
        padding: 34px 150px 50px;

        .chTitle {
            font-size: 30px;
            font-weight: bold;
            color: #0091C6;
            margin-bottom: 10px;
        }

        .enTitle {
            font-size: 12px;
            font-weight: 400;
            color: #0091C6;
        }

        .content {
            width: 100%;

            img {
                width: 100px;
                height: 100px;
                margin-bottom: 26px;
                margin-top: 60px;
            }

            p {
                font-size: 16px;
                color: #000;
                margin-bottom: 40px;
            }
        }
    }
}
</style>
