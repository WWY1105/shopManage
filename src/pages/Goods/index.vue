<!--  -->
<template>
<div class='goods'>
    <div class="searchBox bgf">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <div class="flexSpace">
                <el-form-item label="显示">
                    <el-select v-model="formInline.region" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button class="searchBtn">新增</el-button>
                </el-form-item>
            </div>
        </el-form>

        <el-form label-position="top" :model="formInline1">
            <div class="flexSpace flexWrap">
                <el-form-item label="ID">
                    <el-input v-model="formInline1.user" placeholder="ID"></el-input>
                </el-form-item>
                <el-form-item label="名称">
                    <el-input v-model="formInline1.user" placeholder="名称"></el-input>
                </el-form-item>
                <el-form-item label="是否上架">
                    <el-select v-model="formInline1.region" placeholder="是否上架">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否有库存">
                    <el-select v-model="formInline1.region" placeholder="是否有库存">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="一级分类">
                    <el-select v-model="formInline1.region" placeholder="一级分类">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="二级分类">
                    <el-select v-model="formInline1.region" placeholder="二级分类">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="营销">
                    <el-select v-model="formInline1.region" placeholder="营销">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

    <div class="tableBox bgf">
  <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="主图" width="180">
            </el-table-column>
            <el-table-column prop="address" label="商品名称">
            </el-table-column>
            <el-table-column prop="address" label="规格">
            </el-table-column>
            <el-table-column prop="address" label="分类">
            </el-table-column>
            <el-table-column prop="address" label="单价">
            </el-table-column>
            <el-table-column prop="address" label="库存">
            </el-table-column>
            <el-table-column prop="address" label="单位">
            </el-table-column>
            <el-table-column prop="address" label="运费 ">
            </el-table-column>
            <el-table-column prop="address" label="营销">
            </el-table-column>
            <el-table-column prop="address" label="上下架">
            </el-table-column>
            <el-table-column prop="address" label="排序">
            </el-table-column>
            <el-table-column prop="address" label="其它">
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
            formInline: {},
            formInline1: {},
            tableData:[]
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
.searchBox {
    padding: 28px 33px;

}
.tableBox{
padding: 0 33px 30px;
}
</style>
