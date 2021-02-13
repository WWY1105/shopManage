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
                    <router-link :to="{path:'/sales/preSale'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/yushou.png" alt="">
                        <p>预售</p>
                        <el-switch size="large" @change="saveDataFn" v-model="saleData.ys" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/makeGroup'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/pintuan.png" alt="">
                        <p>拼团</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.pt" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/seckill'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/miaosha.png" alt="">
                        <p>限时秒杀</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.ms" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/togetherDiscount'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/tongxing.png" alt="">
                        <p>同行优惠</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.txyh" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/sales/bargaining'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/kanjia.png" alt="">
                        <p>砍价</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.kj" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/free'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/mianfei.png" alt="">
                        <p>免费拿</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.mfn" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/distribute'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/peisong.png" alt="">
                        <p>配送</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.ps" active-color="#00B0F0" inactive-color="#aaaaaa">
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
                    <router-link :to="{path:'/sales/fullReductionDiscount'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/manjian.png" alt="">
                        <p>满减优惠</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.mjyh" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/coupon'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/youhuiquan.png" alt="">
                        <p>优惠券</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.yhq" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/integral'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/jifen.png" alt="">
                        <p>积分</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.jf" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/rebate'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/fanli.png" alt="">
                        <p>返利</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.fl" active-color="#00B0F0" inactive-color="#aaaaaa">
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
                    <router-link :to="{path:'/sales/member'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/huiyuan.png" alt="">
                        <p>会员</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.hy" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/store'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/chuzhika.png" alt="">
                        <p>储值卡</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.czk" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/distribution'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/fenxiao.png" alt="">
                        <p>分销</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.fx" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/lottery'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/choujiang.png" alt="">
                        <p>抽奖</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.cj" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="6">
                    <router-link :to="{path:'/sales/messagePush'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/xiaoxi.png" alt="">
                        <p>消息推送</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.xxts" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{path:'/sales/shortMessage'}" tag="div" class="flexCenter flexColumn">
                        <img src="../../assets/images/sales/duanxin.png" alt="">
                        <p>短信群发</p>
                        <el-switch @change="saveDataFn" size="large" v-model="saleData.dxqf" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>

</div>
</template>

<script>
import {
    getData,
    saveData
} from '../../api/sales/index';
export default {
    components: {},
    data() {
        return {
            saleData: {}
        };
    },
    computed: {

    },
    watch: {

    },
    methods: {
        //    模块开关-----start
        saveDataFn() {
            let that = this;
            let json = this.saleData;
            delete json.businessId;
            this.$store.dispatch('Setdistributions', json).then(result => {
                if (result.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.getState()
                }
            })
        },
        getState() {
            if (!this.$store.state.distribution.distributions) {
                this.$store.dispatch('Getdistributions').then(result => {
                    this.saleData = result;
                })
            } else {
                this.saleData = this.$store.state.distribution.distributions;
            }
        },
        //    模块开关----end
    },

    created() {
        this.getState()
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
        padding: 34px 50px 50px;

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
                width: 50px;
                height: 50px;
                margin-bottom: 20px;
                margin-top: 60px;
            }

            p {
                font-size: 14px;
                color: #000;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
