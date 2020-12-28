<!--  -->
<template>
<div class='order'>
    <div class="totalPanel">
        <p class="title">数据汇总：</p>
        <div class="panelBox flexSpace">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">{{i.num}}</p>
            </div>
        </div>
    </div>
    <div class="tableBox">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <div class="flexSpace alignEnd searchTopBox">
                <div class="left">
                    <el-form-item label="订单状态">
                        <el-select v-model="formInline.status" placeholder="订单状态">
                            <el-option :label="i.text" :value="i.value" v-for="(i,j) in statusList" :key="j"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单类型">
                        <el-select v-model="formInline.sellType" placeholder="订单类型">
                            <el-option :label="i.text" :value="i.value" v-for="(i,j) in orderTypeList" :key="j"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="筛选时间段">
                        <el-date-picker arrow-control value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.time" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </div>
                <div class="flexEnd">
                    <el-form-item>
                        <el-button class="transBtn" @click="inputFormFn">导入电子表格</el-button>
                        <el-button class="transBtn">
                            <a :href="$downloadFileApi+'/order/export?access_token='+token" target="_blank">导出电子表格</a>
                        </el-button>
                    </el-form-item>
                </div>

            </div>
        </el-form>

        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <div class="flexSpace alignEnd">
                <div class="left">
                    <el-form-item label="收件人姓名">
                        <el-input v-model="json.name"></el-input>
                    </el-form-item>
                    <el-form-item label="收件人电话">
                        <el-input v-model="json.mobild"></el-input>
                    </el-form-item>
                    <el-form-item label="订单ID">
                        <el-input v-model="json.id"></el-input>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="json.productName"></el-input>
                    </el-form-item>
                </div>
                <div class="flexEnd">
                    <el-form-item>
                        <el-button class="searchBtn" type="primary" @click="getDataFn">查询</el-button>
                    </el-form-item>
                </div>

            </div>
        </el-form>

    </div>
    <div class="tableBox">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="订单ID">
            </el-table-column>
            <el-table-column prop="productName" label="商品名称">
                <template slot-scope="scope">
                    <p class="eachProduct" v-for="(i,j) in scope.row.products" :key="j">{{i.name}}</p>
                </template>
            </el-table-column>
            <el-table-column label="规格">
                <template slot-scope="scope">
                    <p class="eachProduct" v-for="(i,j) in scope.row.products" :key="j">{{i.itemText}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="数量">
                <template slot-scope="scope">
                    <p class="eachProduct" v-for="(i,j) in scope.row.products" :key="j">{{i.quantity}}</p>
                </template>
            </el-table-column>
            <el-table-column prop="sellType" label="订单类型">
            </el-table-column>
            <el-table-column prop="status" label="订单状态">
            </el-table-column>
            <el-table-column prop="totalPrice" label="订单金额">
            </el-table-column>
            <el-table-column prop="payPrice" label="实收金额">
                 <template slot-scope="scope">
                    <p class="seeMore"  @click="showDiscount=true">优惠明细</p>
                </template>
            </el-table-column>
            <el-table-column prop="detailAddress" label="收件地址">
                <template slot-scope="scope">
                    <p>{{scope.row.name}} {{scope.row.mobile}}</p>
                    <p>{{scope.row.detailAddress}}</p>
                </template>
            </el-table-column>
            <el-table-column label="物流">
                <template slot-scope="scope">
                    <p class="seeMore" v-if="scope.row.expNum" @click="showLogistics=true">查看</p>
                    <p class="seeMore warning" v-else @click="showLogistics=true">填写</p>
                </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注">
            </el-table-column>
            <el-table-column prop="createTime" label="下单时间">
            </el-table-column>
            <el-table-column label="售后信息">
                <template slot-scope="scope">
                    <p class="seeMore" @click="val=>shouhou(val,scope.row.index)">查看</p>
                </template>
            </el-table-column>
            <el-table-column label="售后">
            </el-table-column>
        </el-table>
    </div>

    <!-- 物流信息 -->
    <el-dialog width="430px" :visible.sync="showLogistics" title="物流信息：">
        <div class="logisticsDialog">
            <el-form :inline="false" label-position="top" :model="logisticsForm" label-width="110px" ref="logisticsForm" :rules="logisticsRules">
                <el-form-item label="物流运营商">
                    <el-select v-model="logisticsForm.expName"></el-select>
                </el-form-item>
                <el-form-item label="物流编号">
                    <el-input v-model="logisticsForm.expNum"></el-input>
                </el-form-item>
                <div class="btnBox flexCenter flexColumn">
                    <el-button class="searchBtn" @click="saveLogisticsFn">保存</el-button>
                    <el-button class="transBtn" @click="showLogistics=false">取消</el-button>
                </div>
            </el-form>
        </div>
    </el-dialog>


    // 优惠明细的弹窗
    
    <el-dialog width="430px" :visible.sync="showDiscount" title="优惠明细:">
        <div class="discountDialog">

        </div>
    </el-dialog>


</div>
</template>

<script>
import {
    getToken
} from '@/utils/auth';
import {orderTypeOptions,orderStatusOptions} from '../../utils/jsons'
import {
    getData,
    inputForm,
    outputForm,
    getLogistics,
    saveLogistics
} from '../../api/order/index'
export default {
    components: {},
    data() {
        return {
            token: getToken(),
            logisticsForm: {
                expName: '',
                expNum: ''
            },
            logisticsRules: {
                expName: [{
                    required: true,
                    message: '请输入物流公司',
                    trigger: 'blur'
                }],
                expNum: [{
                    required: true,
                    message: '请输入物流编号',
                    trigger: 'blur'
                }]
            },
            logisticsList: [],
            showLogistics: false, //物流信息弹窗
            showDiscount:false,//优惠明细弹窗
            discountObj:{},
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
            }],
            json: {
                pageNum: 1,
                pageSize: 30
            },
            // 1-创建,待支付,2-已支付,待发货,3-已支付,待成团,4-已成团-待发货,5-团失败,6-已发货,待确认收货,
             // 7-确认收货,待评价,8-已评价已完成,9-申请售后,10-售后同意,11-售后拒绝,12-已失效
            statusList: orderStatusOptions,
            
            // nor-普通,ys-预售,pt-拼团,ms-秒杀,kj-砍价,mfn-免费拿,xm-星秒
            orderTypeList:orderTypeOptions
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 导入
        inputFormFn() {

            // inputForm
        },
        // 获取表格信息
        getDataFn() {
            let that = this;
            if (that.json.time && that.json.time.length > 0) {
                that.json.beginTime = that.json.time[0]
                that.json.endTime = that.json.time[1]
            }
            delete that.json.time;
            getData(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        },
        // 物流公司
        getLogisticsFn() {
            getLogistics
            let that = this;
            delete that.json.time;
            getLogistics({}).then(res => {
                if (res.code == '00') {
                    this.logisticsList = res.data;
                }
            })
        },
        // 保存物流公司
        saveLogisticsFn() {
            this.$refs.logisticsForm.validate((rules) => {
                if (rules) {
                    // saveLogistics(this.logisticsForm).then
                }
            })

        }
    },
    created() {
        this.getDataFn();
        this.getLogisticsFn()
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
.order {
    //min-height: 100%;
}

.searchTopBox {
    .left {
        flex: 1
    }

}

.seeMore {

    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    text-decoration: underline;
    color: #007EFF;

    .warning {
        color: #FF2727;
    }
}

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

.logisticsDialog {
   /deep/ .el-select{
        width: 100%;
    }
    .btnBox{
        margin-top: 50px;
        .el-button{
            width: 236px;
            margin-left: 0;
            &.searchBtn{
                margin-bottom: 35px;
            }
        }
    }
}
</style>
