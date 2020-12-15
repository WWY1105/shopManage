<!--  -->
<template>
<div class="coupon">
    <div class="totalPanel">
        <p class="title flexStart"><span>数据汇总：</span>
        </p>
        <div class="panelBox flexStart">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">￥{{i.num}}</p>
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
                                    <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                                    </el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-form-item label="自动赠送规则：">

                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row :gutter="20" type="flex" justify="end" align="bottom">
                        <div class="grid-content bg-purple">
                            <el-form-item>
                                <el-button class="searchBtn">+新增</el-button>
                            </el-form-item>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="id">
                            <el-input v-model="json.nickname" placeholder="id"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="优惠券名称">
                            <el-input v-model="json.user" placeholder="优惠券名称"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="优惠券面额">
                            <el-input v-model="json.id" placeholder="优惠券面额"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="能否领取">
                            <el-input v-model="json.inviterId" placeholder="能否领取"></el-input>
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
            <el-table-column prop="imgurl" label="优惠券名称">
            </el-table-column>
            <el-table-column prop="nickname" label="优惠券面额"></el-table-column>
            <el-table-column prop="mobile" label="满足使用金额"></el-table-column>
            <el-table-column prop="inviterId" label="类型限制"> </el-table-column>
            <el-table-column prop="inviterNickname" label="有效期致"> </el-table-column>
            <el-table-column prop="registerTime" label="总数量"> </el-table-column>
            <el-table-column prop="lastLoginTime" label="领取数量"> </el-table-column>
            <el-table-column prop="consumption" label="剩余可领 "> </el-table-column>
            <el-table-column prop="balance" label="使用数量"> </el-table-column>
            <el-table-column prop="yj" label="创建时间"> </el-table-column>
            <el-table-column prop="type" label="能否领取"> </el-table-column>
            <el-table-column label="其他">
                <template>
                    <p class="tioDetail">修改</p>
                    <p class="tioDetail">赠送</p>
                    <p class="tioDetail">删除</p>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {list} from '../../../api/sales/coupon'
export default {
    components: {},
    data() {
        return {
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
            json: {
                pageNum: 0,
                pageSize: 30
            },
        };
    },
    computed: {},
    watch: {},
    methods: {

        getList() {
            let that = this;
            list(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        },
        getTotal() {
            let that = this;
            total().then(res => {
                if (res.code == '00') {
                    this.panelDatas = [{
                        name: '用户量',
                        num: res.data.total
                    }, {
                        name: '新增用户',
                        num: res.data.newly
                    }, {
                        name: '活跃用户',
                        num: res.data.active
                    }, {
                        name: '下单用户',
                        num: res.data.orderUser
                    }, {
                        name: '消费金额',
                        num: res.data.xf
                    }, {
                        name: '客单价',
                        num: res.data.kd
                    }, {
                        name: '分享奖金',
                        num: res.data.fx
                    }, {
                        name: '分享佣金',
                        num: res.data.yj
                    }]

                }
            })
        }
    },
    created() {
        this.getList();
        this.getTotal()
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

.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;
    margin-bottom: 20px;
    .eachTotalBox{
        margin-right: 120px;
    }
    .title {
        font-size: 22px;
        margin-bottom: 30px;
    }

    .eachTotalBox {
        .partTitle {
            font-size: 16px;
            margin-bottom: 16px;
        }

        .num {
            font-size: 22px;
            font-weight: bold;
        }
    }
}
</style>
