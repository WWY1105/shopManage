<!--  -->
<template>
<div class="coupon">
    <div class="totalPanel">
        <p class="title flexStart"><span>数据汇总：</span>
        </p>
        <div class="panelBox flexStart">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">{{i.num}}</p>
            </div>
        </div>
    </div>
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="18">
                    <el-row :gutter="20" type="flex" justify="start" align="bottom">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="优惠券模块开关">
                                    <el-switch @change="saveDataFn" size="large" v-model="saleData.yhq" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-form-item label="自动赠送规则：">
                                <el-button class="searchBtn" @click="getRule">
                                    点击输入自动赠送规则
                                    <i class="el-icon-edit-outline"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <!-- <el-row :gutter="20" type="flex" justify="end" align="bottom"> -->
                        <div class="flexEnd">
                            <el-form-item>
                                 <div class="flexEnd">
                                <el-button class="searchBtn" @click="showAddCoupon">+新增</el-button>
                                 </div>
                            </el-form-item>
                        </div>
                    <!-- </el-row> -->
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="id">
                            <el-input v-model="json.id" placeholder="id"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="优惠券名称">
                            <el-input v-model="json.name" placeholder="优惠券名称"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="优惠券面额">
                            <el-input v-model="json.price" placeholder="优惠券面额"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="能否领取">
                            <el-select v-model="json.shelf" placeholder="能否领取">
                                <el-option label="是" value="true"></el-option>
                                <el-option label="否" value="false"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="4">
                    <div class="flexEnd">
                        <el-form-item>
                             <div class="flexEnd">
                            <el-button type="primary" class="searchBtn" @click="getList">查询</el-button>
                             </div>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>

        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="id">
            </el-table-column>
            <el-table-column prop="name" label="优惠券名称">
            </el-table-column>
            <el-table-column prop="price" label="优惠券面额"></el-table-column>
            <el-table-column prop="fullPrice" label="满足使用金额"></el-table-column>
            <el-table-column prop="？？？" label="类型限制"> </el-table-column>
            <el-table-column prop="expireDate" label="有效期致"> </el-table-column>
            <el-table-column prop="totalCount" label="总数量"> </el-table-column>
            <el-table-column prop="getCount" label="领取数量"> </el-table-column>
            <el-table-column prop="？？？" label="剩余可领 "> </el-table-column>
            <el-table-column prop="usedCount" label="使用数量"> </el-table-column>
            <el-table-column prop="createTime" label="创建时间"> </el-table-column>
            <el-table-column prop="type" label="能否领取">
                <template slot-scope="scope">
                    <p>{{scope.row.self?'可以':'不可以'}}</p>
                </template>
            </el-table-column>
            <el-table-column label="其他" width="150px">
                <template slot-scope="scope">
                    <div class="flexSpace otherCtr">
                        <p class="edit " @click="value=>editCouponFn(scope.$index,value)">修改</p>
                        <p class="give" @click="value=>giveCoupon(scope.row.id,value)">赠送</p>
                        <p class="delete" @click="value=>deleteCouponFn(scope.row.id,value)">删除</p>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexCenter">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>

    <el-dialog title="自动赠送规则：" center :visible.sync="ruleVisible" class="ruleDialog">
        <div class="dialogContent">
            <div class="eachRule flexSpace">
                <label for="">会员生日赠送：</label>
                <el-select v-model="rule.birthdayCouponId">
                    <el-option v-for="(i,j) in couponList" :value="i.id" :key="j" :label="i.name"></el-option>
                </el-select>
                <el-switch v-model="rule.birthdayUsed"></el-switch>
            </div>
            <div class="eachRule flexSpace">
                <label for="">新人登录赠送：</label>
                <el-select v-model="rule.newUserCouponId">
                    <el-option v-for="(i,j) in couponList" :value="i.id" :key="j" :label="i.name"></el-option>
                </el-select>
                <el-switch v-model="rule.newUserUsed"></el-switch>
            </div>

        </div>
        <span slot="footer" class="dialog-footer flexCenter flexColumn">
            <el-button type="primary" @click="submitRule">确 定</el-button>
            <el-button @click="ruleVisible = false">取 消</el-button>
        </span>
    </el-dialog>

    <!-- 创建优惠券： -->
    <el-dialog title="创建优惠券：" center :visible.sync="addCouponVisible" class="couponDialog">
        <div class="dialogContent">
            <el-form :inline="true" :label-position="labelPosition" label-width="140px" :model="newCoupon">
                <el-form-item label="优惠券名称：">
                    <el-input v-model="newCoupon.name"></el-input>
                </el-form-item>
                <el-form-item label="优惠券面额：">
                    <el-input v-model="newCoupon.price"></el-input>
                </el-form-item>
                <el-form-item label="满足使用金额：">
                    <el-input v-model="newCoupon.fullPrice"></el-input>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>类型限制：</p>
                        <p class="labelTips">不设置分类代表全场通用</p>
                    </div>
                    <div class=" flexColumn flexStart alignStart">
                        <div class="categorySelect categorySelect1">
                            <el-select @change="categoriesChange" v-model="newCoupon.categoryId1" placeholder="一级分类">
                                <el-option v-for="(i,j) in categories" :value="i.id" :key="j" :label="i.name"></el-option>
                            </el-select>
                        </div>
                        <div class="categorySelect">
                            <el-select v-model="newCoupon.categoryId2" placeholder="二级分类">
                                <el-option v-for="(i,j) in categories2" :value="i.id" :key="j" :label="i.name"></el-option>
                            </el-select>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>总数量：</p>
                        <p class="labelTips">输入0代表无限</p>
                    </div>
                    <el-input v-model="newCoupon.totalCount"></el-input>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>有效期：</p>
                        <p class="labelTips">
                            不设置代表无限
                        </p>
                    </div>
                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="newCoupon.expireDate" type="datetime" placeholder="有效期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>能否领取：</p>
                        <p class="labelTips">
                            能否在商品优惠
                            中领取使用
                        </p>
                    </div>
                    <el-select v-model="newCoupon.shelf" placeholder="能否领取">
                        <el-option label="是" value="true"></el-option>
                        <el-option label="否" value="false"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer flexCenter flexColumn">
            <el-button type="primary" @click="addCoupon">确 定</el-button>
            <el-button @click="addCouponVisible = false">取 消</el-button>
        </span>
    </el-dialog>
   

    <!-- 赠送弹窗 -->
    <el-dialog title="赠送优惠券：" :visible.sync="giveCouponVisible" class="giveCouponDialog">

    </el-dialog>
    <!-- 删除的提示框 -->
    <el-dialog title="提示" center :visible.sync="deleteCouponVisible" width="30%">
        <span class="flexCenter">是否删除优惠券</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteCouponVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmDelete">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    listPage,
    total,
    rule,
    list,
    submitRule,
    goodCategory,
    submitCoupone,
    deleteCoupon,
    editCoupone
} from '../../../api/sales/coupon'
export default {
    components: {},
    data() {
        return {
            saleData:{},
            giveCouponVisible:false,
            deleteCouponVisible: false,
            deleteCouponId: '',
            labelPosition: 'left',
            newCoupon: {},
            value: false,
            addCouponVisible: false,
            ruleVisible: false,
            panelDatas: [{
                name: '赠送张数',
                num: 0
            }, {
                name: '使用张数',
                num: 0
            }, {
                name: '赠送金额',
                num: 0
            }, {
                name: '使用金额',
                num: 0
            }],
            pageData: {},
            formInline: {},
            formInline1: {},
            tableData: [],
            couponList: [],
            categories: [],
            categories2: [], //子类型
            json: {
                pageNum: 1,
                pageSize: 30
            },
            rule: {
                birthdayCouponId: '',
                birthdayUsed: false,
                newUserCouponId: '',
                newUserUsed: false
            }
        };
    },
    computed: {},
    watch: {},
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
        // 获取列表
        getList() {
            let that = this;
            listPage(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        },
        // 数据总汇
        getTotal() {
            let that = this;
            total().then(res => {
                if (res.code == '00') {
                    this.panelDatas = [{
                        name: '赠送张数',
                        num: res.data.getCount
                    }, {
                        name: '使用张数',
                        num: res.data.usedCount
                    }, {
                        name: '赠送金额',
                        num: '￥' + res.data.price
                    }, {
                        name: '使用金额',
                        num: '￥' + res.data.usedPrice
                    }]

                }
            })
        },
        // 自动赠送规则
        getRule() {
            let that = this;
            this.ruleVisible = true;
            rule({}).then(res => {
                if (res.code == '00') {
                    that.rule = res.data;
                }
            })
            list({}).then(res => {
                if (res.code == '00') {
                    console.log('uuu')
                    console.log(res.data)
                    that.couponList = res.data;
                }
            })
        },
        // 提交赠送规则
        submitRule() {
            let that = this;
            delete this.rule.businessId;
            submitRule(this.rule).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '修改成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })

                    this.ruleVisible = false
                }
            })
        },
        showAddCoupon() {
            this.addCouponVisible = true;
            goodCategory({}).then(res => {
                if (res.code == '00') {
                    this.categories = res.data;
                }
            })
        },
        // 添加券
        addCoupon() {
            console.log(this.newCoupon)
            let that = this;
            if (this.newCoupon.id) {
                let id = this.newCoupon.id;
                delete this.newCoupon.id;
                delete this.newCoupon.businessId;
                editCoupone(this.newCoupon, id).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '修改成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                        this.getList();
                        this.addCouponVisible = false;
                        this.newCoupon = {}
                    }
                })
            } else {
                submitCoupone(this.newCoupon).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '添加成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                        this.getList();
                        this.addCouponVisible = false;
                        this.newCoupon = {}
                    }
                })
            }

        },
        // 一级分类改变获取二级分类
        categoriesChange(e) {
            console.log('改变');
            console.log(e)
            let id = e;
            this.categories.map(i => {
                if (i.id == id) {
                    this.categories2 = i.categories;
                }
            })
        },
        editCouponFn(index) {
            this.addCouponVisible = true;
            this.newCoupon = this.tableData[index];
            this.newCoupon.shelf = this.newCoupon.shelf + ''
        },
        giveCoupon() {},
        deleteCouponFn(id) {
            let that = this;
            this.deleteCouponVisible = true;
            this.deleteCouponId = id;
        },
        confirmDelete() {
            if (this.deleteCouponId) {
                deleteCoupon(this.deleteCouponId).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '删除成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })

                        this.getList()
                    }
                })
            }
        }

    },
    created() {
        this.getList();
        this.getTotal();
        this.getState()
    },
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.el-button.transBtn {
    padding: 11px 0;
    font-size: 14px;
}

