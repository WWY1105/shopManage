<!--  -->
<template>
<div class='shops'>
    <div class="mainShopInfo flexCenter bgf">
        <img src="../../assets/images/header/user.png" class="logo" alt="">
        <p class="shopName">{{shopInfo.name}}</p>
        <div class="otherText">
            <p>公司名称：{{shopInfo.name}}</p>
            <p>公司地址：{{shopInfo.address}}</p>
            <p>联系电话：{{shopInfo.tel}}</p>
            <p>发票类型：{{shopInfo.invoice==1?'不开发票':shopInfo.invoice==2?'普票':shopInfo.invoice==3?'专票与普票':''}}</p>
        </div>
        <el-button class="transBtn flexCenter">
            <router-link :to="{name:'editShop'}">
                <img src="../../assets/images/shops/editIcon.png" class="editIcon" alt="">
                <span> 修改</span>
            </router-link>
        </el-button>
    </div>

    <div class="shopPartInfo bgf flexSpace">
        <div class="eachInfo flexCenter ">
            <img src="../../assets/images/shops/haohua.png" class="icon" alt="">
            <p class="title">天极星 豪华版</p>
            <p class="desc">已激活 有效期至{{shopInfo.expireTime}}</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn">续费</el-button>
                <el-button class="transBtn">账户设置</el-button>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/duanxin.png" class="icon" alt="">
            <p class="title">短信条数</p>
            <p class="desc">剩余{{shopInfo.smsCount}}条</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn">充值 </el-button>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/edu.png" class="icon" alt="">
            <p class="title">分店额度</p>
            <p class="desc">2/3</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn">扩充</el-button>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/erweima.png" class="icon" alt="">
            <p class="title">店铺二维码</p>
            <p class="desc">查看店铺二维码</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn">续费</el-button>
            </div>
        </div>
    </div>

    <!-- 分店管理 -->
    <h1 class="branchShopTitle">分店管理：</h1>
    <div class="branchShopBox bgf flexStart">
        <div class="eachSetting flexCenter">
            <div class="logoBox flexCenter">
                <img src="../../assets/images/header/user.png" class="logo" alt="">
                <div class="switchBox">
                    <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                    </el-switch>
                </div>
            </div>
            <p class="shopName">芭莎丽人[徐汇店]</p>
            <div class="otherText">
                <p>公司名称：上海芭莎丽人美容有限公司</p>
                <p>公司地址：上海市嘉定区明航路2130号19楼</p>
                <p>联系电话：02198712412</p>
                <p>发票类型：不开票</p>
            </div>
            <el-button class="transBtn flexCenter">
                <img src="../../assets/images/shops/editIcon.png" class="editIcon" alt="">
                <span> 修改</span>
            </el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            shopInfo:{},
            value: true
        };
    },
    computed: {},
    watch: {},
    methods: {
        getShopInfo() {
            this.$store.dispatch('GetInfo').then((res) => {
                 const data = res.data;
                 this.shopInfo=data;
            })
        },
    },
    created() {
this.getShopInfo()
    },
    mounted() {

    },
    beforeCreate() {
        
    }, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang="scss" scoped>
.shops {

    //min-height: 100%;
    .mainShopInfo {
        flex-direction: column;
        padding: 42px 0 88px 0;

        .editIcon {
            width: 17px;
            height: 16px;
            margin-right: 10px;
        }

        .logo {
            width: 60px;
            height: 60px;
            margin-bottom: 40px;
        }

        .shopName {
            font-size: 24px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #00B0F0;
            margin-bottom: 18px;
        }

        .otherText {
            text-align: center;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #525252;

            p {
                margin-bottom: 10px;
            }
        }
    }

    .shopPartInfo {
        padding: 0 70px 100px;

        .eachInfo {
            flex-direction: column;
            border-right: 1px solid #B9B9B9;
            width: 25%;

            &:last-child {
                border: none;
            }

            .icon {
                width: 60px;
                height: 60px;
                margin-bottom: 40px;
            }

            .title {

                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #00B0F0;
                margin-bottom: 20px;
            }

            .desc {

                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #525252;
                margin-bottom: 40px;
            }
        }

    }

    .branchShopTitle {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin: 20px 0;
    }

    .branchShopBox {
        padding: 50px 30px;

        .eachSetting {
            background: #F4F4F4;
            border-radius: 10px;
            flex: 1;
            margin: 0 36px;
            flex-direction: column;
            max-width: 33%;
            padding: 26px 36px 46px;

            .logoBox {
                width: 100%;
                position: relative;

                .switchBox {
                    position: absolute;
                    top: 10px;
                    right: 0
                }

                .logo {
                    width: 60px;
                    height: 60px;
                }
            }

            .shopName {
                margin-top: 40px;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #00B0F0;
            }

            .otherText {
                margin-top: 20px;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #525252;
                text-align: center;
                margin-bottom: 50px;

                p {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
