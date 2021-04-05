<template>
<div class="wxAcountSet flexCenter flexColumn bgf">
    <img src="../../assets/images/shops/weixin.png" alt="" class="wxLogo">
    <p class="title">微信小程序对接配置</p>
    <div class="tabContainer flexCenter">
        <div class="item  flexCenter flexColumn " @click="toQuickReg">
            <img src="../../assets/images/shops/zhuce.png" alt="" class="itemLogo1">
            <p class="itemTitle">快速注册</p>
            <p class="desc">适用于小程序新商户，从零申请，简
                单便捷且完全免费。支持商超、餐饮、
                生活服务等100多个类目
                自动开通微信认证（免费）</p>
        </div>
        <div class="item  flexCenter flexColumn ">
            <img src="../../assets/images/shops/renzheng.png" alt="" class="itemLogo2">
            <p class="itemTitle">认证公众号注册</p>
            <p class="desc">适用于拥有认证公众号的商户，扫码
                授权后注册。
                自动开通微信认证（免费）</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
   data(){},
   methods:{
       toQuickReg(){
           this.$router.push({
               path:'/shops/quickReg'
           })
       }
   }
}
</script>

<style lang="scss" scoped>
.wxAcountSet {
    padding: 50px 0;

    .wxLogo {
        width: 100px;
        height: 100px;
        margin-bottom: 30px;
    }

    .title {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #00B0F0;
        margin-bottom: 100px;
    }

    .tabContainer {
        .item {
            width: 295px;
            height: 411px;
            background: #FFFFFF;
            border: 1px solid #CCCCCC;
            border-radius: 4px;
            margin:0 50px;
            .itemLogo1 {
                width: 101px;
                height: 104px;
                margin-bottom: 24px;
            }

            .itemLogo2 {
                width: 88px;
                height: 95px;
                margin-bottom: 24px;
            }

            .itemTitle {
                font-size: 22px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #545454;
                margin-bottom: 28px;
            }

            .desc {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #787878;
                padding:0 17px;
                line-height: 25px;
            }
        }
    }
}
</style>
