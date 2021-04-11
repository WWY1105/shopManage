<!--  -->
<template>
<div class='bgf'>
    <div class="content flexCenter flexColumn">
        <img src="../../../assets/images/sales/peisongIcon.png" alt="" class="icon">

        <p class="title">外卖配送设置</p>
        <p class="tips">
            开启外卖配送，即开启外卖业务类型<br>
            客户可以从小程序下外卖订单<br>
            下方可设置配送的方式与相关功能
        </p>
        <div class="formBox flexCenter flexColumn">
            <el-form label-position="top" :inline="true" class="demo-form-inline">
                <div class="flexCenter">
                    <el-form-item label="配送模块开关" class="firstSwitch">
                        <el-switch @change="saveSaleDataFn" size="large" v-model="saleData.ps" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </div>
                <!-- <el-form-item label="包邮优惠规则">
                    <el-switch size="large" active-color="#00B0F0" inactive-color="#aaaaaa" v-model="distribute.used">
                    </el-switch>
                </el-form-item> -->
            </el-form>
            <el-form label-position="left" :inline="true" class="demo-form-inline" label-width="105px">
                <div class="flexStart inputBox">
                    <el-form-item label="基础配送费￥">
                        <el-input @change="saveSaleDataFn">
                        </el-input>
                    </el-form-item>
                </div>
                <div class="flexStart inputBox">
                    <el-form-item label="订单金额满￥">
                        <el-input type="number" min='0'></el-input>
                    </el-form-item>
                    <span>起送</span>
                </div>
                <div class="flexStart inputBox">
                    <el-form-item label="订单金额满 ￥">
                        <el-input type="number" min='0'></el-input>
                    </el-form-item>
                    <span>免配送费</span>
                </div>
                <div class="flexStart inputBox">
                    <el-form-item label="配送方式">
                        <el-select value="第三方配送">
                            <el-options label="第三方配送" value="第三方配送"></el-options>
                        </el-select>
                    </el-form-item>
                    <span>对接第三方配送</span>
                </div>
                <div class="flexStart inputBox">
                    <el-form-item label="免费打包摊位数">
                        <el-input type="number" min='0'></el-input>
                    </el-form-item>
                    <span>（订单所需人工取菜在这个数量摊位范围内不收取“人工打包费用”）</span>
                </div>
                <div class="flexStart inputBox">
                    <el-form-item label="每超过">
                        <div class="flexCenter minBox">
                            <el-input type="number" min='0'></el-input>
                            <p>个摊位，收取￥</p>
                            <el-input type="number" min='0'></el-input>
                        </div>
                    </el-form-item>
                    <span>人工打包费用</span>
                </div>

            </el-form>
        </div>
        <el-button class="searchBtn" @click="saveDataFn">确定</el-button>

    </div>
</div>
</template>

<script>
import {
    getData,
    saveData
} from '../../../api/sales/distribute'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            saleData: {},
            distribute: {
                fullPrice: 0,
                used: false
            }

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
        getDataFn() {
            getData().then(res => {
                if (res.code == '00') {
                    this.distribute = res.data;
                }
            })
        },
        saveDataFn() {
            let that = this;
            saveData(this.distribute).then(res => {
                if (res.code == '00') {
                    this.$message({
                        showClose: true,
                        message: '保存成功',
                        duration: 1000,
                        type: 'success',
                        computed: () => {
                            that.$router.go(-1)
                        }
                    })
                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getDataFn();
        this.getState()
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
.content {
    .el-form-item {
        margin-bottom: 0;
        margin-right: 0;
    }

    padding: 56px 0;

    .icon {
        width: 100px;
        height: 100px;
        margin-bottom: 30px;
    }

    .title {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        color: #00B0F0;
    }

    .tips {
        max-width: 379px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #7E7E7E;
        line-height: 18px;
        text-align: center;
    }

    .formBox {
        margin-bottom: 50px;
        margin-top: 30px;

        /deep/ .el-form-item {
            &.firstSwitch {
                // margin-right: 88px;
            }

        }
    }

    .inputBox {

        margin-top: 20px;
        position: relative;
        margin-left: -75px;

        span {
            line-height: 30px;
            position: absolute;
            left: 320px;
            word-break: keep-all;
            font-size: 12px;
            width: 400px;
        }

        /deep/ .el-input__inner {
            width: 200px;
            height: 30px;
            background: #F4F4F4;
            border: 1px solid #E8E8E8;
            border-radius: 30px;

        }

        .minBox {
            p {
                font-size: 12px;
            }

            /deep/ .el-input {
                width: 60px;
            }

            /deep/ .el-input__inner {
                width: 100%;
            }

        }

        /deep/ .el-form-item__label {
            line-height: 30px;
            text-align: right;
        }
    }
}

.searchBtn {
    width: 150px;
    height: 50px;
    background: #00B0F0;
    border-radius: 30px;
    font-size: 20px;
    margin-left: 18px;
}
</style>
