<!--  -->
<template>
<div class="customs">
    <div class="searchBox bgf">
        <el-form label-position="top" :model="formInline1">
            <div class="flexSpace">
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                    <el-col :span="21">
                        <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="小程序的意见反馈模块开关">
                                        <el-switch></el-switch>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="提交时间">
                                        <el-input v-model="formInline1.user" placeholder="用户ID"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="有无备注">
                                        <el-input v-model="formInline1.user" placeholder="有无备注"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="用户名称">
                                        <el-input v-model="formInline1.user" placeholder="用户名称"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="留言称呼">
                                        <el-input v-model="formInline1.user" placeholder="留言称呼"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-form-item label="联系方式">
                                        <el-input v-model="formInline1.user" placeholder="联系方式"></el-input>
                                    </el-form-item>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple flexEnd">
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">查询</el-button>
                            </el-form-item>
                        </div>
                    </el-col>

                </el-row>
            </div>
        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="提交用户" width="180">
            </el-table-column>
            <el-table-column prop="address" label="用户ID"> </el-table-column>
            <el-table-column prop="address" label="留言称呼"> </el-table-column>
            <el-table-column prop="address" label="联系方式"> </el-table-column>
            <el-table-column prop="address" label="提交时间"> </el-table-column>
            <el-table-column prop="address" label="留言内容"> </el-table-column>
            <el-table-column prop="address" label="图片"> </el-table-column>
            <el-table-column prop="address" label="备注"> </el-table-column>
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
            formInline: {},
            formInline1: {},
            tableData: [],
        };
    },
    computed: {},
    watch: {},
    methods: {
        onSubmit() {},
    },
    created() {},
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
.customs {
    //min-height: 100%;
}

.searchBox {
    padding: 28px 33px;
}

.tableBox {
    padding: 0 33px 30px;
}
</style>
