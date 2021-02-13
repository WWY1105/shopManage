<!--  -->
<template>
<div class='lottery'>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/choujiang.png" class="icon" alt="">
                <div class="textBox">
                    <h2>抽奖管理设置</h2>
                    <p>本模块可以设置抽奖的用户群、频率及奖品设置</p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="抽奖模块开关">
                        <el-switch @change="saveSaleDataFn" size="large" v-model="saleData.cj" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right flexStart">
            <el-form label-position="top" type="flex" justify="flex-start" align="bottom">
                <el-row :gutter="80">
                    <el-col :span="12">
                        <el-form-item label="抽奖用户群设置">
                            <el-button class="searchBtn" @click="editDialogShow=true">
                                {{rule.userGroup?rule.userGroup:'点击设置抽奖用户群'}}
                                <i class="el-icon-edit-outline"></i>
                            </el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="抽奖频率设置">
                            <el-button class="searchBtn" @click="editDialogShow=true">
                                {{rule.prizeDraw?'每日抽奖'+rule.prizeDraw+'次':'点击设置抽奖频率'}}
                                <i class="el-icon-edit-outline"></i>
                            </el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>

        </div>

    </div>
    <div class="partTitle">活动说明???</div>
    <div class="explainBox bgf">
        <div class="contentBox flexSpace flexColumn">
            <p>
                加入会员，每日可抽奖一次。
                兑奖请关注微信公众号，发送“朋友圈分享截图＋手机号”，即可领取奖品。
                活动时间：2019-12-1至2020-02-01
                奖品统一到店领取；
                活动最终解释权归****所有。
            </p>
            <div class="btns flexStart">
                <i class="editIcon el-icon-edit-outline" @click="val=>showExplaindFn(val,i)"></i>
            </div>
        </div>
    </div>
    <div class="partTitle">奖品设定（最多8种奖品）</div>
    <div class="prizeBox bgf">
        <el-row :gutter="30" type="flex" justify="start">
            <el-col :xs="8" :sm="8" :md="8" :lg="6" :xl="4" v-for="(i,j) in prize" :key="j">
                <div class="eachPrize">
                    <p class="name">{{i.title}}</p>
                    <div class="details">
                        <p>奖品类型：{{i.type|typeFilter}}</p>
                        <p>中奖率：{{i.prizeRate}}</p>
                        <p>剩余数量：{{i.surplusSize}}</p>
                    </div>
                    <div class="btns flexStart">
                        <i class="editIcon el-icon-edit-outline" @click="val=>editCardFn(val,i)"></i>
                        <i class="el-icon-delete deleteIcon" @click="val=>showDeleteFn(val,i.id)"></i>
                    </div>
                </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :lg="6" :xl="4" v-if="prize.length<8">
                <div class="eachPrize addBtn flexCenter flexColumn" @click="addPrizeVisible=true">
                    <i class="el-icon-plus"></i>
                    <p>添加奖品</p>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="dataBox bgf">
        <div class="searchBox bgf">
            <el-form label-position="top">
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <el-form-item label="用户昵称">
                                <el-input v-model="json.nickname" placeholder="用户昵称"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <el-form-item label="用户ID">
                                <el-input v-model="json.user" placeholder="用户ID"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="4">
                        <div class="grid-content bg-purple">
                            <el-form-item label="邀请人ID">
                                <el-input v-model="json.inviterId" placeholder="邀请人ID"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="grid-content bg-purple">
                            <el-form-item label="注册时间段">
                                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.time" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple flexEnd">
                            <el-form-item>
                                <el-button type="primary" @click="getDataFn">查询</el-button>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>

            </el-form>
        </div>

        <div class="tableBox">
            <el-table stripe :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="id">
                </el-table-column>
                <el-table-column prop="createTime" label="中奖时间">
                </el-table-column>
                <el-table-column prop="nickname" label="中奖用户"></el-table-column>
                <el-table-column prop="uid" label="用户ID"></el-table-column>
                <el-table-column prop="title" label="中奖奖品"> </el-table-column>
            </el-table>
        </div>
    </div>
    <!-- 删除的提示框 -->
    <el-dialog title="提示" center :visible.sync="deletePrizeVisible" width="30%">
        <span class="flexCenter">是否删除此奖品</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deletePrizeVisible = false">取 消</el-button>
            <el-button type="primary" @click="deletePrizeFn">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 编辑奖品 -->
    <el-dialog title="创建优惠券：" center :visible.sync="addPrizeVisible" width="600px" class="prizeDialog">
        <div class="dialogContent">
            <el-form :inline="true" :label-position="labelPosition" label-width="140px" :model="editJson">
                <div class="flexCenter flexColumn">
                    <el-form-item label="奖品类型：">
                        <el-select v-model="editJson.type">
                            <el-option v-for="(i,j) in prizeTypeList" :lable="i.text" :key="j" :value="i.value">{{i.text}}</el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="editJson.type|typeFilter">
                        <el-select v-if="editJson.type=='yhq'" v-model="editJson.val">
                            <el-option v-for="(i,j) in couponList" :lable="i.name" :key="j" :value="i.id">{{i.name}}</el-option>
                        </el-select>
                        <el-input v-else v-model="editJson.val"></el-input>
                    </el-form-item>
                    <el-form-item label="中奖率">
                        <el-input v-model="editJson.prizeRate"></el-input>
                        <span>%</span>
                    </el-form-item>
                    <el-form-item label="奖品数量">
                        <el-input v-model="editJson.prizeSize"></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer flexCenter flexColumn">
                <el-button class="searchBtn btn" type="primary" @click="saveDataFn">确 定</el-button>
                <el-button class="btn cancelBtn transBtn" @click="addPrizeVisible = false">取 消</el-button>
            </span>
        </div>

    </el-dialog>
    <!-- 抽奖规则 -->
    <el-dialog title="抽奖规则 " center :visible.sync="editDialogShow" width="600px" class="prizeDialog">
        <div class="dialogContent ">
            <el-form label-width="100px" label-position="left" :inline="true" >
                <el-form-item label="用户群">
                    <el-select v-model="editRule.userGroup" placeholder="用户群">
                        <el-option v-for="(i,j) in groupList" :value="i.value" :label="i.text" :key="j"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="抽奖频率">
                    <el-input v-model="editRule.prizeDraw" type="number"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer flexCenter flexColumn">
                <el-button class="searchBtn btn" type="primary" @click="saveRuleFn">确 定</el-button>
                <el-button class="btn cancelBtn transBtn" @click="editDialogShow = false">取 消</el-button>
            </span>
        </div>
    </el-dialog>
    <!-- 活动说明 -->
    <el-dialog title="活动说明 " center :visible.sync="showExplaind" width="600px" class="prizeDialog">
        <div class="dialogContent ">
            <el-input type="textarea" rows="10"></el-input>
            <span slot="footer" class="dialog-footer flexCenter flexColumn">
                <el-button class="searchBtn btn" type="primary" @click="saveRuleFn">确 定</el-button>
                <el-button class="btn cancelBtn transBtn" @click="editDialogShow = false">取 消</el-button>
            </span>
        </div>

    </el-dialog>