.searchBox {
    padding: 28px 33px;
}

.tableBox {
    padding: 0 33px 30px;
}

.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;
    margin-bottom: 20px;

    .eachTotalBox {
        margin-right: 120px;
    }

    .title {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .eachTotalBox {
        .partTitle {
            font-size: 14px;
            margin-bottom: 16px;
        }

        .num {
            font-size: 20px;
            font-weight: bold;
        }
    }
}

.dialogContent {
    .eachRule {
        margin-bottom: 43px;
    }

    .el-input,
    .el-select {
        max-width: 220px;
    }
}

.ruleDialog,
.couponDialog {
    .dialog-footer {
        .el-button {
            margin-left: 0;
            margin-bottom: 35px;
            width: 263px;
            border-radius: 21px;
        }
    }

    /deep/ .el-form-item__label {
        line-height: 42px;
    }
}

.labelTips {
    color: #FF2727;
    font-size: 12px;
    line-height: 18px;
}

/deep/.el-form-item__label {
    line-height: 42px;
}

.categorySelect1 {
    margin-bottom: 35px;
}

.couponDialog .el-dialog {
    width: 40% !important;
}

.otherCtr {
    font-size: 12px;
    cursor: pointer;

    .edit,
    .give {
        color: #007EFF;
        text-decoration: underline;
    }

    .delete {
        color: #FF4141;
        text-decoration: underline;
    }
}
</style>
