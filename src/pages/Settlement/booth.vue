<template>
<div class="main">
    <div class="totalPanel">
        <p class="title">数据汇总：
            <el-button class="transBtn" @click="toCharts">查看图表</el-button>
        </p>
        <div class="panelBox flexStart">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">￥{{i.num}}</p>
            </div>
        </div>
    </div>
    <div class="tableBox">
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="营业状态">
                        <el-select placeholder="">
                            <el-option value="营业" label="营业"></el-option>
                            <el-option value="休息" label="休息"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                 <el-col :span="5" offset="14">
                    <div class="flexEnd">
                        <el-form-item>
                            <el-button class="searchBtn">+添加摊位</el-button>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        </el-form>
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="户主">
                        <el-input placeholder="户主"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="手机号">
                        <el-input placeholder="手机号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="摊位">
                        <el-input placeholder="摊位"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="实际摊位">
                        <el-input placeholder="实际摊位"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <div class="flexEnd">
                        <el-form-item>
                            <el-button class="searchBtn">查询</el-button>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>

        </el-form>
    </div>
    <div class="tableBox">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="序号">
            </el-table-column>
            <el-table-column prop="productName" label="摊位">

            </el-table-column>
            <el-table-column label="实际摊位">

            </el-table-column>
            <el-table-column prop="address" label="户主">

            </el-table-column>
            <el-table-column prop="sellType" label="营业类型">
            </el-table-column>
            <el-table-column prop="status" label="手机号">
            </el-table-column>
            <el-table-column prop="totalPrice" label="营业状态">
            </el-table-column>
            <el-table-column label="备注">
                <template>
                    <p class="editBtn">添加</p>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template>
                    <p class="editBtn">修改</p>
                    <p class="deleteBtn">删除</p>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexCenter">
            <el-pagination background layout="prev, pager, next">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            panelDatas: [{
                name: '总摊位',
                num: 0
            }, {
                name: '摊位额度',
                num: 0
            }],
            tableData: [],
            pageData: {},
        }
    },
    methods: {
        // 点击去看图表
        toCharts() {
            this.$router.push({
                path: '/statistics/order'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;

    .title {
        font-size: 20px;
        margin-bottom: 30px;

        .transBtn {
            margin-left: 45px;
        }
    }

    .eachTotalBox {
        margin-right: 80px;

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

.tableBox {
    background: #fff;
    padding: 35px;
    margin-top: 20px;

}
</style>
