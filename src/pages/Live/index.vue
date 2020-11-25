<!--  -->
<template>
<div class='live'>
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="16">
                    <div class="grid-content bg-purple">
                        <el-form-item label="直播模块开关">
                            <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                            </el-switch>
                        </el-form-item>

                        <el-form-item label="筛选时间段">
                            <el-select v-model="formInline.region" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-form-item>
                            <div class="flexCenter">
                                <el-button class="searchBtn">查询</el-button>
                                <el-button class="searchBtn">预约直播</el-button>
                            </div>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="时间段" width="180">
            </el-table-column>
            <el-table-column prop="address" label="关联商品、规格">
            </el-table-column>
            <el-table-column prop="address" label="关联优惠券">
            </el-table-column>
            <el-table-column prop="address" label="观看人数">
            </el-table-column>
            <el-table-column prop="address" label="订单量">
            </el-table-column>
            <el-table-column prop="address" label="订单金额">
            </el-table-column>
            <el-table-column prop="address" label="直播流量">
            </el-table-column>
            <el-table-column prop="address" label="费用成本">
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            value: true,
            formInline: {},
            formInline1: {},
            tableData: []
        };
    },
    computed: {},
    watch: {},
    methods: {
        onSubmit() {}
    },
    created() {

    },
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
.live{
     //min-height: 100%;
}
.searchBox {
    padding: 28px 33px;

}

.tableBox {
    padding: 0 33px 30px;
}
</style>
