<!--  -->
<template>
<div class='setting bgf'>
    <!-- 商品营销 -->
    <div class="part  flexCenter flexColumn">
        <p class="chTitle">安全设置</p>
        <p class="enTitle">security setting</p>
        <div class="content flexCenter">
             <router-link :to="{path:'/setting/setPhone'}" class="settingPart flexCenter flexColumn editPhone">
                <img src="../../assets/images/setting/phone.png" alt="">
                <p>绑定手机号</p>
            </router-link>
            <div class="settingPart flexCenter flexColumn editPas">
                <img src="../../assets/images/setting/editPass.png" alt="">
                <p>修改登录密码</p>
            </div>
            <div class="settingPart flexCenter flexColumn logout">
                <img src="../../assets/images/setting/logout.png" alt="">
                <p>退出登录</p>
            </div>
        </div>
    </div>

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
//@import url(); 引入公共css类
.setting {
    min-height: 100%;

    .part {
        margin-bottom: 20px;
        padding: 34px 35px 50px;

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
            margin-top: 80px;

            .settingPart {
                margin: 0 15px;
                height: 200px;
                border-radius: 10px;
                font-size: 16px;
                line-height: 32px;
                width: 100%;
                color: #000;
               
                img {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 30px;
                }
            }
        }
    }
}
</style>
