<!--  -->
<template>
<div class='order'>
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
                        <div class="flexEnd">
                            <el-upload class="upload-demo" ref="upload" :action="$downloadFileApi+'/order/import?access_token='+token" :show-file-list="false">
                                <el-button class="transBtn">导入电子表格</el-button>
                            </el-upload>
                            <el-button class="transBtn">
                                <a :href="$downloadFileApi+'/order/export?access_token='+token" target="_blank">导出电子表格</a>
                            </el-button>
                        </div>
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
                    <p class="seeMore" @click="val=>showDiscountFn(val,scope.row.id)">优惠明细</p>
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
                    <p class="seeMore warning" v-else @click="val=>showLogisticsFn(val,scope.row.id)">填写</p>
                </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注">
            </el-table-column>
            <el-table-column prop="createTime" label="下单时间">
            </el-table-column>
            <el-table-column label="售后">
                <template slot-scope="scope">
                    <!-- v-if="scope.row.status==9" -->
                    <p class="seeMore warning">待处理</p>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexEnd">
            <el-pagination background layout="prev, pager, next" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>

    <!-- 物流信息 -->
    <el-dialog width="430px" :visible.sync="showLogistics" title="物流信息：">
        <div class="logisticsDialog">
            <el-form :inline="false" label-position="top" :model="logisticsForm" label-width="110px" ref="logisticsForm" :rules="logisticsRules">
                <el-form-item label="物流运营商">
                    <el-select v-model="logisticsForm.expName">
                        <el-option :value="i.expCode" :key="j" :label="i.expName" v-for="(i,j) in logisticsList"></el-option>
                    </el-select>
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

    <!--  优惠明细的弹窗 -->

    <el-dialog class="discountDialog" width="660px" :visible.sync="showDiscount">
        <div>
            <div class="part1">
                <div class="dialogTableBox">
                    <p class="tableTitle flexSpace">
                        <span>商品名称</span>
                        <span>规格</span>
                        <span>数量</span>
                        <span>原价￥</span>
                        <span>优惠价￥</span>
                        <span>小计￥</span>
                    </p>
                    <div class="tableData">
                        <p class="tableList flexSpace" :key="j" v-for="(i,j) in discountDetail.products" >
                            <span>{{i.name}}</span>
                            <span>{{i.itemText}}</span>
                            <span>{{i.quantity}}</span>
                            <span>原价￥</span>
                            <span>优惠价￥</span>
                            <span>小计￥</span>
                        </p>
                        <p class="tableList flexSpace">
                            <span>商品名称</span>
                            <span>规格</span>
                            <span>数量</span>
                            <span>原价￥</span>
                            <span>优惠价￥</span>
                            <span>小计￥</span>
                        </p>
                    </div>

                </div>
                <p class="eachList flexEnd">订单金额：<span class="num"> ￥{{discountDetail.totalPrice}}</span> </p>
            </div>
            <div class="part2">
                <p class="title">优惠明细：</p>
                <p class="eachList flexSpace"><span class="label">定金</span> <span>{{discountDetail.preferential.preSalePrice}}</span> </p>
                <p class="eachList flexSpace"><span class="label">满减优惠</span><span>{{discountDetail.preferential.fullForFree}}</span> </p>
                <p class="eachList flexSpace"><span class="label">抵用券（优惠券/预售券）</span><span>{{discountDetail.preferential.coupon}}</span> </p>
                <p class="eachList flexSpace"><span class="label">积分</span><span>{{discountDetail.preferential.jf}}</span> </p>
                <p class="eachList flexSpace"><span class="label">会员卡</span><span>{{discountDetail.preferential.vip}}</span> </p>
                <p class="eachList flexSpace"><span class="label">星卡通</span><span>{{discountDetail.preferential.xkt}}</span> </p>
                <p class="eachList flexSpace"><span class="label">储值卡（储值卡/礼品卡）</span><span>{{discountDetail.preferential.storedCard}}</span> </p>
            </div>
            <div class="part3 flexEnd">
                实收金额：<span class="num">
                    ￥{{discountDetail.payPrice}}
                </span>

            </div>
        </div>
    </el-dialog>

    <!-- 售后信息的弹窗 -->
    <el-dialog width="430px" class="afterSalesDialog" :visible.sync="showAfterSales" title="售后信息">
        <div class="dialogContent">
            <div class="part1">
                <p class="title">退款商品：</p>
                <div class="listBox">
                    <div class="eachList flexSpace">
                        <div>
                            <p> 商品名称</p>
                            <p> 规格1，规格2</p>
                        </div>
                        <span>x1</span>
                    </div>
                    <div class="eachList flexSpace">
                        <div>
                            <p> 商品名称</p>
                            <p> 规格1，规格2</p>
                        </div>
                        <span>x1</span>
                    </div>
                </div>
            </div>
            <div class="part2">
                <p class="eachList"> 退款金额：<span class="num">￥222</span></p>
                <div class="eachList"> 售后类型：退货退款</div>
                <div class="eachList">申请时间：2020-11-12 21:14:31</div>
                <div class="eachList desc">申请描述：这个不是我想要的，我以为是我以前在外地看
                    到过的那种，但很明显我想错了，帮我退货好不好，下次
                    我可以介绍朋友来买</div>

                <div class="eachList">图片：</div>
                <div class="picBox flexStart"></div>
            </div>
        </div>
    </el-dialog>

</div>
</template>

