<!--  -->
<template>
<div class='sale'>
    <!-- 商品营销 -->
    <div class="part bgf flexCenter flexColumn">
        <p class="chTitle">商品营销</p>
        <p class="enTitle">Commodity marketing</p>
        <div class="content">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="6">
                    <router-link  :to="{name:'PreSale'}"  tag="div"  class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/yushou.png" alt="">
                        <p>预售</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{name:'PreSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/pintuan.png" alt="">
                        <p>拼团</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/miaosha.png" alt="">
                        <p>限时秒杀</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/tongxing.png" alt="">
                        <p>同行优惠</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/kanjia.png" alt="">
                        <p>砍价</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/mianfei.png" alt="">
                        <p>免费拿</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/peisong.png" alt="">
                        <p>配送</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>

            </el-row>
        </div>
    </div>
    <!-- 优惠营销 -->
    <div class="part bgf flexCenter flexColumn">
        <p class="chTitle">优惠营销</p>
        <p class="enTitle">Preferential marketing</p>
        <div class="content">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales//manjian.png" alt="">
                        <p>满减优惠</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/coupon'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/youhuiquan.png" alt="">
                        <p>优惠券</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/jifen.png" alt="">
                        <p>积分</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/fanli.png" alt="">
                        <p>返利</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>

    <!-- 客户营销 -->
    <div class="part bgf flexCenter flexColumn">
        <p class="chTitle">客户营销</p>
        <p class="enTitle">Customer marketing</p>
        <div class="content">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/huiyuan.png" alt="">
                        <p>会员</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/chuzhika.png" alt="">
                        <p>储值卡</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/fenxiao.png" alt="">
                        <p>分销</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/choujiang.png" alt="">
                        <p>抽奖</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/xiaoxi.png" alt="">
                        <p>消息推送</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/preSale'}"  tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/duanxin.png" alt="">
                        <p>短信群发</p>
                        <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>

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
            font-size: 32px;
            font-weight: bold;
            color: #0091C6;
            margin-bottom: 10px;
        }

        .enTitle {
            font-size: 14px;
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
                font-size: 18px;
                color: #000;
                margin-bottom: 40px;
            }
        }
    }
}
</style>
