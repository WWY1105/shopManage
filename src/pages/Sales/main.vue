<!--  -->
<template>
<div class='sale'>
    <!-- 商品营销 -->
    <div class="part bgf flexCenter flexColumn">
        <!-- <p class="chTitle">商品营销</p>
        <p class="enTitle">Commodity marketing</p> -->
        <div class="content">
            <div  class="gridBox">
                <div :span="6" v-for="(item,index) in saleList" :key="index">
                    <router-link :to="{path:item.path}" tag="div" class="flexCenter flexColumn eachItem" v-if="item">
                        <div class="imgBox">
                            <div class="shadow"></div>
                            <img :src="item.iconActive" alt="" v-if="saleData[item.attr]">
                            <img :src="item.icon" alt="" v-else>
                        </div>
                        <p>{{item.text}}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  

</div>
</template>

<script>
import {
    getData,
    saveData
} from '../../api/sales/index';
import yushou from '../../assets/images/sales/yushou.png';
import yushou_active from "../../assets/images/sales/yushou_active.png";
import pintuan_active from  '../../assets/images/sales/pintuan_active.png'
import pintuan from  '../../assets/images/sales/pintuan.png'
import miaosha_active from "../../assets/images/sales/miaosha_active.png"
import miaosha from "../../assets/images/sales/miaosha.png"
import tongxing_active from  '../../assets/images/sales/tongxing_active.png'
import tongxing from   '../../assets/images/sales/tongxing.png'
import kanjia_active from  "../../assets/images/sales/kanjia_active.png"
import kanjia from  "../../assets/images/sales/kanjia.png"
import mianfei_active from "../../assets/images/sales/mianfei_active.png"
import mianfei from "../../assets/images/sales/mianfei.png"

import peisong_active from "../../assets/images/sales/peisong_active.png"
import peisong from "../../assets/images/sales/peisong.png"
import youhuiquan_active from "../../assets/images/sales/youhuiquan_active.png"
import youhuiquan from "../../assets/images/sales/youhuiquan.png"
import jifen_active from "../../assets/images/sales/jifen_active.png"
import jifen from "../../assets/images/sales/jifen.png"
import fanli_active from "../../assets/images/sales/fanli_active.png"
import fanli from "../../assets/images/sales/fanli.png"

import huiyuan_active from "../../assets/images/sales/huiyuan_active.png"
import huiyuan from "../../assets/images/sales/huiyuan.png"
import chuzhika_active from "../../assets/images/sales/chuzhika_active.png"
import chuzhika from "../../assets/images/sales/chuzhika.png"
import fenxiao_active from "../../assets/images/sales/fenxiao_active.png"
import fenxiao from "../../assets/images/sales/fenxiao.png"
import choujiang_active from "../../assets/images/sales/choujiang_active.png"
import choujiang from "../../assets/images/sales/choujiang.png"
import xiaoxi_active from "../../assets/images/sales/xiaoxi_active.png"
import xiaoxi from "../../assets/images/sales/xiaoxi.png"
import duanxin_active from "../../assets/images/sales/duanxin_active.png"
import duanxin from "../../assets/images/sales/duanxin.png"
import manjian_active from "../../assets/images/sales/manjian_active.png"
import manjian from "../../assets/images/sales/manjian.png"
import { mapState } from 'vuex';

