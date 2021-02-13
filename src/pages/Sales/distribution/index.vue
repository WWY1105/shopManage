<!--  -->
<template>
<div class='distribution'>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/fenxiao.png" class="icon" alt="">
                <div class="textBox">
                    <h2>分销管理设置</h2>
                    <p>本模块可设置邀请奖励与分享佣金的明细设置</p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="分销模块开关">
                       <el-switch @change="saveSaleDataFn" size="large" v-model="saleData.fx" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right flexStart">
            <div class="databox">
                <p class="title">数据汇总： </p>
                <div class="flexStart">
                    <div class="eachData1">
                        <p class="dataTitle">邀请奖励支出</p>
                        <p class="num">￥{{distributionData.inviteTotal}}</p>
                    </div>
                    <div class="eachData">
                        <p class="dataTitle">分享佣金支出</p>
                        <p class="num">￥{{distributionData.shareTotal}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <p class="partTitle">邀请奖励</p>
    <div class="content bgf">
        <p class="rule">规则说明：您店铺的用户，邀请新的用户登录您的小程序并绑定账号，那么被邀请新用户今后在您的店铺消费金额的一定比例金额，将作为奖励金发放给邀请人</p>
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="40" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="邀请奖励开关">
                        <el-switch @change="saveDataFn" active-text="已开启" size="large" v-model="distributionData['inviteUsed']" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="5" :pull="14">
                    <el-form-item label="奖励比例">
                        <el-button class="searchBtn" @click="ruleVisible1=true">
                            {{distributionData.invitePer?'被邀请好友消费金额的'+distributionData.invitePer+'%':'点击输入奖励比例'}}
                            <i class="el-icon-edit-outline"></i>
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>
    <p class="partTitle">分享佣金</p>
    <div class="content bgf">
        <p class="rule">规则说明：每件商品可以独立设置是否参与分享佣金奖励，用户分享您的商品链接到微信好友、朋友圈或朋友的话题板块，其他用户通过他的链接购买的商品，将拿出指定比例金额作为佣金奖励给用户</p>

        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="40" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="分享佣金开关">
                        <el-switch @change="saveDataFn"  active-text="已开启" size="large" v-model="distributionData['shareUsed']" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="5" :pull="14">
                    <el-form-item label="奖励比例">
                        <el-button class="searchBtn" @click="ruleVisible2=true">
                            {{distributionData.sharePer?'商品金额的'+distributionData.sharePer+'%':'点击输入奖励比例'}}
                            <i class="el-icon-edit-outline"></i>
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>

    <!--  -->
    <el-dialog title="设置邀请奖励的奖励比利" center :visible.sync="ruleVisible1" width="660px">
        <div class="dialogContent">
            <p class="tips">被邀请客户所有消费的实付金额，原邀请人可获得</p>
            <div class="flexCenter inputBox">
                <el-input v-model="distributionData.sharePer"></el-input> <span>%</span>
            </div>
            <p class="tips">现金返现奖励</p>
            <div class="btnBox flexCenter flexColumn">
                <el-button class="searchBtn" @click="saveDataFn">保存</el-button>
                <el-button class="transBtn" @click="ruleVisible1=false">取消</el-button>
            </div>
        </div>
    </el-dialog>
    <el-dialog title="设置分享佣金的奖励比利" center :visible.sync="ruleVisible2" width="660px">
        <div class="dialogContent">
            <p class="tips">客户打开分享的商品链接后下单，原分享人可获得商品金额的</p>
            <div class="flexCenter inputBox">
                <el-input v-model="distributionData.sharePer"></el-input> <span>%</span>
            </div>
            <p class="tips">现金返现佣金</p>
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
} from '../../../api/sales/distribution'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            saleData:{},
            ruleVisible1: false,
            ruleVisible2: false,
            distributionData: {
                inviteUsed: false, //邀请奖励是否开启
                invitePer: '', //邀请百分比
                shareUsed: false, //分享开关
                sharePer: '', //分享百分比
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
                    that.getDataFn()
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
        getDetail() {
            getData({}).then(res => {
                if (res.code == '00') {
                    this.distributionData = res.data;
                }
            })
        },
        saveDataFn() {
            let that = this;
            console.log('改变')
            saveData(this.distributionData).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success',
                        onClose: () => {
                              that.ruleVisible1=false,
                              that.ruleVisible2=false,
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
        width: 50%;
        border-right: 1px solid #C3C3C3;
        padding-right: 5%;

        .el-form-item {
            margin: 0;
        }
    }

    .right {
        width: 50%;
        padding-left: 10%;

        .title {
            font-size: 20px;
            color: #2A3F54;
            margin-bottom: 39px;
        }

        .eachData1 {
            margin-right: 100px;
        }

        .dataTitle {
            font-size: 14px;
            color: #2A3F54;
            margin-bottom: 16px;
        }

        .num {
            font-size: 20px;
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
            font-size: 20px;
            margin: 0 0 20px;
        }

        p {
            color: #7E7E7E;
            font-size: 12px;
        }
    }
}

.partTitle {
    padding: 22px 67px;
    font-size: 20px;
    font-weight: 400;
    color: #393939;
}

.content {

    border: 1px solid #C7C7C7;
    padding: 64px 67px;
    color: #393939;
    font-size: 12px;

    .rule {
        margin-bottom: 78px;
    }
}

.dialogContent {
    padding: 50px 0;

    .tips {
        font-size: 12px;
        color: #666666;
        text-align: center;
    }

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
