<template>
<div class="record bgf">
    <div class="tableBox">
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <el-form-item label="筛选时间段">
                        <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
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
            <el-table-column prop="totalPrice" label="结算金额">
            </el-table-column>
            <el-table-column prop="payPrice" label="结算时间">

            </el-table-column>
            <el-table-column label="备注">

            </el-table-column>

            <el-table-column label="操作">
                <template>
                   
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
            tableData: [],
            pageData: {},
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.tableBox {
    background: #fff;
    padding: 35px;
    margin-top: 20px;

}
</style>
