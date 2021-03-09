<!--  -->
<template>
<div class='store'>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/fenxiao.png" class="icon" alt="">
                <div class="textBox">
                    <h2>储值卡管理设置</h2>
                    <p>本模块可以设置储值卡的种类、金额</p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="储值卡模块总开关">
                        <el-switch size="large" active-color="#00B0F0" inactive-color="#aaaaaa">
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
                        <p class="dataTitle">总售出张数</p>
                        <p class="num">{{storeData.total}}</p>
                    </div>
                    <div class="eachData1">
                        <p class="dataTitle">总售出金额</p>
                        <p class="num">￥{{storeData.totalPrice}}</p>
                    </div>
                    <div class="eachData">
                        <p class="dataTitle">已使用金额</p>
                        <p class="num">￥{{storeData.usedPrice}}</p>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <!-- 卡列表 -->
    <div class="cardListBox">
        <el-row :gutter="20">

            <el-col :span="8" v-for="(i, j) in cardList" :key="j">
                <el-card :body-style="{ padding: '32px 28px 39px' }" shadow="hover">
                    <div class="eachCard">
                        <div class="flexSpace">
                            <p class="cardName">储值卡{{j+1}}</p>
                            <div class="btns flexEnd">
                                <i class="editIcon el-icon-edit-outline" @click="val=>editCardFn(val,i)"></i>
                                <i class="el-icon-delete deleteIcon" @click="val=>showDeleteFn(val,i.id)"></i>
                            </div>
                        </div>
                        <div class="content">
                            <img class="cardBg" :src="$imgurl+i.imgurl">
                            <p class="value">{{i.denomination}}元</p>
                            <p class="amount">￥{{i.price}}</p>
                        </div>

                    </div>
                </el-card>
            </el-col>
            <!-- 添加按钮 -->
            <el-col :span="8">
                <el-card shadow="hover" class="addElCard" :body-style="{borderRadius:'0',padding:'70px 30px 40px'}">
                    <div class="bgGray addCard flexCenter flexColumn" @click="edtiCardVisible=true">
                        <p class="addIcon">
                            <i class="el-icon-plus" size="50"></i>
                        </p>
                        <p class="addTips">添加新卡</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>

    <el-dialog :visible.sync="edtiCardVisible" title="创建储值卡" width="887px">
        <div class="editBox">
            <el-form ref="form" :model="cardForm" label-width="80px">
                <el-form-item label="面额￥">
                    <el-input v-model="cardForm.denomination"></el-input>
                </el-form-item>
                <el-form-item label="售价￥">
                    <el-input v-model="cardForm.price"></el-input>
                </el-form-item>
                <el-form-item label="封面">
                    <el-radio-group v-model="cardForm.imgurl">
                        <el-row :gutter="30">
                            <el-col :span="6" v-for="(i,j) in cardBgList" :key="j">
                                <el-radio :label="i.imgurl" :value="i.imgurl">
                                    <img :src="$imgurl+i.imgurl" alt="">
                                </el-radio>
                            </el-col>
                        </el-row>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div class="flexStart flexStart btnBox">
                <el-button class="btn searchBtn" @click="saveDataFn">保存</el-button>
                <el-button class="btn transBtn" @click="ruleVisible=false">取消</el-button>
            </div>
        </div>
    </el-dialog>

    <!-- 删除的提示框 -->
    <el-dialog title="提示" center :visible.sync="deleteCardVisible" width="30%">
        <span class="flexCenter">是否删除此储蓄卡</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteCardVisible = false">取 消</el-button>
            <el-button type="primary" @click="deleteCardFn">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    getData,
    saveData,
    getTotal,
    getBg,
    deleteCard,
    saveEditData
} from '../../../api/sales/store'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            deleteCardVisible: false,
            edtiCardVisible: false,
            targetId: '',
            storeData: {},
            cardList: [],
            cardForm: {
                imgurl: ''
            },
            cardBgList: [],
            storeData: {
                total: 0,
                totalPrice: 0,
                usedPrice: 0
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDataFn() {
            getData({}).then(res => {
                if (res.code == '00') {
                    this.cardList = res.data;
                }
            })
        },
        // 统计数据
        getTotalFn() {
            getTotal({}).then(res => {
                if (res.code == '00') {
                    this.storeData = res.data;
                }
            })
        },
        // 卡背景列表
        getBgFn() {
            getBg({}).then(res => {
                if (res.code == '00') {
                    this.cardBgList = res.data;
                }
            })
        },
        showDeleteFn(val, id) {
            this.deleteCardVisible = true;
            this.targetId = id;

        },
        // 修改
        editCardFn(val, item) {
            this.edtiCardVisible = true;
            this.tergetId = item.id;
            this.cardForm = item;
        },
        // 删除
        deleteCardFn() {
            let that = this;
            deleteCard(this.targetId).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })

                }
                  that.getDataFn();
                that.deleteCardVisible = false
            })
          
        },
        // 保存
        saveDataFn() {
            let that = this;
            let id = this.cardForm.id || false;
            let json = {};
            if (this.cardForm.id) {
                json.id = this.cardForm.id;
            }
            json.denomination = this.cardForm.denomination
            json.price = this.cardForm.price;
            json.imgurl = this.cardForm.imgurl;

            if (id) { // 修改
                saveEditData(id, json).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '修改成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                    }
                     that.getDataFn();
                    that.edtiCardVisible = false
                })
            } else { // 添加
                saveData(this.cardForm).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '保存成功',
                            duration:  1000,
                            type: 'success'
                        })
                    }
                    that.getDataFn();
                    that.edtiCardVisible = false

                })
            }

        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getDataFn();
        this.getTotalFn();
        this.getBgFn()
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

.cardListBox {

    margin-top: 20px;

    .eachCard {
        .cardName {
            color: #393939;
            font-size: 20px;
        }

        .editIcon {
            color: #00B0F0;
            font-size: 22px;
            font-weight: bold;
            margin-right: 36px;
        }

        .deleteIcon {
            color: #FF5B5B;
            font-size: 22px;
            font-weight: bold;
        }

        .content {
            position: relative;
            margin-top: 16px;
            border: 1px solid #D4D4D4;
            border-radius: 10px;
            height: 213px;

            .value {
                color: #fff;
                font-size: 46px;
                z-index: 9;
                position: absolute;
                top: 41px;
                left: 29px;

            }

            .amount {
                color: #00B0F0;
                font-size: 22px;
                padding: 15px 35px;
                background-color: #fff;
                border-radius: 25px;
                z-index: 9;
                position: absolute;
                top: 130px;
                left: 29px;
            }

            .cardBg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 213px;
                border-radius: 10px;
            }
        }

    }

    .addElCard {
        box-sizing: border-box;

        .bgGray {
            height: 213px;
            background: #F4F4F4;
            border: 1px solid #C7C7C7;
            border-radius: 10px;
        }

        .addTips {
            font-size: 12px;
            margin-top: 25px;
            color: #2A3F54;
        }

        .addIcon {
            i {
                font-size: 50px;
            }
        }

    }
}

.editBox {
    .el-input {
        width: 148px;
    }

    /deep/ .el-form-item__label {
        line-height: 30px;
    }

    .el-radio {
        height: 105px;
        margin-bottom: 36px;
        position: relative;
    }

    /deep/ .el-radio__input {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -8px;
    }

    .btnBox {
        .btn {
            width: 263px;

            &.transBtn {
                margin-left: 34px;
            }
        }
    }
}
</style>
