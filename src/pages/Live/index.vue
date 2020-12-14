<!--  -->
<template>
<div class='live'>
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="18">
                    <el-row :gutter="20" type="flex" justify="start" align="bottom">
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <el-form-item label="直播模块开关">
                                    <el-switch size="large" v-model="value" active-color="#00B0F0" inactive-color="#aaaaaa">
                                    </el-switch>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <el-form-item label="筛选时间段">
                                <el-date-picker value-format="yyyy-MM-dd HH:mm:ss"  format="yyyy-MM-dd HH:mm:ss" v-model="json.time" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="6">
                    <el-row :gutter="20" type="flex" justify="end" align="bottom">
                        <div class="grid-content bg-purple">
                            <el-form-item>
                                <el-button class="searchBtn" @click="getList">查询</el-button>
                                <el-button class="searchBtn">+预约直播</el-button>
                            </el-form-item>
                        </div>
                    </el-row>
                </el-col>
            </el-row>
        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="ID" width="80">
            </el-table-column>
            <el-table-column prop="name" label="时间段" width="100">
            </el-table-column>
            <el-table-column prop="address" label="关联商品、规格" width="180">
            </el-table-column>
            <el-table-column prop="address" label="关联优惠券">
            </el-table-column>
            <el-table-column prop="address" label="观看人数">
            </el-table-column>
            <el-table-column prop="address" label="订单量">
            </el-table-column>
            <el-table-column prop="address" label="订单金额">
            </el-table-column>
            <el-table-column prop="address" label="直播流量">
            </el-table-column>
            <el-table-column prop="address" label="费用成本">
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
    list
} from '../../api/live/index'
export default {
    components: {},
    data() {
        return {
            value:false,
            time: true,
            formInline: {},
            formInline1: {},
            tableData: [],
            json: {
                pageNum: 0,
                pageSize: 30
            },
        };
    },
    computed: {},
    watch: {},
    methods: {
        onSubmit() {},
        getList() {
            let that = this;
            console.log(that.json)
            if(that.json.time&&that.json.time.length>0){
                that.json.beginTime=that.json.time[0]
                that.json.endTime=that.json.time[1]
            }
            delete that.json.time;
            list(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        }
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
.live {
    //min-height: 100%;
}

.searchBox {
    padding: 28px 33px;

}

.tableBox {
    padding: 0 33px 30px;
}
</style>
