<!--  -->
<template>
<div class='advice'>
    <div class="content bgf">
        <div class="searchBox">
            <el-form label-position="top" :model="form" label-width="110px" ref="form" :rules="rules">
                <el-row :gutter="20" type="flex" justify="start" align="bottom">
                    <el-col :span="20">
                        <el-row :gutter="20" type="flex" justify="start" align="bottom">
                            <el-col :span="3">
                                <el-form-item label="小程序的意见反馈模块开关">
                                    <el-switch></el-switch>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                                <el-form-item label="有无备注">
                                    <el-select v-model="json.hasRemark">
                                        <el-option label="有" value="true"></el-option>
                                        <el-option label="无" value="false"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                                <el-form-item label="用户名称">
                                    <el-input v-model="json.nickname"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                                <el-form-item label="留言称呼">
                                    <el-input v-model="json.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="3">
                                <el-form-item label="联系方式">
                                    <el-input v-model="json.tel"></el-input>
                                </el-form-item>
                            </el-col>
                              <el-col :span="9">
                                <el-form-item label="提交时间">
                                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="json.time">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="4">
                        <div class="flexEnd">
                            <el-form-item label="">
                                <el-button class="searchBtn" @click="getDataFn">查询</el-button>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>

        <!-- 表格 -->
        <div class="tableBox">
            <el-table stripe :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="80">
                </el-table-column>
                <el-table-column prop="title" label="提交用户">
                </el-table-column>
                <el-table-column prop="itemsStr" label="用户ID"> </el-table-column>
                <el-table-column prop="ordernum" label="留言称呼"> </el-table-column>
                <el-table-column prop="orderType" label="联系方式"> </el-table-column>
                <el-table-column prop="nickname" label="提交时间"> </el-table-column>
                <el-table-column prop="uid" label="留言内容" width="180px"> </el-table-column>
                <el-table-column prop="content" label="图片">
                    <template slot-scope="scope">
                        <p class="replay" @click="replayFn(scope.row.id)">查看</p>
                    </template>
                </el-table-column>
                <el-table-column prop="imgurls" label="备注"> </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <p class="replay" @click="replayFn(scope.row.id)">备注</p>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</div>
</template>

<script>
import {
    getData
} from '../../api/advice/index'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            form: {},
            tableData: [],
            rules: {},
            json: {
                pageNum: 1,
                pageSize: 30
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDataFn() {
            let json=this.json;
            if(json.time.length>0){
                json.createTimeBegin=json.time[0];
                json.createTimeEnd=json.time[1];
            }
            delete json.time;
            getData(json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data
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
.content {
    padding: 40px 33px;

    .searchBox {
        margin-bottom: 22px;
    }
}
</style>
