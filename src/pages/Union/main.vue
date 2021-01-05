<!--  -->
<template>
<div class='union bgf'>
    <div class="mainTitle bgf">
        <p>加入极星联盟</p>
        <p> 开启3大板块</p>
    </div>
    <div class="content flexCenter bgf">
        <div class="part flexCenter flexColumn">
            <img src="../../assets/images/union/zhibo.png" alt="">
            <div class="title">直播</div>
            <div class="desc">
                加入极星联盟即可开启直播功能，在直播间与粉丝、用户互动
                且直播板块用户为公共用户流量，除本店会员、粉丝外还可获得新客流量
            </div>
            <div class="tips zhiboTips">使用直播需额外支付流量费用 </div>
        </div>
        <div class="part flexCenter flexColumn">
            <img src="../../assets/images/union/xingmiao.png" alt="">
            <div class="title">星秒</div>
            <div class="desc"> 加入极星联盟即可加入星秒板块，本板块的特价秒杀商品将推广到全平台用户根据用户距离推广，公平公正</div>
            <div class="tips xingmiaoTips">进入星秒商品与订单管理</div>
        </div>
        <div class="part flexCenter flexColumn">
            <img src="../../assets/images/union/xingkatong.png" alt="">
            <div class="title">星卡通</div>
            <div class="desc">加入极星联盟即可让店铺用户使用星卡通折上折会员</div>
            <div class="tips xingkatongTips">拥有星卡通的用户可能不是您的用户，但如果您的店铺支持星卡通，他就有可能成为您的新用户</div>
        </div>
    </div>

    <div class="loginStatus flexCenter flexColumn">
        <P class="statusTtile">联盟状态</P>
        <el-switch></el-switch>
        <p class="statusText">已加入</p>
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
.union {
    padding: 34px 73px;
    //min-height: 100%;

    .mainTitle {
        text-align: center;
        color: #0091C6;
        font-weight: bold;
        margin-bottom: 55px;

        p:first-child {
            font-size: 32px;
            margin-bottom: 10px;
        }

        p:last-child {
            font-size: 22px;
        }

    }

    .content {
        .part {
            width: 33.3333%;
            border-right: 1px solid #B9B9B9;

            &:last-child {
                border: none
            }

            img {
                width: 120px;
                height: 74px;
                margin-bottom: 20px;
            }

            .title {
                font-size: 22px;
                color: #202020;
                margin-bottom: 42px;
                text-align: center;
            }

            .desc {
                font-size: 16px;
                color: #202020;
                margin-bottom: 20px;
                line-height: 22px;
                max-width: 289px;
                text-align: center;
            }

            .tips {
                &.zhiboTips {
                    color: #FF4444;
                }

                &.xingmiaoTips {
                    color: #00B0F0;
                    text-decoration: underline;
                }

                &.xingkatongTips {
                    max-width: 289px;
                    text-align: center;
                    line-height: 22px;
                }

            }
        }
    }

    .loginStatus {
        margin-top: 104px;

        .statusTtile {
            color: #2A3F54;
            font-size: 22px;
            margin-bottom: 45px;
        }

        .statusText {
            margin-top: 16px;
            font-size: 22px;
            font-weight: 400;
            color: #00B0F0;
        }
    }
}
</style>