</div>
</template>

<script>
import {
    getData,
    getRule,
    saveData,
    saveRule,
    updateData,
    deleteData,
    getPrize,
    getCouponList
} from '../../../api/sales/lottery';
import {
    customType
} from '../../../utils/jsons'
let that;
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            editRule: {},
            groupList: customType,
            editDialogShow: false,
            labelPosition: 'left',
            addPrizeVisible: false,
            tergetId: false,
            editJson: {
                type: 'yhq'
            },
            deletePrizeVisible: false,
            tableData: [],
            // jf-积分,yhq-优惠券,sw-实物,md-免单
            prizeTypeList: [{
                    text: '积分',
                    value: 'jf'
                },
                {
                    text: '优惠券',
                    value: 'yhq'
                },
                {
                    text: '实物',
                    value: 'sw'
                },
                {
                    text: '免单',
                    value: 'md'
                }
            ],
            json: {
                pageNum: 1,
                pageSize: 30
            },
            prize: {},
            rule: {},
            couponList: [],
            showExplaind: false
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        showExplaindFn() {
            this.showExplaind = true;
        },
        editExplaindFn() {

        },
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
        getDataFn() {
            let that = this;
            if (that.json.time && that.json.time.length > 0) {
                that.json.beginTime = that.json.time[0]
                that.json.endTime = that.json.time[1]
            }
            delete that.json.time;
            getData(this.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data
                }
            })
        },
        getPrizeFn() {
            getPrize(this.json).then(res => {
                if (res.code == '00') {
                    this.prize = res.data
                }
            })
        },
        getRuleFn() {
            getRule(this.json).then(res => {
                if (res.code == '00') {
                    this.rule = res.data
                }
            })
        },
        getCouponFn() {
            getCouponList({}).then(res => {
                if (res.code == '00') {
                    console.log('uuu')
                    console.log(res.data)
                    that.couponList = res.data;
                }
            })
        },
        saveDataFn() {
            let that = this;
            console.log(this.editJson);
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
                        that.getPrizeFn();
                        that.addPrizeVisible = false;
                        this.editJson = {}
                    }

                })
            } else {
                saveData(this.editJson).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '保存成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                        that.getPrizeFn();
                        that.addPrizeVisible = false;
                        this.editJson = {}
                    }

                })
            }

        },
        // 修改
        editCardFn(val, item) {
            this.addPrizeVisible = true;
            this.tergetId = item.id;
            this.editJson = item;
        },
        // 删除
        deletePrizeFn() {
            let that = this;
            deleteData(this.targetId).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                }
                that.getPrizeFn();
                that.deletePrizeVisible = false
            })

        },
        // 删除奖品
        showDeleteFn(val, id) {
            this.deletePrizeVisible = true;
            this.targetId = id;
        },
        // 保存抽奖规则
        saveRuleFn() {
            let that = this;
            saveRule(this.editRule).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.editDialogShow = false;
                    that.getRuleFn()

                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getState()
        this.getDataFn();
        this.getRuleFn();
        this.getPrizeFn();
        this.getCouponFn()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    filters: {
        typeFilter(val) {
            let typeText = ''
            that.prizeTypeList.map(i => {
                if (i.value == val) {
                    typeText = i.text
                }
            });
            return typeText;
        }
    },
    beforeCreate() {
        that = this;
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
//@import url(); 引入公共css类
.part1 {
    padding: 39px 67px;

    border: 1px solid #C7C7C7;

    .left {
        width: 50%;

        .el-form-item {
            margin: 0;
        }
    }

    .right {
        flex: 1;
        padding-left: 80px;

        /deep/ .el-form {
            width: 100%;

            .el-form-item {
                margin-left: 5%;
                margin-bottom: 0;
            }
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

.dataBox {
    border: 1px solid #C7C7C7;
    margin-top: 20px;
    padding: 36px 34px;
}

.explainBox {
    padding: 52px 68px;
    .contentBox {
        align-items: flex-start;
        width: 856px;
        height: 210px;
        background: #F4F4F4;
        border-radius: 10px;
        padding:23px 30px;
        box-sizing: border-box;
        p{
            line-height: 22px;
        }
    }
     .btns {
            font-size: 22px;
            font-weight: bold;
            color: #FF5B5B;

            .editIcon {
                margin-right: 36px;
                color: #00B0F0;
            }
        }
}

.prizeBox {
    padding: 52px 68px;

    .eachPrize {
        padding: 23px 34px;
        background: #F4F4F4;
        border-radius: 10px;
        min-width: 210px;
        box-sizing: border-box;
        max-height: 210px;

        &.addBtn {
            min-height: 210px;

            p {
                color: #2A3F54;
                font-size: 12px;
                margin-top: 25px;
            }

            i {
                color: #000000;
                font-size: 50px;
            }
        }

        .name {
            color: #00B0F0;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 28px;
        }

        .details {
            color: #555555;
            font-size: 12px;
            margin-bottom: 35px;

            p {
                line-height: 22px;
            }
        }

        .btns {
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

.dialogContent {
    /deep/ .el-form-item__content {
        width: 240px;
    }

    /deep/ .el-form-item__label {
        line-height: 42px;
    }

    /deep/ .el-select {
        width: 220px;
    }

    /deep/ .el-input {
        width: 220px;
    }

    .dialog-footer {
        margin-top: 90px;

        /deep/ .el-button {
            width: 263px;
            margin-left: 0;
        }

        .el-button {
            width: 263px;
            margin-left: 0;

            &.cancelBtn {
                margin-top: 35px;
            }
        }
    }
}
</style>
