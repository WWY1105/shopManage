<!--  -->
<template>
<div class="coupon">
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="18">
                    <el-row :gutter="20" type="flex" justify="start" align="center">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="同行优惠模块开关">
                                    <el-switch @change="saveDataFn" size="large" v-model="saleData.txyh" active-color="#00B0F0" inactive-color="#aaaaaa">
                                    </el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="同行优惠规则：">
                                <el-button class="searchBtn" @click="ruleVisible=true">
                                    {{rule&&rule.personCount?rule.personCount+'人同行'+rule.freeCount+'免单':'点击输入同行优惠规则'}}
                                    <i class="el-icon-edit-outline"></i>
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="flexStart">
                            <!-- <el-form-item> -->
                                <p class="dangerTips"> 本模块仅包含同行优惠商品，全部商品请至商品管理模块查看</p>
                            <!-- </el-form-item> -->
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row :gutter="20" type="flex" justify="end" align="bottom">
                        <router-link :to="{name:'addGoods'}" class="grid-content bg-purple">
                            <el-form-item>
                                <el-button class="searchBtn">+新增</el-button>
                            </el-form-item>
                        </router-link>
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
                            <el-button type="primary"  class="searchBtn" @click="getList">查询</el-button>
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
            <el-table-column prop="createTime" label="排序">
                <div class="flexCenter sortBox">
                    <i class="el-icon-arrow-up" @click="val=>toUporDown(val,scope.row.id,'sy')"></i>
                    <i class="el-icon-arrow-down" @click="val=>toUporDown(val,scope.row.id,'xy')"></i>
                </div>
            </el-table-column>
            <el-table-column label="其他" width="150px">
                <template slot-scope="scope">
                    <div class="controlBox flexCenter">
                        <router-link class="editBtn" :to="{path:'/goods/editGoods',query:{id:scope.row.id}}">
                            编辑
                        </router-link>
                        <div class="deleteBtn" @click="val=>{showDeleteDialog(val,scope.row.id)}">删除</div>
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

    <!-- 删除的确认弹窗 -->
    <deleteDialog title="确定删除此商品?" :deleteVisible="deleteVisible" />
</div>
</template>

<script>
import {
    getRule,
    submitRule
} from '../../../api/sales/togetherDiscount'
import deleteDialog from '../../../components/deleteDialig'
import {
    list,
    getCategory,
    deleteData,
    setShelf,
    upOrDown
} from '../../../api/goods/index.js';
import {isEmpty} from '../../../utils/common'
export default {
    components: {
        deleteDialog
    },
    data() {
        return {
            targetId: '',
            deleteVisible: false, //确认删除的弹窗
            saleData: {},
            value: false,
            addRuleVisible: false,
            ruleVisible: false,
            tableData: [],
            categories: [],
            categories2: [], //子类型
            json: {
                sellType: 'yhtx',
                pageNum: 1,
                pageSize: 30
            },
            rule: false
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 删除的弹窗
        showDeleteDialog(val, id) {
            this.deleteVisible = true;
            this.targetId = id;
            //console.log(val)
        },
        // 下线
        setShelfFn(val, id, shelf) {

            setShelf(id, {
                shelf
            }).then(res => {
                if (res.code == '00') {
                    that.getList()
                }
            })
        },
        confirmDelete() {
            let that = this;
            deleteData(this.targetId).then(res => {
                if (res.code == '00') {
                    that.deleteVisible = false;
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 2 * 1000,
                        type: 'success'
                    })
                    that.getList()
                }
            })
        },
        //    模块开关-----start
        saveDataFn() {
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
        // 上移或者下移
        toUporDown(val, id, type) {
            let that = this;
            upOrDown(id, {
                type
            }).then(res => {
                if (res.code == '00') {
                    that.getList()
                }
            })
        },
        // 获取列表
        getList() {
            let that = this;
            list(that.json).then(res => {
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
            if(!isEmpty(this.rule.personCount,'同行人数')){
                return;
            }
             if(!isEmpty(this.rule.freeCount,'免单人数')){
                return;
            }
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

        // 一级分类改变获取二级分类
        categoriesChange(e) {
            //console.log('改变');
            //console.log(e)
            let id = e;
            this.categories.map(i => {
                if (i.id == id) {
                    this.categories2 = i.categories;
                }
            })
        },

    },
    created() {
        this.getState()
        this.getList();
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
// 排序
.sortBox {
    i {
        color: #7F7F7F;
        width: 23px;
        height: 23px;
        border: 1px solid #7F7F7F;
        text-align: center;
        line-height: 23px;
        margin: 0 5px;
        min-width: 23px;
    }
}

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
    line-height: 30px;
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

.dangerTips {
    font-size: 14px;
    font-weight: 400;
    color: #FF3636;
}
</style>
