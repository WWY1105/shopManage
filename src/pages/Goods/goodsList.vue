<!--  -->
<template>
<div class='goods'>
    <div class="totalPanel">
        <p class="title">数据汇总：
            <el-button class="transBtn" @click="toCharts">查看图表</el-button>
        </p>
        <div class="panelBox flexSpace">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">{{i.num}}</p>
            </div>
        </div>
    </div>
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
                <el-col :span="6" :offset="15">
                    <div class="flexEnd">
                        <el-form-item>
                            <el-button class="searchBtn" @click="categoryVisible=true">分类管理</el-button>
                        </el-form-item>

                        <!-- </el-col>
                <el-col :span="3"> -->
                        <router-link :to="{name:'addGoods'}" class="grid-content bg-purple">
                            <el-form-item>
                                <el-button class="searchBtn">新增</el-button>
                            </el-form-item>
                        </router-link>
                    </div>
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
                                <el-select v-model="json.categoryId" placeholder="一级分类" @change="categoriesChange">
                                    <el-option :label="item.name" :value="item.id" v-for="(item,index) in searchCategoryList" :key="index"></el-option>
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
                        <div class="grid-content bg-purple flexEnd">
                            <el-form-item>
                                <el-button type="primary" @click="getList" class="searchBtn">查询</el-button>
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
            <el-table-column align="center" prop="name" label="主图" width="120">
                <template slot-scope="scope">
                    <img :src="$imgurl+scope.row.imgurl" alt="" class="mainPic">
                </template>
            </el-table-column>
            <el-table-column align="center" prop="title" label="商品名称">
            </el-table-column>
            <el-table-column align="center" prop="address" label="规格" width="150">
                <template slot-scope="scope">
                    <p class="eachItem" v-for="(i,j) in scope.row.skus" :key="j">{{i.itemNames}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="categoryId" label="分类">
                <template slot-scope="scope">
                    {{scope.row.categoryId|categoryFilter}}
                    <span v-if="scope.row.categoryId&&scope.row.categoryId2">/</span>
                    {{scope.row.categoryId2|categoryFilter}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="price" label="单价">
                <template slot-scope="scope">
                    <p class="eachItem" v-for="(i,j) in scope.row.skus" :key="j">{{i.price}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="stock" label="库存">
                <template slot-scope="scope">
                    <p class="eachItem" v-for="(i,j) in scope.row.skus" :key="j">{{i.stock}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="unit" label="单位">
            </el-table-column>
            <el-table-column align="center" prop="expPrice" label="运费">
            </el-table-column>
            <el-table-column align="center" prop="address" label="营销">
                <template slot-scope="scope">
                    <p>{{scope.row.sellType|sellTypeFilter}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" label="上下架">
                <template slot-scope="scope">
                    <p v-if="scope.row.shelf" class="editBtn" @click="val=>setShelfFn(val,scope.row.id,false)">已上架</p>
                    <p v-else class="deleteBtn" @click="val=>setShelfFn(val,scope.row.id,true)">已下架</p>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="排序">
                <template slot-scope="scope">
                    <div class="flexCenter sortBox">
                        <i class="el-icon-arrow-up" @click="val=>toUporDown(val,scope.row.id,'sy')"></i>
                        <i class="el-icon-arrow-down" @click="val=>toUporDown(val,scope.row.id,'xy')"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="其它" width="150">
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
        <div class="pagination flexCenter">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>

    <!-- 分类管理 -->
    <el-dialog title="分类管理" center :visible.sync="categoryVisible" class="categoryDialog">
        <div class="dialogContent">
            <div class="categoryBox">
                <div class="firstCategory" v-for="(item,index) in categoryList" :key="index">
                    <div class="firstCategoryName flexStart">
                        <span class="categoryLabel">分类</span>
                        <div class="tags">
                            <el-tag closable @close="deleteCategoryParent(item.id,index)">
                                <el-input autofocus v-model="item.name" placeholder="请输父类名称" class="addCategory parentCategory" @change="val=>parentCategoryChange(val,index)">
                                </el-input>
                            </el-tag>

                        </div>
                    </div>
                    <div class="firstCategoryChildren flexStart">
                        <span class="categoryLabel">子分类</span>
                        <div class="eachChildren flexStart flexWrap">
                            <el-tag v-for="(tag,tagIndex) in item.categories" :key="tagIndex" closable :type="tag.type" @close="deleteCategoryChild(tag.id,item.id,tagIndex,index)">
                                <!-- 原有子分类 -->
                                <!-- @keyup.enter.native="val=>childEnter(val,index,tagIndex)" -->
                                <el-input autofocus v-model="tag.name" placeholder="请输入子类名称" class="addCategory" @change="val=>childCategoryChange(val,index,tagIndex)">
                                </el-input>
                            </el-tag>
                            <el-button class="addCategories" :disabled="!item.categories[item.categories.length-1].name" @click="val=>addCategoryFn(index)">+添加子分类</el-button>
                        </div>
                    </div>
                </div>
                <div class="firstCategory">
                    <div class="firstCategoryName flexStart">
                        <span class="categoryLabel">分类</span>
                        <div class="tags">
                            <el-button class="addCategories addParentCategories" :disabled="!categoryList[categoryList.length-1].name" @click="val=>addParentCategoryFn(index)">+添加一个分类</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="saveCategory">保存</el-button>
            <el-button @click="categoryVisible = false">取 消</el-button>
        </div>
    </el-dialog>

    <!-- 删除的确认弹窗 -->
    <deleteDialog title="确定删除此商品?" :deleteVisible="deleteVisible" />
</div>
</template>

<script>
import deleteDialog from '../../components/deleteDialig'
import {
    list,
    getCategory,
    addCategory,
    deleteCate,
    deleteData,
    save,
    setShelf,
    upOrDown
} from '../../api/goods/index';
import {
    orderTypeOptions
} from '../../utils/jsons'
let that;
export default {
    components: {
        deleteDialog
    },
    data() {
        return {
            panelDatas: [{
                name: '商品种类',
                num: '???'
            }, {
                name: '规格种类',
                num: '???'
            }, {
                name: '库存量',
                num: '???'
            }, {
                name: '销量',
                num: '???'
            }, {
                name: '销售金额',
                num: '???'
            }, {
                name: '平均复购率',
                num: '???'
            }, {
                name: '浏览量',
                num: '???'
            }, {
                name: '退货率',
                num: '???'
            }, ],
            searchCategoryList: [],
            childrenVal: '',
            parentVal: '',
            targetId: '',
            deleteVisible: false, //确认删除的弹窗
            categoryVisible: false, //新增分类的弹窗
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
    filters: {
        categoryFilter(val) {
            let name = that.getDepById(that.categoryList, val)
            return name;
        },
        sellTypeFilter(val) {
            let name;
            val = val.trim()
            orderTypeOptions.map(i => {
                if (i.value == val) {
                    name = i.text;
                }
            })
            return name;
        }
    },
    methods: {
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
        // 便利树
        getDepById(tree, ID) {
            var Deep, T, F;
            for (F = tree.length; F;) {
                T = tree[--F]
                if (ID == T.id) return T.name;
                if (T.categories) {
                    Deep = this.getDepById(T.categories, ID)
                    if (Deep) return Deep
                }
            }
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
        // 删除的弹窗
        showDeleteDialog(val, id) {
            this.deleteVisible = true;
            this.targetId = id;
            ////console.log(val)
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
        // 查看图表
        toCharts() {},
        // 一级分类改变获取二级分类
        categoriesChange(e) {
            let id = e;
            this.searchCategoryList.map(i => {
                if (i.id == id) {
                    this.categories2 = i.categories;
                }
            })
        },
        // 表格列表
        getList() {
            list(this.json).then((res) => {
                ////console.log(res)
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        },
        addParentCategoryFn() {
            this.searchCategoryList.push({
                name: '',
                categories: [{
                    name: ''
                }]
            })
        },
        // 获取分类
        getCategory() {
            getCategory().then(res => {
                if (res.code == '00') {
                    this.searchCategoryList = res.data;
                    res.data.map(i => {
                        if (!i.categories || i.categories.length == 0) {
                            i.categories = [{
                                name: ''
                            }]
                        } else if (i.categories.length > 0) {
                            i.categories.push({
                                name: ''
                            })
                        }
                    })
                    res.data.push({
                        name: '',
                        categories: [{
                            name: ''
                        }]
                    })

                    this.categoryList = res.data;
                    // ////console.log(res.data)
                }
            })
        },
        // // 子分类回车
        // childEnter(val, index, chilIndex) {

        // },
        // 添加一个子类
        addCategoryFn(index) {
            let last = this.categoryList[index].categories.length - 1;
            if (this.categoryList[index].categories[last].name.trim() != '') {
                this.categoryList[index].categories.push({
                    name: ''
                })
            }
        },
        // 监听父类的改变
        parentCategoryChange(val, index) {

            let last = this.categoryList.length - 1;
            if (this.categoryList[last].name.trim() != '') {
                if (val.trim() != '') {
                    this.categoryList[index].name = val;

                    this.categoryList.push({
                        name: '',
                        categories: [{
                            name: ''
                        }]
                    })
                }
            }
        },

        // 监听子类输入
        childCategoryChange(val, index, chilIndex) {
            if (val.trim() != '') {
                this.categoryList[index].categories[chilIndex].name = val;
            }
            ////console.log(this.categoryList)
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
        // 删除父类
        deleteCategoryParent(id, index) {
            let that = this;
            if (id) {
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
            } else {
                that.categoryList.splice(index, 1)
            }

        },
        // 删除子类
        deleteCategoryChild(childid, pid, childIndex, pIndex) {
            let that = this;
            ////console.log(childid)
            if (childid) {
                deleteCate(childid).then(res => {
                    if (res.code == '00') {
                        this.childrenVal = '';
                        that.$message({
                            showClose: true,
                            message: '删除成功',
                            duration: 2000,
                            type: 'success'
                        })
                        that.getCategory()
                    }
                })
            } else if (that.categoryList[pIndex].categories[childIndex].name.trim() != '') {
                that.categoryList[pIndex].categories.splice(childIndex, 1)
            }

        },

        // 保存分类
        saveCategory() {
            let that = this;
            let params = [];
            // ////console.log(this.categoryList)
            this.categoryList.map(i => {
                ////console.log(i)
                if (i.name) {
                    let json = {};
                    json.name = i.name;
                    json.items = [];
                    if (i.categories && i.categories.length > 0) {
                        i.categories.map(j => {
                            if (j.name) {
                                json.items.push(j.name)
                            }
                        })
                    } else {
                        json.items = []
                    }
                    params.push(json)
                }

            })
            ////console.log(params)

            save(params).then(res => {
                if (res.code == '00') {
                    this.childrenVal = '';
                    that.$message({
                        showClose: true,
                        message: '保存成功',
                        duration: 1 * 1000,
                        type: 'success',
                        onClose: () => {
                            that.categoryVisible = false;
                            that.getCategory()
                        }
                    })

                }
            })
        },
    },
    created() {
        that = this;
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

.eachItem {
    padding: 6px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

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

.mainPic {
    width: 80px;
    height: 80px;
}

.categoryDialog .el-dialog {
    width: 75% !important;

    .addCategories {
        text-align: center;
        height: 30px;
        width: 170px;
        border-radius: 17px;
        line-height: 34px;
        background-color: #fff !important;
        border-color: #00AEF1 !important;
        color: #00AEF1 !important;
        padding: 0;
        line-height: 30px;

        &.addParentCategories {
            background-color: #00AEF1 !important;
            border-color: #00AEF1 !important;
            color: #fff !important;
        }
    }
}

.el-input__inner::-webkit-input-placeholder {
    color: #00AEF1;
    font-size: 12px;
}

.el-input__inner::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #00AEF1;
    font-size: 12px;
}

.el-input__inner:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #00AEF1;
    font-size: 12px;
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #00AEF1;
    font-size: 12px;
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
        min-width: 70px;
        width: 70px;
        text-align: left;
        line-height: 30px;
    }

    .firstCategory {
        margin-bottom: 33px;
    }

    .firstCategoryName {
        margin-bottom: 33px;
        align-items: flex-start;
    }

    .firstCategoryChildren {
        padding-bottom: 38px;
        border-bottom: 1px solid #C9C9C9;
        align-items: flex-start;

    }
}

.tags {
    // margin-bottom: 33px;

}

.el-tag {
    height: 34px;
    width: 170px;
    box-sizing: border-box;
    border-radius: 17px;
    position: relative;
    line-height: 34px;
    font-size: 12px;
    margin-right: 30px;
    padding: 0;
    border: none;
    background: transparent;
}

.addCategory {
    height: 34px;
    width: 170px;
    box-sizing: border-box;
    border-radius: 17px;
    margin-right: 30px;

    /deep/ .el-input__inner {
        text-align: left;
        height: 34px;
        width: 170px;
        border-radius: 17px;
        line-height: 34px;
        background-color: #fff !important;
        border-color: #D4D4D4 !important;
        color: #000 !important;
    }

    &.parentCategory {
        /deep/ .el-input__inner {
            color: #fff !important;
            background: #00AEF1 !important;
        }
    }
}

/deep/ .el-icon-close {
    font-size: 14px;
    position: absolute;
    right: 13px;
    top: 50%;
    margin-top: -8px;
}

.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;
    margin-bottom: 20px;

    .title {
        font-size: 20px;
        margin-bottom: 30px;

        .transBtn {
            margin-left: 45px;
        }
    }

    .eachTotalBox {
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
</style>
