<template>
<div>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/jifen.png" class="icon" v-if="!saleData.jf" alt="">
                <img src="../../../assets/images/sales/jifen_active.png" v-else class="icon" alt="">
                <div class="textBox">
                    <h2>积分使用规则设置</h2>
                    <p>本模块可以设置积分的兑换比例，以及获取项的开关、额度设置</p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-row :gutter="80">
                        <el-col :span="12">
                            <el-form-item label="积分模块总开关">
                                <el-switch size="large"  v-model="saleData.jf" active-color="#00B0F0" inactive-color="#aaaaaa" @change="stateDataFn">
                                </el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="积分兑换比例">
                                <el-button class="searchBtn" @click="editDialogShow=true">
                                    {{integralData.score||0}}积分=￥{{integralData.rmb}}
                                    <i class="el-icon-edit-outline"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>
        <div class="right flexStart">
            <div class="databox">
                <p class="title">数据汇总： </p>
                <div class="flexStart">
                    <div class="eachData1">
                        <p class="dataTitle">赠送积分</p>
                        <p class="num">{{integralData.total}}</p>
                    </div>
                    <div class="eachData1">
                        <p class="dataTitle">使用积分</p>
                        <p class="num">{{integralData.used}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="partTitle">永久任务明细设置（一次性领取）</div>
    <div class="listBox bgf flexStart">
        <div class="eachTask flexCenter flexColumn" v-for="(i,j) in taskList" :key="j">
            <img src="../../../assets/images/sales/jifenIcon.png" alt="" class="jifenIcon">
            <!-- <img :src="i.icon" alt="" class="jifenIcon"> -->
            <p class="name">{{i.name}}</p>
            <p class="introduction">{{i.introduction}}</p>
            <p class="integral">{{i.integral}}积分</p>
            <el-switch size="large" active-color="#00B0F0" v-model="i.used" inactive-color="#aaaaaa">
            </el-switch>
        </div>
    </div>
    <div class="partTitle">每日任务明细设置（每日0:00:00更新）</div>
    <div class="listBox bgf">

    </div>

    <el-dialog :visible.sync="editDialogShow" title="积分兑换比例：" width="600px">
        <div class="editDialog">
            <div class="flexCenter">
                <div class="inputBox">
                    <el-input v-model="taskForm.score" type="number"></el-input>
                </div>
                <span class="dialogText">积分兑换￥</span>
                <div class="inputBox">
                    <el-input v-model="taskForm.rmb" type="number"></el-input>
                </div>
            </div>
            <div class="flexStart flexColumn btnBox">
                <el-button class="btn searchBtn" @click="saveDataFn">保存</el-button>
                <el-button class="btn transBtn" @click="editDialogShow=false">取消</el-button>
            </div>
        </div>
    </el-dialog>

</div>
</template>

<script>
import {
    getTask,
    putData,
    getExchange,
    postData
} from '@/api/sales/integral'
export default {
    data() {
        return {
            editDialogShow: false,
            integralData: {},
            taskForm: {},
            taskList: [],
            saleData:{}
        }
    },
    created() {
         this.getState()
        this.getTaskFn();
        this.getExchangeFn()
    },
    methods: {
        // 获取积分任务列表
        getTaskFn() {
            getTask().then(res => {
                this.taskList = res.data;
            })
        },
        // 根据商家ID获取积分兑换比例详情（总汇数据）
        getExchangeFn() {
            getExchange().then(res => {
                console.log(res)
                this.integralData = res.data;
            })
        },
        // 保存兑换信息
        saveDataFn() {
            let json = JSON.parse(JSON.stringify(this.taskForm));
            if (!json.score) {
                this.$message({
                    showClose: true,
                    message: '请输入积分数量',
                    duration: 2 * 1000,
                    type: 'error'
                })
                return;
            }
            if (!json.rmb) {
                this.$message({
                    showClose: true,
                    message: '请输入兑换钱数',
                    duration: 2 * 1000,
                    type: 'error'
                })
                return;
            }
            postData(json).then(res => {
                if (res.code == '00') {
                    this.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    this.getExchangeFn();
                    this.editDialogShow=false;
                }
            })
        },
        // 修改

          //    模块开关-----start
        stateDataFn() {
            let that = this;
            let json =  JSON.parse(JSON.stringify(this.saleData));
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
    }
}
</script>

<style lang="scss" scoped>
.part1 {
    padding: 39px 67px;
    border: 1px solid #C7C7C7;

    .left {
        width: 75%;
        border-right: 1px solid #C3C3C3;
        padding-right: 5%;

        .el-form-item {
            margin: 0;
        }
    }

    .right {
        width: 25%;
        padding-left: 5%;

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
            word-break: keep-all;
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
    font-size: 22px;
    margin: 16px 0;
    padding-left: 60px;
    color: #393939;
}

.listBox {
    padding: 50px 66px;
    flex-wrap: wrap;

    .eachTask {
        // margin-right: 60px;
        width: 13%;
        margin-bottom: 40px;

        .name {
            font-size: 14px;
            font-weight: 400;
            color: #202020;
            margin-bottom: 14px;

            line-height: 11px;
        }

        .introduction {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #818181;
            line-height: 11px;
            margin-bottom: 28px;
        }

        .integral {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #00B0F0;
            line-height: 11px;
            margin-bottom: 19px;
        }

        .jifenIcon {
            width: 35px;
            height: 35px;
            margin-bottom: 20px;
        }
    }

}

.editDialog {
    .inputBox {
        width: 100px;
    }

    .dialogText {
        margin: 0 15px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height: 32px;
    }

    .btnBox {
        margin-top: 100px;

        .btn {
            width: 263px;
            height: 42px;

            &.searchBtn {
                margin-bottom: 35px;
            }
        }
    }
}
</style>
