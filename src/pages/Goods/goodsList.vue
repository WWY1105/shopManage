<!--  -->
<template>
<div class='goods'>
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="3">
                    <div class="grid-content bg-purple">
                        <el-form-item label="显示">
                            <el-select v-model="formInline.region" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3" :offset="18">
                    <div class="grid-content bg-purple">
                        <el-form-item>
                            <el-button class="searchBtn">新增</el-button>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top" :model="formInline1">
            <div class="flexSpace">
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="ID">
                                <el-input v-model="formInline1.id" placeholder="ID"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="名称">
                                <el-input v-model="formInline1.title" placeholder="名称"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="是否上架">
                                <el-select v-model="formInline1.shelf" placeholder="是否上架">
                                    <el-option label="是" value="true"></el-option>
                                    <el-option label="否" value="false"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="是否有库存">
                                <el-select v-model="formInline1.region" placeholder="是否有库存">
                                     <el-option label="是" value="true"></el-option>
                                     <el-option label="否" value="false"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="一级分类">
                                <el-select v-model="formInline1.region" placeholder="一级分类">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="二级分类">
                                <el-select v-model="formInline1.region" placeholder="二级分类">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="营销">
                                <el-select v-model="formInline1.region" placeholder="营销">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
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
        <el-table stripe :data="tableData" border style="width: 100%" fit>
            <el-table-column align="center" prop="id" label="ID">
            </el-table-column>
            <el-table-column align="center" prop="name" label="主图" width="100">
                <template>
                    <img :src="imgurl" alt="">
                </template>
            </el-table-column>
            <el-table-column align="center" prop="title" label="商品名称">
            </el-table-column>
            <el-table-column align="center" prop="address" label="规格">
            </el-table-column>
            <el-table-column align="center" prop="categoryId" label="分类">
            </el-table-column>
            <el-table-column align="center" prop="address" label="单价">
            </el-table-column>
            <el-table-column align="center" prop="address" label="库存">
            </el-table-column>
            <el-table-column align="center" prop="address" label="单位">
            </el-table-column>
            <el-table-column align="center" prop="address" label="运费">
            </el-table-column>
            <el-table-column align="center" prop="address" label="营销">
            </el-table-column>
            <el-table-column align="center" prop="address" label="上下架">
                <template slot-scope="scope">
                    <p v-if="scope.row.shelf" class="editBtn">已上架</p>
                    <p v-else class="deleteBtn">已下架</p>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="排序">
            </el-table-column>
            <el-table-column align="center" prop="address" label="其它" width="150">
                <template>
                    <div class="controlBox flexCenter">
                        <div class="editBtn">编辑</div>
                        <div class="deleteBtn">删除</div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexEnd">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import {
    list
} from '../../api/goods/index'
export default {
    components: {},
    data() {
        return {
            pageData: 0,
            page: {
                pageNum: 0,
                pageSize: 30
            },

            formInline: {},
            formInline1: {},
            tableData: []
        };
    },
    computed: {},
    watch: {},
    methods: {
        getList() {
            list(this.page).then((res) => {
                console.log(res)
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        },
        onSubmit() {}
    },
    created() {
        this.getList()
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
.goods {
    //min-height: 100%;
}

.searchBox {
    padding: 28px 33px;

}

.tableBox {
    padding: 0 33px 30px;
}
</style>
