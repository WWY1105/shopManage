<!--  -->
<template>
<div class="customs">
    <div class="searchBox bgf">
        <el-form label-position="top">
            <el-row :gutter="20" type="flex" justify="start" align="bottom">
                <el-col :span="20">
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
                                    <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss"  type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="json.time">
                                    </el-date-picker>
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
                                    <el-input v-model="json.nickname" placeholder="用户昵称"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="用户ID">
                                    <el-input v-model="json.uid" placeholder="用户ID"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="商品名称">
                                    <el-input v-model="json.title" placeholder="商品名称"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="商品ID">
                                    <el-input v-model="json.pid" placeholder="商品ID"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple flexEnd">
                        <el-form-item>
                            <el-button type="primary" @click="getDataFn">查询</el-button>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="80">
            </el-table-column>
            <el-table-column prop="title" label="评价商品" width="180">
            </el-table-column>
            <el-table-column prop="itemsStr" label="规格"> </el-table-column>
            <el-table-column prop="ordernum" label="订单号"> </el-table-column>
            <el-table-column prop="orderType" label="订单类型"> </el-table-column>
            <el-table-column prop="nickname" label="评价用户"> </el-table-column>
            <el-table-column prop="uid" label="用户ID"> </el-table-column>
            <el-table-column prop="content" label="评价内容"> </el-table-column>
            <el-table-column prop="imgurls" label="评价图片"> </el-table-column>
            <el-table-column prop="createTime" label="评价时间"> </el-table-column>
            <el-table-column prop="replyContent" label="回复">
                <template slot-scope="scope">
                    <a href="#" @click="seeMore(scope.row.id)">查看</a>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <p class="replay" @click="replayFn(scope.row.id)"></p>
                    <p class="delete" @click="deleteDataFn(scope.row.id)"></p>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
    getData,
    saveData,
    deleteData
} from '../../api/comment/index';

export default {
    components: {},
    data() {
        return {
            saleData:{},
            formInline: {},
            tableData: [],
            json: {
                pageNum: 1,
                pageSize: 30
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        //    模块开关-----start
        saveDataFn() {
            let that = this;
            let json = this.saleData;
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
        getDataFn() {
            let that = this;
            if (that.json.time && that.json.time.length > 0) {
                that.json.beginTime = that.json.time[0]
                that.json.endTime = that.json.time[1]
            }
            delete that.json.time;
            
            getData(this.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        },
        deleteDataFn() {},
        seeMore() {},
        replayFn() {},
    },
    created() {
        this.getState()
        this.getDataFn()
    },
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
