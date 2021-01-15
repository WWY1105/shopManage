<!--  -->
<template>
<div class='msgPush bgf'>
    <div class="searchBox ">
        <el-form label-position="top" :inline="true"  class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="center">
                <el-col :span="20">
                    <div class="grid-content bg-purple">
                      <p class="dangerTips">请勿推送无意义的垃圾消息，否则有可能会被微信举报查封</p>  
                    </div>
                </el-col>

                <el-col :span="4" >
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
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-form-item label="ID">
                                <el-input v-model="json.id" placeholder="ID"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-form-item label="推送内容">
                                <el-input v-model="json.content" placeholder="推送内容"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                   
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-form-item label="推送方式">
                                <el-select v-model="json.pushMode" placeholder="推送方式">
                                    <el-option :label="item.text" :value="item.value" v-for="(item,index) in pushTypeList" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-form-item label="推送对象">
                                <el-select filterable v-model="json.pushTarget" placeholder="推送对象">
                                    <el-option v-for="(i,j) in pushTargetList" :value="i.value" :key="j" :label="i.text"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="grid-content bg-purple">
                            <el-form-item label="推送状态">
                                <el-select v-model="json.pushStatus" placeholder="推送状态">
                                    <el-option v-for="(i,j) in pushStatusList" :value="i.value" :key="j" :label="i.text"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                         <el-col :span="9">
                        <div class="grid-content bg-purple">
                            <el-form-item label="创建时间">
                                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.time1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="9">
                        <div class="grid-content bg-purple">
                            <el-form-item label="推送时间">
                                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.time2" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="6">
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
            <el-table-column align="center" prop="name" label="创建时间" width="100">
            </el-table-column>
            <el-table-column align="center" prop="title" label="推送时间">
            </el-table-column>
            <el-table-column align="center" prop="address" label="推送方式">
            </el-table-column>
            <el-table-column align="center" prop="categoryId" label="推送对象">
            </el-table-column>
            <el-table-column align="center" prop="address" label="推送条数">
            </el-table-column>
            <el-table-column align="center" prop="address" label="推送状态">
            </el-table-column>
            <el-table-column align="center" prop="address" label="推送内容">
            </el-table-column>
            <el-table-column align="center" prop="address" label="操作" width="150">
                <template slot-scope="scope">
                    <div class="controlBox flexCenter">
                        <router-link class="editBtn" :to="{path:'/editGoods',query:{id:scope.row.id}}">
                            修改
                        </router-link>
                        <div class="deleteBtn">取消推送</div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexCenter">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>

</div>
</template>

<script>
import {
    getData
} from '../../../api/sales/messagePush.js'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            pageData: {},
            json: {
                pageNum: 1,
                pageSize: 30
            },
            tableData: [],
            pushTypeList: [{
                text: '全部',
                value: ''
            }, {
                text: '消息',
                value: 1
            }, {
                text: '短信',
                value: 2
            }],
            pushWayList: [{
                text: '全部',
                value: ''
            }, {
                text: '立即发送',
                value: 1
            }, {
                text: '预约发送',
                value: 2
            }],
            pushStatusList: [{
                    text: '全部',
                    value: ''
                },
                {
                    text: '已推送',
                    value: 1
                }, {
                    text: '待推送',
                    value: 2
                }, {
                    text: '取消推送',
                    value: 3
                }
            ],
            pushTargetList: [{
                    text: '全部',
                    value: 'all'
                },
                {
                    text: '普通用户',
                    value: 'pt'
                }, {
                    text: '会员',
                    value: 'hy'
                }, {
                    text: '星卡通',
                    value: 'xkt'
                }
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDataFn() {
            getData(this.json).then((res) => {
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getDataFn()
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
.msgPush{
    padding:48px 24px;
    .dangerTips{
font-size: 16px;
font-weight: 400;
color: #FF3636;
    }
}
</style>