export default {
    components: {},
    data() {
        return {
              saleList:[
                {
                    text:'优惠券',
                    icon:youhuiquan,
                    iconActive:youhuiquan_active,
                    path:'/sales/coupon',
                    attr:'yhq',
                    active:false
                },{
                    text:'满减优惠',
                    icon:manjian,
                    iconActive:manjian_active,
                    path:'/sales/fullReductionDiscount',
                    attr:'mjyh',
                    active:false
                },{
                    text:'限时秒杀',
                    icon:miaosha,
                    iconActive:miaosha_active,
                    path:'/sales/seckill',
                    attr:'ms',
                    active:false
                },{
                    text:'积分',
                    icon:jifen,
                    iconActive:jifen_active,
                    path:'/sales/integral',
                    attr:'jf',
                    active:false
                },{
                    text:'抽奖',
                    icon:choujiang,
                    iconActive:choujiang_active,
                    path:'/sales/lottery',
                    attr:'cj',
                    active:false
                },{
                    text:'拼团',
                    icon:pintuan,
                    iconActive:pintuan_active,
                    path:'/sales/makeGroup',
                    attr:'pt',
                    active:false
                }, {
                    text:'砍价',
                    icon:kanjia,
                    iconActive:kanjia_active,
                    path:'/sales/bargaining',
                    attr:'kj',
                    active:false
                }, {
                    text:'免费拿',
                    icon:mianfei,
                    iconActive:mianfei_active,
                    path:'/sales/free',
                    attr:'mfn',
                    active:false
                },{
                    text:'会员',
                    icon:huiyuan,
                    iconActive:huiyuan_active,
                    path:'/sales/member',
                    attr:'hy',
                    active:false
                },{
                    text:'储值卡',
                    icon:chuzhika,
                    iconActive:chuzhika_active,
                    path:'/sales/store',
                    attr:'czk',
                    active:false
                },{
                    text:'返利',
                    icon:fanli,
                    iconActive:fanli_active,
                    path:'/sales/rebate',
                    attr:'fl',
                    active:false
                }, {
                    text:'分销',
                    icon:fenxiao,
                    iconActive:fenxiao_active,
                    path:'/sales/distribution',
                    attr:'fx',
                    active:false
                },{
                    text:'短信群发',
                    icon:duanxin,
                    iconActive:duanxin_active,
                    path:'/sales/shortMessage',
                    attr:'dxqf',
                    active:false
                },{
                    text:'消息推送',
                    icon:xiaoxi,
                    iconActive:xiaoxi_active,
                    path:'/sales/messagePush',
                    attr:'xxts',
                    active:false
                },
                {
                    text:'预售',
                    icon:yushou,
                    iconActive:yushou_active,
                    path:'/sales/preSale',
                    attr:'ys',
                    active:false
                },
                {
                    text:'同行优惠',
                    icon:tongxing,
                    iconActive:tongxing_active,
                    path:'/sales/togetherDiscount',
                    attr:'txyh',
                    active:false
                }
            //    {
            //         text:'配送',
            //         icon:peisong,
            //         iconActive:peisong_active,
            //         path:'/sales/distribute',
            //         attr:'ps',
            //         active:false
            //     },
               
            ],
            saleData:{}
        };
    },
    computed:mapState({
       
    }),
    watch: {

    },
    methods: {
        //    模块开关-----start
        saveDataFn() {
            let that = this;
            let json = JSON.parse(JSON.stringify(this.saleData));
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
            // if (!this.$store.state.distribution.distributions) {
                this.$store.dispatch('Getdistributions').then(result => {
                    this.saleData = result;
                })
            // } else {
            //     this.saleData = this.$store.state.distribution.distributions;
            // }
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
    .content {
    width: 100%;
        padding: 34px 50px 50px;
        .gridBox{
            display: grid;
            grid-template-columns:25% 25% 25% 25%; 
            justify-items: center;
        }
        .eachItem {
            cursor: pointer;
            width: 200px;
            height: 200px;
            background: rgba(238, 238, 238, .5);
            border-radius: 10px;
            margin-top: 30px;

            .imgBox {
                position: relative;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-bottom: 30px;
                .shadow {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, .2);
                    z-index: 111;
                    display: none;
                    border-radius: 50%;

                }

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  
                    left: 0;
                    top: 0;
                }

            }

            &:hover {
                .shadow {
                    display: block;
                }
            }
        }

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

            p {
                font-size: 14px;
                color: #000;
                  margin-top: 30px;
            }
        }
    }
}
</style>
