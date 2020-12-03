<!--  -->
<template>
<div class='preSale bgf'>
    <div class="searchBox bgf">
        <el-form label-position="top" :model="formInline1">
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="21">
                    <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="评价模块开关">
                                    <el-switch></el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6" :pull="12">
                            <div class="grid-content bg-purple">
                                <el-form-item label="筛选时间段">
                                    <el-input v-model="formInline1.user" placeholder="筛选时间段"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>

            </el-row>
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="20">
                    <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="用户昵称">
                                    <el-input v-model="formInline1.user" placeholder="用户昵称"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="用户ID">
                                    <el-input v-model="formInline1.user" placeholder="用户ID"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="商品名称">
                                    <el-input v-model="formInline1.user" placeholder="商品名称"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="商品ID">
                                    <el-input v-model="formInline1.user" placeholder="商品ID"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple flexEnd">
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
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
            <el-table-column prop="name" label="评价商品" width="180">
            </el-table-column>
            <el-table-column prop="address" label="规格"> </el-table-column>
            <el-table-column prop="address" label="订单号"> </el-table-column>
            <el-table-column prop="address" label="订单类型"> </el-table-column>
            <el-table-column prop="address" label="评价用户"> </el-table-column>
            <el-table-column prop="address" label="用户ID"> </el-table-column>
            <el-table-column prop="address" label="评价内容"> </el-table-column>
            <el-table-column prop="address" label="评价图片"> </el-table-column>
            <el-table-column prop="address" label="评价时间"> </el-table-column>
            <el-table-column prop="address" label="回复"> </el-table-column>
            <el-table-column prop="address" label="操作"> </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
formInline1:{},
tableData:[]
        };
    },
    computed: {},
    watch: {},
    methods: {
onSubmit(){}
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
//@import url(); 引入公共css类
.preSale{
    padding: 23px 32px;
}
</style>
