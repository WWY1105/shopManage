<!--  -->
<template>
<div class='fullReductionDiscount'>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/manjian.png" class="icon" alt="">
                <div class="textBox">
                    <h2>满减优惠规则设置</h2>
                    <p>除预售定金外，该规则适用于全部商品、订单<br>
                        在商品管理中勾选满减优惠即可
                    </p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="满减优惠模块开关">
                        <el-switch @change="saveSaleDataFn" size="large" v-model="saleData.mjyh" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right flexStart">
            <div class="databox">
                <p class="title">数据汇总</p>
                <div class="flexStart">
                    <div class="eachData1">
                        <p class="dataTitle">优惠金额
                            <span class="dateTimePicker">全部日期</span>
                        </p>
                        <p class="num">{{discountData.total}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <p class="partTitle">优惠设定（最多3种）</p>

    <!-- 优惠列表 -->
    <div class="discountListBox bgf">
        <div class="flexStart">
            <el-card v-for="(i, j) in discountList" :key="j" :body-style="{ padding:0}" shadow="hover">
                <div class="eachDis">
                    <p class="name">{{'优惠规则'+(j-0+1)}}</p>
                    <div class="details">
                        <p>条件：满{{i.fullPrice}}元</p>
                        <p>优惠：减{{i.discountPrice}}元</p>
                    </div>
                    <div class="btns flexStart">
                        <i class="editIcon el-icon-edit-outline" @click="val=>editFn(val,i)"></i>
                        <i class="el-icon-delete deleteIcon" @click="val=>showDeleteFn(val,i.id)"></i>
                    </div>
                </div>
            </el-card>
            <el-card v-if="discountList.length<3" shadow="hover" class="addDis  flexCenter flexColumn" :body-style="{ padding:0}">
                <div @click="edtiDisVisible=true">
                    <i class="el-icon-plus addIcon" size="100"></i>
                    <p class="addTips">设置优惠</p>
                </div>
            </el-card>
        </div>
    </div>

    <el-dialog title="创建满减规则：" center :visible.sync="edtiDisVisible" width="600px" class="prizeDialog">
        <div class="dialogContent ">
            <el-form :inline="true" :label-position="posi" label-width="80px" :model="editJson">
                <div class="flexCenter flexColumn">
                    <el-form-item label="消费满">
                        <el-input v-model="editJson.fullPrice"></el-input>
                    </el-form-item>

                    <el-form-item label="优惠">
                        <el-input v-model="editJson.discountPrice"></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer flexCenter">
                <el-button class="btn cancelBtn transBtn" @click="edtiDisVisible = false">取 消</el-button>
                <el-button class="searchBtn btn" type="primary" @click="saveDataFn">确 定</el-button>
            </span>
        </div>

    </el-dialog>
</div>
</template>

<script>
import {
    getData,
    deleteData,
    updateData,
    saveData
} from '../../../api/sales/fullReductionDiscount'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            saleData: {},
            tergetId: false,
            posi: 'left',
            edtiDisVisible: false,
            editJson: {},
            discountData: {},
            discountList: []
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
        getDataFn() {
            getData({}).then(res => {
                if (res.code == '00') {
                    this.discountList = res.data;
                }
            })
        },
        // 修改
        editFn(val, item) {
            this.edtiDisVisible = true;
            this.tergetId = item.id;
            this.editJson = item;
        },
        // 删除
        showDeleteFn(val, id) {
            let that = this;
            deleteData(id).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })

                }
                that.getDataFn();
                that.edtiDisVisible = false
            })
        },
        // 保存
        saveDataFn() {
            let that = this;
            let json = {};
            if (this.tergetId) {
                json.type = this.editJson.type;
                json.val = this.editJson.val;
                json.prizeRate = this.editJson.prizeRate;
                json.prizeSize = this.editJson.prizeSize;
                updateData(json, this.tergetId).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '修改成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                        that.getDataFn();
                        that.edtiDisVisible = false;
                        this.editJson = {}
                    }

                })
            } else {
                saveData(this.editJson).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '保存成功',
                            duration: 1000,
                            type: 'success'
                        })
                        that.getDataFn();
                        that.edtiDisVisible = false;
                        this.editJson = {}
                    }

                })
            }

        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getState()
        this.getDataFn()
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

.discountListBox {
    padding: 68px;

    .addDis {
        /deep/ .el-card__body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
    }

    .addIcon {
        font-size: 50px;
    }

    .addTips {
        margin-top: 25px;
        font-size: 12px;
        font-weight: 400;
        color: #2A3F54;
    }

    .el-card {
        background-color: unset;
        border: none;
        border-radius: 10px;
        width: 210px;
        height: 210px;
        padding: 23px 33px;
        background: #F4F4F4;
        box-sizing: border-box;
        margin-right: 40px;
        display: inline-block;
    }

    .eachDis {
        .name {
            margin-bottom: 35px;
            font-size: 20px;
            font-weight: 400;
            color: #00B0F0;
            line-height: 11px;
        }

        .details {

            font-size: 12px;
            font-weight: 400;
            color: #555555;
            line-height: 11px;

            p {
                margin-bottom: 14px;
            }
        }

        .btns {
            margin-top: 30px;
            font-size: 22px;
            font-weight: bold;
            color: #FF5B5B;

            .editIcon {
                margin-right: 36px;
                color: #00B0F0;
            }
        }
    }
}

/deep/.el-form-item__label {
    line-height: 40px;
}

.dialog-footer {
    margin-top: 60px;
}
</style>
