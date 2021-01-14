<!--  -->
<template>
<div class='rebate'>
    <div class="bgf part1 flexSpace">
        <div class="left flexStart">
            <div class="flexStart">
                <img src="../../../assets/images/sales/fanli.png" class="icon" alt="">
                <div class="textBox">
                    <h2>返利模块设置</h2>
                    <p>本模块可以设置返积分、返优惠券的比例、金额</p>
                    <p class="worningTips">使用返利模块需打开积分或优惠券的模块开关</p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="返利模块总开关">
                          <el-switch @change="saveSaleDataFn" size="large" v-model="saleData.fl" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
    <p class="partTitle">返积分设置（需打开积分模块开关）</p>
    <div class="content bgf">
        <!-- <p class="rule">规则说明：您店铺的用户，邀请新的用户登录您的小程序并绑定账号，那么被邀请新用户今后在您的店铺消费金额的一定比例金额，将作为奖励金发放给邀请人</p> -->
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="40" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="返积分开关">
                        <el-switch @change="saveDataFn" active-text="已开启" size="large" v-model="rebateData['scoreUsed']" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="5" :pull="14">
                    <el-form-item label="返积分比例">
                        <el-button class="searchBtn" @click="ruleVisible1=true">
                            {{rebateData.fullPrice?'每消费1元返'+rebateData.rmbToScore+'积分':'点击输入奖励比例'}}
                            <i class="el-icon-edit-outline"></i>
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>
    <p class="partTitle">返优惠券设置（需打开积分模块开关）</p>
    <div class="content bgf">
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="40" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="返优惠券开关">
                        <el-switch @change="saveDataFn" active-text="已开启" size="large" v-model="rebateData['coupon']" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="5" :pull="14">
                    <el-form-item label="返优惠券比例">
                        <el-button class="searchBtn" @click="ruleVisible2=true">
                            {{rebateData.minPrice?'每消费'+rebateData.minPrice+'元返'+rebateData.couponPrice+'元优惠券':'点击输入奖励比例'}}
                            <i class="el-icon-edit-outline"></i>
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>

    <!--  -->
    <el-dialog title="设置返积分比利" center :visible.sync="ruleVisible1" width="660px">
        <div class="dialogContent">
            <!-- <p class="tips">被邀请客户所有消费的实付金额，原邀请人可获得</p> -->
            <div class="flexCenter inputBox">
                <span>每消费1元，返</span>
                <el-input v-model="rebateData.rmbToScore"></el-input>
                <span>积分</span>
            </div>
            <p class="tips">现金返现奖励</p>
            <div class="btnBox flexCenter flexColumn">
                <el-button class="searchBtn" @click="saveDataFn">保存</el-button>
                <el-button class="transBtn" @click="ruleVisible1=false">取消</el-button>
            </div>
        </div>
    </el-dialog>
    <el-dialog title="返优惠券规则：" center :visible.sync="ruleVisible2" width="660px">
        <div class="dialogContent">
            <!-- <p class="tips">客户打开分享的商品链接后下单，原分享人可获得商品金额的</p> -->
            <div class="inputBox">
                <span>每消费达￥</span>
                <el-input v-model="rebateData.fullPrice"></el-input> 
                <span>返&nbsp;&nbsp;&nbsp;￥</span>
                 <el-input v-model="rebateData.rmbToScore"></el-input> 
            </div>
            <div>
                <span>优惠券使用需订单金额满￥</span>
                  <el-input v-model="rebateData.minPrice"></el-input> 
            </div>
            <div class="btnBox flexCenter flexColumn">
                <el-button class="searchBtn" @click="saveDataFn">保存</el-button>
                <el-button class="transBtn" @click="ruleVisible2=false">取消</el-button>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    getData,
    saveData
} from '../../../api/sales/rebate'

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            ruleVisible1: false,
            ruleVisible2: false,
            rebateData: {
                coupon: false,//是否开启优惠券
                couponPrice: 0,//赠送优惠券面值
                fullPrice: 0,//满足金额
                minPrice: 0,//订单金额
                rmbToScore: 0,//每消费1元抵换积分数
                scoreUsed: false,//	是否开启积分
            },
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        //    模块开关-----start
        saveSaleDataFn() {
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
                    that.getDetail()
                }
            })
        },
        getState() {
            console.log(this.$store)
            if (!this.$store.state.distribution.distributions) {
                this.$store.dispatch('Getdistributions').then(result => {
                    this.saleData = result;
                })
            } else {
                this.saleData = this.$store.state.distribution.distributions;
            }
        },
        //    模块开关----end
        getDetail() {
            getData({}).then(res => {
                if (res.code == '00') {
                    this.rebateData = res.data;
                }
            })
        },
        saveDataFn() {
            let that = this;
            console.log('改变')
            delete this.rebateData.businessId;
            saveData(this.rebateData).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success',
                        onClose: () => {
                            that.ruleVisible1 = false,
                                that.ruleVisible2 = false,
                                that.getDetail()
                        }
                    })
                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getState()
        this.getDetail();
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
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
.part1 {
    padding: 39px 67px;

    border: 1px solid #C7C7C7;

    .left {
        padding-right: 5%;
        flex: 1;
        // width: 50%;

        .el-form-item {
            margin: 0;
        }
        .switchBox {
            margin-left: 180px;
        }
    }

    .right {
        width: 50%;
        padding-left: 10%;

        .title {
            font-size: 22px;
            color: #2A3F54;
            margin-bottom: 39px;
        }

        .eachData1 {
            margin-right: 100px;
        }

        .dataTitle {
            font-size: 16px;
            color: #2A3F54;
            margin-bottom: 16px;
        }

        .num {
            font-size: 22px;
            font-weight: bold;
        }
    }

    .icon {
        width: 100px;
        height: 100px;
        margin-right: 35px;
    }

    .textBox {
        h2 {
            color: #00B0F0;
            font-weight: bold;
            font-size: 22px;
            margin: 0 0 20px;
        }

        p {
            color: #7E7E7E;
            font-size: 14px;

            &.worningTips {
                color: #FF2E2E;
                margin-top: 16px;
            }
        }
    }
}

.partTitle {
    padding: 22px 67px;
    font-size: 22px;
    font-weight: 400;
    color: #393939;
}

.content {

    border: 1px solid #C7C7C7;
    padding: 64px 67px;
    color: #393939;
    font-size: 14px;

    .rule {
        margin-bottom: 78px;
    }
}

.dialogContent {

    .inputBox {
        margin: 40px 0;
    }

    .btnBox {
        margin-top: 82px;
    }

    .el-input {
        max-width: 100px;
        margin-right: 13px;
    }

    .el-button {
        margin: 0;
        width: 263px;

        &.searchBtn {
            margin-bottom: 35px;
        }
    }
}
</style>