<script>
import {
    getToken
} from '@/utils/auth';
import {
    orderTypeOptions,
    orderStatusOptions
} from '../../utils/jsons'
import {
    getStatistics,
    getData,
    inputForm,
    outputForm,
    getLogistics,
    saveLogistics,
    getDiscount
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
            activeOid: "",
            logisticsList: [],
            showAfterSales: false, //售后弹窗
            showLogistics: false, //物流信息弹窗
            showDiscount: false, //优惠明细弹窗
            discountObj: {},
            tableData: [],
            formInline: {},
            formLabelAlign: {},
            panelDatas: [{
                name: '订单总量',
                num: 0
            }, {
                name: '订单总金额',
                num: 0
            }, {
                name: '今日订单量',
                num: 0
            }, {
                name: '今日订单金额',
                num: 0
            }, {
                name: '客单价',
                num: 0
            }, {
                name: '复购率',
                num: 0
            }],
            pageData: {},
            json: {
                pageNum: 1,
                pageSize: 30
            },
            // 1-创建,待支付,2-已支付,待发货,3-已支付,待成团,4-已成团-待发货,5-团失败,6-已发货,待确认收货,
            // 7-确认收货,待评价,8-已评价已完成,9-申请售后,10-售后同意,11-售后拒绝,12-已失效
            statusList: orderStatusOptions,

            // nor-普通,ys-预售,pt-拼团,ms-秒杀,kj-砍价,mfn-免费拿,xm-星秒
            orderTypeList: orderTypeOptions,
            discountDetail: {} //优惠明细
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 获取优惠明细
        showDiscountFn(val, id) {
            this.showDiscount = true;
            console.log(id)
            getDiscount({
                oid: id
            }).then(res => {
                if (res.code == '00') {
                    this.discountDetail = res.data;
                }
            })
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
                    this.pageData = res.page;
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
        showLogisticsFn(val, id) {
            this.showLogistics = true;
            this.activeOid = id
        },
        // 保存物流公司
        saveLogisticsFn() {
            let that = this;
            let json = this.logisticsForm;
            json.oid = this.activeOid;
            this.$refs.logisticsForm.validate((rules) => {
                if (rules) {
                    saveLogistics(json).then(res => {
                        if (res.code == '00') {
                            that.$message({
                                showClose: true,
                                message: '保存成功',
                                duration: 3 * 1000,
                                type: 'success'
                            })
                            that.getDataFn()
                        }
                    })
                }
            })

        },
        // 获取统计数据
        getStatisticsFn() {
            getStatistics({}).then(res => {
                if (res.code == '00') {
                    this.panelDatas = [{
                        name: '订单总量',
                        num: res.data.count
                    }, {
                        name: '订单总金额',
                        num: res.data.price
                    }, {
                        name: '今日订单量',
                        num: res.data.todayCount
                    }, {
                        name: '今日订单金额',
                        num: res.data.todayPrice
                    }, {
                        name: '客单价',
                        num: res.data.kdj
                    }, {
                        name: '复购率',
                        num: res.data.fgl
                    }]
                }
            })
        },
        // 点击去看图表
        toCharts() {
            this.$router.push({
                path: '/statistics/order'
            })
        }
    },
    created() {
        this.getDataFn();
        this.getLogisticsFn();
        this.getStatisticsFn()
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

        .transBtn {
            margin-left: 45px;
        }
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
    /deep/ .el-select {
        width: 100%;
    }

    .btnBox {
        margin-top: 50px;

        .el-button {
            width: 236px;
            margin-left: 0;

            &.searchBtn {
                margin-bottom: 35px;
            }
        }
    }
}

.upload-demo {
    margin-right: 45px;
}

.discountDialog {
    /deep/ .el-dialog__header {
        height: 0;
        border: none;
        padding: 0 !important;
    }

    /deep/ .el-dialog__body {
        padding-top: 50px !important
    }

    .dialogTableBox {
        margin-bottom: 35px;

        .tableTitle {
            color: #666666;
            font-size: 14px;
            margin-bottom: 16px;
        }

        .tableData {
            .tableList {
                span {
                    color: #000;
                    font-size: 14px;
                    line-height: 32px;
                    display: inline-block;
                    font-weight: bold;
                }
            }

        }
    }

    .part1,
    .part2 {
        border-bottom: 1px solid #E5E5E5;
        padding-bottom: 23px;
        margin-bottom: 16px;
    }

    .title {
        color: #666;
        font-size: 22px;
        margin-bottom: 10px;
    }

    .eachList {
       color: #333;
       font-size: 14px;
       span{
            line-height: 32px;
            &.label{
                 color: #666666;
        font-size: 16px;
            }
       }
        .num {
            color: #888888;
            font-size: 22px;
            font-weight: bold;
        }
    }

    .part3 {
        color: #666666;
        font-size: 14px;
        padding-bottom: 5px;

        .num {
            color: #FF1818;
            font-size: 22px;
            font-weight: bold;
        }
    }
}

.afterSalesDialog {
    /deep/ .el-dialog__body {
        padding-top: 0px !important
    }

    .part1 {
        padding: 16px 0 5px;
        border-bottom: 2px solid #C7C7C7;
        box-sizing: border-box;

        .title {
            color: #666666;
            font-size: 14px;
            margin-bottom: 24px;
        }

        .listBox {
            color: #000;
            font-size: 14px;

            .eachList {
                margin-bottom: 25px;

                p {
                    line-height: 22px;
                }
            }
        }
    }

    .part2 {
        color: #666666;
        font-size: 14px;
        padding-top: 38px;

        .eachList {
            line-height: 32px;

            &.desc {
                margin-top: 40px;
            }

            .num {
                color: #FF1818;
                font-size: 22px;
            }
        }
    }
}
</style>
