<!--  -->
<template>
<div class='makeGroup bgf'>
    <div class="searchBox ">
        <el-form label-position="top" :inline="true" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="center">
                <el-col :span="20">
                    <el-row  type="flex" justify="start" align="center">
                        <el-col :span="4">
                            <el-form label-position="top" :inline="true" class="demo-form-inline">
                                <el-form-item label="秒杀模块开关">
                                  <el-switch @change="saveDataFn" size="large" v-model="saleData.ms" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="14" class="flexStart" >
                            <p class="dangerTips">本模块仅包含秒杀商品，全部商品请至商品管理模块查看</p>
                        </el-col>
                    </el-row>
                </el-col>

                <el-col :span="4">
                    <div class="flexEnd">
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
            <div class="">
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="显示">
                                <el-select v-model="json.id" ></el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="id">
                                <el-input v-model="json.content" placeholder="id"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>

                    <el-col :span="3">
                        <div class="grid-content bg-purple">
                            <el-form-item label="商品名称">
                                 <el-input v-model="json.content" placeholder="id"></el-input>
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
                                <el-select v-model="json.categoryId" placeholder="一级分类"  @change="categoriesChange">
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
                        <div class="grid-content bg-purple flexEnd">
                            <el-form-item>
                                <el-button type="primary" @click="getDataFn">查询</el-button>
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
            </el-table-column>
            <el-table-column align="center" prop="title" label="商品名称">
            </el-table-column>
            <el-table-column align="center" prop="address" label="规格">
            </el-table-column>
            <el-table-column align="center" prop="categoryId" label="分类">
            </el-table-column>
            <el-table-column align="center" prop="address" label="原价">
            </el-table-column>
            <el-table-column align="center" prop="address" label="秒杀价">
            </el-table-column>
             <el-table-column align="center" prop="id" label="开始时间">
            </el-table-column>
            <el-table-column align="center" prop="id" label="结束时间">
            </el-table-column>
            <el-table-column align="center" prop="address" label="总库存">
            </el-table-column>
              <el-table-column align="center" prop="address" label="秒杀库存">
            </el-table-column>
            <el-table-column align="center" prop="address" label="单位">
            </el-table-column>
            <el-table-column align="center" prop="address" label="运费">
            </el-table-column>
            <el-table-column align="center" prop="address" label="上下架">
            </el-table-column>
             <el-table-column align="center" prop="address" label="排序 ">
                  <div class="flexCenter sortBox">
                        <i class="el-icon-arrow-up" @click="val=>toUporDown(val,scope.row.id,'sy')"></i>
                        <i class="el-icon-arrow-down" @click="val=>toUporDown(val,scope.row.id,'xy')"></i>
                    </div>
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
        <div class="pagination flexCenter">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>
 <!-- 删除的确认弹窗 -->
    <deleteDialog title="确定删除此商品?" :deleteVisible="deleteVisible" />
</div>
</template>

<script>
import deleteDialog from '../../../components/deleteDialig'
import {
    list,
    upOrDown,
    getCategory
} from '../../../api/goods/index'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {deleteDialog},
    data() {
        //这里存放数据
        return {
               targetId: '',
            deleteVisible: false, //确认删除的弹窗
            saleData:{},
            searchCategoryList:[],
            categoryList: [],
            categories2: [],
            pageData: {},
            json: {
                sellType:'ms',
                pageNum: 1,
                pageSize: 30
            },
            tableData: [],
          
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
         //    模块开关-----start
        saveDataFn() {
            let that = this;
            let json =  JSON.parse(JSON.stringify(this.saleData));
            delete json.businessId;
            this.$store.dispatch('Setdistributions', json).then(result => {
                if (result.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.getDataFn()
                }
            })
        },
        getState() {
            if (!this.$store.state.distribution.distributions) {
                this.$store.dispatch('Getdistributions').then(result => {
                    this.saleData = result;
                })
            } else {
                this.saleData = this.$store.state.distribution.distributions;
            }
        },
        //    模块开关----end
           // 获取分类
        getCategoryFn() {
            getCategory().then(res => {
                if (res.code == '00') {
                    this.searchCategoryList=res.data;
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
                    ////console.log(res.data)
                }
            })
        },
        // 一级分类改变获取二级分类
        categoriesChange(e) {
            let id = e;
            this.searchCategoryList.map(i => {
                if (i.id == id) {
                    this.categories2 = i.categories;
                }
            })
        },
         // 上移或者下移
        toUporDown(val, id, type) {
            let that = this;
            upOrDown(id, {
                type
            }).then(res => {
                if (res.code == '00') {
                    that.getDataFn()
                }
            })
        },
        getDataFn() {
            list(this.json).then((res) => {
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
         this.getState()
        this.getDataFn();
         this.getCategoryFn()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
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
.makeGroup {
    padding: 48px 24px;

    .dangerTips {
        font-size: 14px;
        font-weight: 400;
        color: #FF3636;
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
}
</style>
