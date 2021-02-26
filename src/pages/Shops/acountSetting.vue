<!--  -->
<template>
<div class='acountSetting'>
     <div class="styleSetting bgf">
        <div class="flexCenter">
            <img src="../../assets/images/shops/phoneStyle.png" alt="" class="styleImg">
            <div class="textBox">
                <p class="title">软件风格选择</p>
                <p class="tips">软件类型：标准风格与功能</p>
                <div class="themeColor flexStart">
                    <p class="flexStart"> 主题色：<span class="pageStyle" :style="{'background':userInfo.pageStyle}"></span></p>
                    <span class="color"></span>
                </div>
                <router-link :to="{path:'/shops/setStyle'}">
                    <el-button class="searchBtn setStyleBtn">修改</el-button>
                </router-link>
            </div>
        </div>
    </div>
    <div class="baseSetting bgf flexCenter">
        <div class="eachSetting flexCenter flexColumn">
            <img src="../../assets/images/shops/haohua.png" alt="">
            <p class="title">微信小程序对接</p>
            <p class="tips">
                appkey:1098481--02939-120<br>
                appID:dsksjj1098899301
            </p>
            <el-button class="searchBtn">修改配置???</el-button>
        </div>
        <div class="eachSetting flexCenter flexColumn">
            <img src="../../assets/images/shops/weixin.png" alt="">
            <p class="title">微信收款账户对接</p>
            <p class="tips">未配置</p>
            <el-button class="searchBtn dangerBtn">配置???</el-button>
        </div>
        <div class="eachSetting flexCenter flexColumn">
            <img src="../../assets/images/shops/gongzhonghao.png" alt="">
            <p class="title">微信公众号对接</p>
            <p class="tips">未配置</p>
            <el-button class="searchBtn dangerBtn">配置???</el-button>
        </div>
    </div>
   
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    components: {},
    data() {
        return {

        };
    },
    computed: mapState({
        userInfo:state=>state.user.userInfo
    }),
    watch: {},
    methods: {

    },
    created() {
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
//@import url(); 引入公共css类
.baseSetting {
    padding: 74px 0 74px 10px;
    // border: 1px solid #C7C7C7;
    margin-top: 20px;

    .eachSetting {
        padding: 0 90px;
        // border-right: 1px solid #B9B9B9;

        &:last-child {
            border: none
        }

        img {
            width: 60px;
            height: 60px;
            margin-bottom: 40px;
        }

        .title {
            margin-bottom: 20px;
            font-size: 22px;
            font-weight: bold;
            color: #00B0F0;
        }

        .tips {
            margin-bottom: 10px;
            font-size: 12px;
            font-weight: 400;
            color: #525252;
            min-height: 40px;
        }

        .searchBtn {
            &.dangerBtn {
                background-color: #FF5B5B;
            }
        }
    }
}

.styleSetting {
    padding: 67px 89px;

    .styleImg {
        width: 168px;
        height: 290px;
        margin-right: 70px;
    }

    .textBox {
        padding-top: 28px;

        .title {
            font-size: 22px;
            font-weight: bold;
            color: #00B0F0;
        }
        .tips{
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            margin-bottom: 50px;
            margin-top: 50px;
        }
        .themeColor{
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            line-height: 66px;
            .pageStyle{
                width:30px;
                height: 30px;
                display: inline-block;
                border-radius: 50%;
            }
        }
        .searchBtn{
            margin-top: 52px;
        }
    }
}
</style>
