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
                <el-col :span="3" :offset="15">
                    <el-form-item>
                        <el-button class="searchBtn" @click="categoryVisible=true">分类管理</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <router-link :to="{name:'addGoods'}" class="grid-content bg-purple">
                        <el-form-item>
                            <el-button class="searchBtn">新增</el-button>
                        </el-form-item>
                    </router-link>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top" :model="json">
            <div class="flexSpace">
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="ID">
                                <el-input v-model="json.id" placeholder="ID"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="名称">
                                <el-input v-model="json.title" placeholder="名称"></el-input>
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
                            <el-form-item label="是否有库存">
                                <el-select v-model="json.hasStock" placeholder="是否有库存">
                                    <el-option label="是" value="true"></el-option>
                                    <el-option label="否" value="false"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="一级分类">
                                <el-select v-model="json.categoryId" placeholder="一级分类">
                                    <el-option :label="item.name" :value="item.id" v-for="(item,index) in categoryList" :key="index"></el-option>
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
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="营销">
                                <el-select v-model="json.sellType" placeholder="营销">
                                     <el-option label="全部" value=""></el-option>
                                    <el-option label="预售" value="ys"></el-option>
                                    <el-option label="拼团" value="pt"></el-option>
                                    <el-option label="秒杀" value="ms"></el-option>
                                    <el-option label="砍价" value="kj"></el-option>
                                    <el-option label="免费拿" value="mfn"></el-option>
                                    <el-option label="星秒" value="xm"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item>
                                <el-button type="primary" @click="getList">查询</el-button>
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
                <template slot-scope="scope">
                    <img :src="scope.row.imgurl" alt="">
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
                <template slot-scope="scope">
                    <div class="controlBox flexCenter">
                        <router-link class="editBtn" :to="{path:'/editGoods',query:{id:scope.row.id}}">
                            编辑
                        </router-link>
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

    <!-- 分类管理 -->
    <el-dialog title="分类管理" center :visible.sync="categoryVisible" class="categoryDialog">
        <div class="dialogContent">
            <div class="categoryBox">
                <div class="firstCategory"  v-for="(item,index) in categoryList" :key="index">
                    <div class="firstCategoryName flexStart">
                        <span class="categoryLabel">分类</span>
                        <div class="tags">
                            <el-tag effect="dark" color="#00aef1" closable @close="deleteCategory(item.id)">
                                {{item.name}}
                            </el-tag>
                        </div>
                    </div>
                    <div class="firstCategoryChildren flexStart">
                        <span class="categoryLabel">子分类</span>
                        <div class="eachChildren flexStart flexWrap">
                            <el-input 
                            autofocus
                            v-for="(tag,tagIndex) in item.categories" :key="tag.name" closable :type="tag.type"
                            :value="tag.name" 
                            @input="val=>getChilInput(val,index,tagIndex)" 
                            class="addCategory" 
                            clearable>
                            </el-input>
                            <el-input 
                            autofocus
                            :value="childrenVal+tagIndex" 
                            @input="val=>getChilInput(val,index,tagIndex)" 
                            placeholder="+添加子分类" 
                            class="addCategory" 
                            clearable>
                            </el-input>

                        </div>
                    </div>
                </div>
                <!-- 添加父类 -->
                <div class="firstCategory">
                    <div class="firstCategoryName flexStart">
                        <span class="categoryLabel">分类</span>
                        <div class="tags">
                            <el-input  autofocus :value="parentVal" @input="getParentInput" @change="(val) => addParent(val,0)" placeholder="+添加一个分类" class="addCategory m0" clearable>
                            </el-input>
                        </div>
                    </div>
                    <div class="firstCategoryChildren ">

                    </div>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveCategory">保存</el-button>
            <el-button @click="categoryVisible = false">取 消</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    list,
    getCategory,
    addCategory,
    deleteCate,
    save
} from '../../api/goods/index'
export default {
    components: {},
    data() {
        return {
            childrenVal: '',
            parentVal: '',
            categoryVisible: true, //新增分类的弹窗
            categoryList: [],
            categories2: [],
            pageData: 0,
            json: {
                pageNum: 1,
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
        // 表格列表
        getList() {
            list(this.json).then((res) => {
                console.log(res)
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        },
        // 获取分类
        getCategory() {
            getCategory().then(res => {
                if (res.code == '00') {
                    res.data.map(i=>{
                        if(!i.categories||i.categories.length==0){
                            i.categories=[{name:''}]
                        }else if(i.categories.length>0){
                            i.categories.push({name:''})
                        }
                    })
                    this.categoryList = res.data;
                    console.log(res.data)
                }
            })
        },
        // 监听子类输入
        getChilInput(val, index,chilIndex) {
            // index 是父类的index
             console.log('val='+val)
            console.log('index='+index)
            this[childrenVal+index]=val;
            console.log(this[childrenVal+index])
            //  this.categoryList[index].categories[chilIndex].name= val;
            //   console.log(this.categoryList)
        },
        getParentInput(val) {
            this.parentVal = val;
        },
        // 添加父类
        addParent(val) {
            // 添加父类
            if (!this.parentVal) {
                that.$message({
                    showClose: true,
                    message: '请输入分类名字',
                    duration: 3 * 1000,
                    type: 'error'
                })
            } else {
                this.categoryList.push({
                    name: val,
                    categories: []
                })
                this.parentVal = ''
            }
        },
        // 添加子类回车
        addCategoryChildren(val, pid, index,chilIndex) {
            let that = this;
              console.log('pid='+pid)
               console.log('val='+val)
              console.log('index='+index)
            // if (!this.childrenVal) {
            //     that.$message({
            //         showClose: true,
            //         message: '请输入分类名字',
            //         duration: 3 * 1000,
            //         type: 'error'
            //     })
            // } else {
            //     this.categoryList[index].categories.push({
            //         name: val
            //     })
            //     this.childrenVal = ''
            // }

        },
        // 删除
        deleteCategory(id) {
            let that = this;
            deleteCate(id).then(res => {
                if (res.code == '00') {
                    this.childrenVal = '';
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.getCategory()
                }
            })
        },
        // 查询
        onSubmit() {

        },
        // 保存分类
        saveCategory() {
            console.log(this.categoryList)

            let that = this;
            let params = [];
            this.categoryList.map(i => {
                let json = {};
                json.name = i.name;
                if (i.categories) {
                    i.categories.map(j => {
                        json.items = [];
                        json.items.push(j.name)
                    })
                } else {
                    json.items = []
                }
                params.push(json)
            })
            console.log(params)
            // return;
            save(params).then(res => {
                if (res.code == '00') {
                    this.childrenVal = '';
                    that.$message({
                        showClose: true,
                        message: '添加成功',
                        duration: 3 * 1000,
                        type: 'success',
                        onClose: () => {
                            that.categoryVisible = false
                        }
                    })

                }
            })
        },
    },
    created() {
        this.getList();
        this.getCategory()
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
/deep/.categoryDialog .el-dialog {
    width: 75% !important;
}

.categoryDialog .el-dialog {
    width: 75% !important;
}

.el-input__inner::-webkit-input-placeholder {
    color: #00AEF1;
    font-size: 14px;
}

.el-input__inner::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #00AEF1;
    font-size: 14px;
}

.el-input__inner:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #00AEF1;
    font-size: 14px;
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #00AEF1;
    font-size: 14px;
}

.goods {
    //min-height: 100%;
}

.searchBox {
    padding: 28px 33px;

}

.tableBox {
    padding: 0 33px 30px;
}

.dialogContent {
    .categoryLabel {
        color: #000;
        min-width: 102px;
        width: 102px;
        text-align: left;
    }

    .firstCategoryName {
        margin-bottom: 33px;
    }

    .firstCategoryChildren {
        margin-bottom: 38px;
        border-bottom: 1px solid #C9C9C9;
        align-items: flex-start;

        .eachChildren {
            .el-tag {
                margin-right: 30px;
                margin-bottom: 33px;
            }
        }
    }
}

.el-tag {
    height: 34px;
    width: 170px;
    box-sizing: border-box;
    border-radius: 17px;
    position: relative;
    line-height: 34px;
    font-size: 14px;

}

.addCategory {
    height: 34px;
    width: 170px;
    box-sizing: border-box;
    border-radius: 17px;
    margin-right: 30px;
    margin-bottom: 33px;

    /deep/ .el-input__inner {
        text-align: center;
        height: 34px;
        width: 170px;
        border-radius: 17px;
        line-height: 34px;
        background-color: #fff !important;
        border-color: #00AEF1 !important;
        color: #00AEF1 !important;
    }
}

/deep/ .el-icon-close {
    font-size: 16px;
    position: absolute;
    right: 13px;
    top: 50%;
    margin-top: -8px;
}
</style>
