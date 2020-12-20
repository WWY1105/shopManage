<!--  -->
<template>
<div class="coupon">
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="18">
                    <el-row :gutter="20" type="flex" justify="start" align="bottom">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="同行优惠模块开关">
                                    <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                                    </el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-form-item label="同行优惠规则：">
                                <el-button class="searchBtn" @click="ruleVisible=true">
                                   {{rule&&rule.personCount?rule.personCount+'人同行'+rule.freeCount+'免单':'点击输入同行优惠规则'}} 
                                    <i class="el-icon-edit-outline"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row :gutter="20" type="flex" justify="end" align="bottom">
                        <div class="grid-content bg-purple">
                            <el-form-item>
                                <el-button class="searchBtn" @click="showAddCoupon">+新增</el-button>
                            </el-form-item>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="显示">
                            <el-select v-model="json.shelf" placeholder="显示">
                                <el-option label="是" value="true"></el-option>
                                <el-option label="否" value="false"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="id">
                            <el-input v-model="json.id" placeholder="ID"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="商品名称">
                            <el-input v-model="json.name" placeholder="商品名称"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="是否上架">
                            <el-select v-model="json.shelf" placeholder="是否上架">
                                <el-option label="是" value="true"></el-option>
                                <el-option label="否" value="false"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="一级分类">
                            <el-select @change="categoriesChange" v-model="json.categoryId" placeholder="一级分类">
                                <el-option :label="item.name" :value="item.id" v-for="(item,index) in categories" :key="index"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="二级分类">
                            <el-select v-model="json.categoryId2" placeholder="二级分类">
                                <el-option v-for="(i,j) in categories2" :value="i.id" :key="j" :label="i.name"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple flexEnd">
                        <el-form-item>
                            <el-button type="primary" @click="getList">查询</el-button>
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
            <el-table-column prop="name" label="主图">
            </el-table-column>
            <el-table-column prop="price" label="商品名称"></el-table-column>
            <el-table-column prop="fullPrice" label="规格"></el-table-column>
            <el-table-column prop="？？？" label="分类"> </el-table-column>
            <el-table-column prop="expireDate" label="原价"> </el-table-column>
            <el-table-column prop="totalCount" label="总库存"> </el-table-column>
            <el-table-column prop="getCount" label="单位"> </el-table-column>
            <el-table-column prop="？？？" label="运费 "> </el-table-column>
            <el-table-column prop="usedCount" label="上下架">
                <template slot-scope="scope">
                    <p>{{scope.row.self?'可以':'不可以'}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" label="排序"> </el-table-column>
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
    </div>

    <el-dialog title="同行优惠规则：" center :visible.sync="ruleVisible" class="ruleDialog">
        <div class="dialogContent">
            <div class="eachRule flexCenter">
                <el-input v-model="rule.personCount"></el-input>人同行<el-input v-model="rule.freeCount"></el-input>免单
            </div>
        </div>
        <span slot="footer" class="dialog-footer flexCenter flexColumn">
            <el-button type="primary" @click="submitRuleFn">确 定</el-button>
            <el-button @click="ruleVisible = false">取 消</el-button>
        </span>
    </el-dialog>

    <!-- 创建优惠券： -->
    <el-dialog title="创建优惠券：" center :visible.sync="addRuleVisible" class="couponDialog">
        <div class="dialogContent">
            <el-form :inline="true" :label-position="labelPosition" label-width="140px" :model="newDiscount">
                <el-form-item label="优惠券名称：">
                    <el-input v-model="newDiscount.name"></el-input>
                </el-form-item>
                <el-form-item label="优惠券面额：">
                    <el-input v-model="newDiscount.price"></el-input>
                </el-form-item>
                <el-form-item label="满足使用金额：">
                    <el-input v-model="newDiscount.fullPrice"></el-input>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>类型限制：</p>
                        <p class="labelTips">不设置分类代表全场通用</p>
                    </div>
                    <div class=" flexColumn flexStart alignStart">
                        <div class="categorySelect categorySelect1">
                            <el-select @change="categoriesChange" v-model="newDiscount.categoryId1" placeholder="一级分类">
                                <el-option v-for="(i,j) in categories" :value="i.id" :key="j" :label="i.name"></el-option>
                            </el-select>
                        </div>
                        <div class="categorySelect">
                            <el-select v-model="newDiscount.categoryId2" placeholder="二级分类">
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
                    <el-input v-model="newDiscount.totalCount"></el-input>
                </el-form-item>
                <el-form-item>
                    <div slot="label">
                        <p>有效期：</p>
                        <p class="labelTips">
                            不设置代表无限
                        </p>
                    </div>
                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="newDiscount.expireDate" type="datetime" placeholder="有效期">
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
                    <el-select v-model="newDiscount.shelf" placeholder="能否领取">
                        <el-option label="是" value="true"></el-option>
                        <el-option label="否" value="false"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
        <span slot="footer" class="dialog-footer flexCenter flexColumn">
            <el-button type="primary" @click="addCoupon">确 定</el-button>
            <el-button @click="addRuleVisible = false">取 消</el-button>
        </span>
    </el-dialog>

    <!-- 删除的提示框 -->
    <el-dialog title="提示" center :visible.sync="deleteDiscountVisible" width="30%">
        <span class="flexCenter">是否删除优惠券</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteDiscountVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmDelete">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    listPage,
    getRule,
    submitRule,
    goodCategory
} from '../../../api/sales/togetherDiscount'
export default {
    components: {},
    data() {
        return {
            deleteDiscountVisible: false,
            deleteDiscountId: '',
            labelPosition: 'left',
            newDiscount: {},
            value: false,
            addRuleVisible: false,
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
            rule: false
        };
    },
    computed: {},
    watch: {},
    methods: {

        // 获取列表
        getList() {
            let that = this;
            listPage(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        },

        // 同行优惠规则
        getRuleFn() {
            let that = this;
            getRule({}).then(res => {
                if (res.code == '00') {
                    that.rule = res.data;
                }
            })
        },
        // 提交赠送规则
        submitRuleFn() {
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
            this.addRuleVisible = true;
            goodCategory({}).then(res => {
                if (res.code == '00') {
                    this.categories = res.data;
                }
            })
        },
        // 添加券
        addCoupon() {
            console.log(this.newDiscount)
            let that = this;
            if (this.newDiscount.id) {
                let id = this.newDiscount.id;
                delete this.newDiscount.id;
                delete this.newDiscount.businessId;
                editCoupone(this.newDiscount, id).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '修改成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })

                    }
                })
            } else {
                submitCoupone(this.newDiscount).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '添加成功',
                            duration: 3 * 1000,
                            type: 'success'
                        })
                    }
                })
            }
            this.addRuleVisible = false;
            this.getList();
            this.newDiscount = {}

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
            this.addRuleVisible = true;
            this.newDiscount = this.tableData[index];

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
        // this.getList();
        this.getRuleFn()
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
    font-size: 16px;
}

.searchBox {
    padding: 28px 33px;
}

.tableBox {
    padding: 0 33px 30px;
}

.dialogContent {
    .eachRule {
        margin-bottom: 43px;
    }

    .el-input,
    .el-select {
        max-width: 100px;
        margin-right: 15px;
        margin-left: 45px;
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
    font-size: 14px;
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
