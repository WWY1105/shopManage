<!--  -->
<template>
<div class='order'>
    <div class="totalPanel">
        <p class="title">数据汇总：</p>
        <div class="panelBox flexSpace">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">{{i.num}}</p>
            </div>
        </div>
    </div>
    <div class="tableBox">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <div class="flexSpace alignEnd">
                <div class="left">
                    <el-form-item label="订单状态">
                        <el-select v-model="formInline.status" placeholder="订单状态">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单类型">
                        <el-select v-model="formInline.type" placeholder="订单类型">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="筛选时间段">
                        <el-select v-model="formInline.time" placeholder="筛选时间段">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="flexEnd">
                    <el-form-item>
                        <el-button class="transBtn" @click="onSubmit">导入电子表格</el-button>
                        <el-button class="transBtn" @click="onSubmit">导入电子表格</el-button>
                    </el-form-item>
                </div>

            </div>
        </el-form>

        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <div class="flexSpace alignEnd">
                <div class="left">
                    <el-form-item label="收件人姓名">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="收件人电话">
                        <el-input v-model="formLabelAlign.tel"></el-input>
                    </el-form-item>
                    <el-form-item label="订单ID">
                        <el-input v-model="formLabelAlign.orderId"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="formLabelAlign.goodId"></el-input>
                    </el-form-item>
                </div>
                <div class="flexEnd">
                    <el-form-item>
                        <el-button class="searchBtn" type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </div>

            </div>
        </el-form>

    </div>
    <div class="tableBox">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="订单ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="商品名称" width="180">
            </el-table-column>
            <el-table-column prop="address" label="规格">
            </el-table-column>
            <el-table-column prop="address" label="数量">
            </el-table-column>
            <el-table-column prop="address" label="订单类型">
            </el-table-column>
            <el-table-column prop="address" label="订单状态">
            </el-table-column>
            <el-table-column prop="address" label="订单金额">
            </el-table-column>
            <el-table-column prop="address" label="实收金额">
            </el-table-column>
            <el-table-column prop="address" label="收件地址">
            </el-table-column>
            <el-table-column prop="address" label="物流">
            </el-table-column>
            <el-table-column prop="address" label="备注">
            </el-table-column>
            <el-table-column prop="address" label="下单时间">
            </el-table-column>
            <el-table-column prop="address" label="售后信息">
            </el-table-column>
            <el-table-column prop="address" label="售后">
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
            tableData: [],
            formInline: {},
            formLabelAlign: {},
            panelDatas: [{
                name: '订单量（笔）',
                num: 0
            }, {
                name: '商品销量',
                num: 0
            }, {
                name: '订单金额',
                num: 0
            }, {
                name: '实收金额',
                num: 0
            }, {
                name: '退货订单量（笔）',
                num: 0
            }, {
                name: '退货商品量',
                num: 0
            }, {
                name: '退货金额',
                num: 0
            }, {
                name: '运费',
                num: 0
            }, ],
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
.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;

    .title {
        font-size: 22px;
        margin-bottom: 30px;
    }

    .eachTotalBox {
        .partTitle {
            font-size: 16px;
            margin-bottom: 16px;
        }

        .num {
            font-size: 22px;
            font-weight: bold;
        }
    }
}

.tableBox {
    background: #fff;
    padding: 39px 32px;
    margin-top: 20px;

}
</style>
