<!--  -->
<template>
<div class=''>
    <el-row :gutter="20">
        <!-- 订单量 -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>订单量</span>
                    <span class="num">{{orderData.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单量')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[0].date.length>0?searchOptions[0].date[0]+'至'+searchOptions[0].date[1]:'所有日期'}}</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click" @hide="val=>orderTypeChange(val,0)">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <p slot="reference" class="eachSearch">所有订单??????????????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择商品类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有商品???????</p>
                    </el-popover>
                </div>
                <div id="mycharts1" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 订单退货量 -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span>订单退货量</span>
                    <span class="num">{{returnCount.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单退货量')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[1].date.length>0?searchOptions[1].date[0]+'至'+searchOptions[1].date[1]:'所有日期'}}</p>
                    </el-popover>

                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有订单???????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有商品</p>
                    </el-popover>
                </div>
                <div id="mycharts2" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <!-- 订单金额 ￥ -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>订单金额</span>
                    <span class="num">￥{{orderPrice.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单金额')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[2].date.length>0?searchOptions[2].date[0]+'至'+searchOptions[2].date[1]:'所有日期'}}</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有订单???????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有商品</p>
                    </el-popover>
                </div>

                <div id="mycharts3" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 订单退货金额 ￥ -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span> 订单退货金额</span>
                    <span class="num">￥{{returnPrice.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单退货金额')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[3].date.length>0?searchOptions[3].date[0]+'至'+searchOptions[3].date[1]:'所有日期'}}</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有订单???????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有商品</p>
                    </el-popover>
                </div>
                <div id="mycharts4" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <!-- 实收金额 ￥ -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>实收金额</span>
                    <span class="num">￥{{price.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'实收金额')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[4].date.length>0?searchOptions[4].date[0]+'至'+searchOptions[4].date[1]:'所有日期'}}</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有订单???????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>

                        </div>
                        <p slot="reference" class="eachSearch">所有商品</p>
                    </el-popover>
                </div>
                <div id="mycharts5" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 订单取消量 -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span>订单取消量</span>
                    <span class="num">{{cancelOrderCount.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单取消量')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[5].date.length>0?searchOptions[5].date[0]+'至'+searchOptions[5].date[1]:'所有日期'}}</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <p slot="reference" class="eachSearch">所有订单???????</p>
                    </el-popover>
                    <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                        <div class="flexStart">
                            <el-checkbox-group v-model="checkList">
                                <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <p slot="reference" class="eachSearch">所有商品</p>
                    </el-popover>
                </div>
                <div id="mycharts6" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
    </el-row>

    <el-row :gutter="20">
        <!-- 运费成本 ￥ -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>运费成本</span>
                    <span class="num">￥{{expressPrice.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'运费成本')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[6].date.length>0?searchOptions[6].date[0]+'至'+searchOptions[6].date[1]:'所有日期'}}</p>
                    </el-popover>
                </div>
                <div id="mycharts7" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 订单取消量 -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span>订单取消金额</span>
                    <span class="num">{{cancelOrderCount.total}}</span>
                </p>
                <div class="searchBox flexStart">
                    <el-popover placement="top" width="400" trigger="hover">
                        <div class="eachSearch">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="val=>dataTimeChange(val,'订单取消金额')" />
                        </div>
                        <p slot="reference" class="eachSearch">{{searchOptions[7].date.length>0?searchOptions[7].date[0]+'至'+searchOptions[7].date[1]:'所有日期'}}</p>
                    </el-popover>
                </div>
                <div id="mycharts8" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import 'echarts/lib/chart/line'
import {
    getOrderNum,
    getReturnCount,
    getOrderPrice,
    getReturnPrice,
    getPrice,
    getCancelOrderCount,
    getExpressPrice,
    getCancelOrderPrice
} from '../../api/statistics/order'

import {
    orderTypeOptions
} from '../../utils/jsons'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            loading: '',
            dataTime: '',
            checkList: [],
            orderType: orderTypeOptions, //订单状态

            // 时间选择器
            pickerOptions2: {
                // 今天，昨天，这个月，上个月
                shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '这个月',
                        onClick(picker) {
                            const end = getCurrentMonthLast()
                            const start = getCurrentMonthFirst()
                            picker.$emit('pick', [start, end])

                            function getCurrentMonthFirst() {
                                var date = new Date()
                                //console.log(date)
                                date.setDate(1)
                                return date
                            }
                            // 获取当前月的最后一天
                            function getCurrentMonthLast() {
                                var date = new Date()
                                var currentMonth = date.getMonth()
                                var nextMonth = ++currentMonth
                                var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1)
                                var oneDay = 1000 * 60 * 60 * 24
                                return new Date(nextMonthFirstDay - oneDay)
                            }
                        }
                    },
                    {
                        text: '上个月',
                        onClick(picker) {
                            const end = gettimeEnd()
                            const start = gettimeStart()
                            picker.$emit('pick', [start, end])

                            function gettimeStart() {
                                const nowdays = new Date()
                                let year = nowdays.getFullYear()
                                let month = nowdays.getMonth()
                                if (month === 0) {
                                    month = 12
                                    year = year - 1
                                }
                                if (month < 10) {
                                    month = '0' + month
                                }
                                let firstDayOfPreMonth = year + '-' + month + '-' + '01'
                                firstDayOfPreMonth = firstDayOfPreMonth.toString()
                                return new Date(firstDayOfPreMonth)
                            }

                            function gettimeEnd() {
                                const nowdays = new Date()
                                let year = nowdays.getFullYear()
                                let month = nowdays.getMonth()
                                if (month === 0) {
                                    month = 12
                                    year = year - 1
                                }
                                if (month < 10) {
                                    month = '0' + month
                                }
                                const lastDay = new Date(year, month, 0)
                                let lastDayOfPreMonth = year + '-' + month + '-' + lastDay.getDate()
                                lastDayOfPreMonth = lastDayOfPreMonth.toString()
                                return new Date(lastDayOfPreMonth)
                            }
                        }
                    }
                ]
            },
            // 时间选择器  end
            orderData: {}, //订单量
            returnCount: {}, //订单退货量
            orderPrice: {}, //订单金额
            returnPrice: {}, //订单退货金额
            price: {}, // 实收金额
            cancelOrderCount: {}, //订单取消量 
            expressPrice: {}, //运费成本 
            cancelOrderPrice: {}, //  订单取消金额 

            searchOptions: [{
                title: '订单量',
                date: [],
            }, {
                title: '订单退货量',
                date: []
            }, {
                title: '订单金额',
                date: []
            }, {
                title: '订单退货金额',
                date: []
            }, {
                title: '实收金额',
                date: []
            }, {
                title: '订单取消量',
                date: []
            }, {
                title: '运费成本',
                date: []
            }, {
                title: '订单取消金额',
                date: []
            }, ]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        // 订单类型的筛选
        orderTypeChange(val,index){

        },
        // 日期的筛选
        dataTimeChange(val, title) {
            //console.log(title)
            let newDate = [];
            let that = this;
            val.map(i => {
                newDate.push(i.substr(0, 10))
            })
            this.searchOptions.map((i, j) => {
                if (i.title == title) {
                    i.date = newDate;
                    switch (j) {
                        case 0: //订单量 
                            this.getOrderNumFn(val);
                            break;
                        case 1: //订单退货量 
                            this.getReturnCountFn(val);
                            break;
                        case 2: //订单金额 
                            this.getOrderPriceFn(val);
                            break;
                        case 3: //订单退货金额 
                            this.getReturnPriceFn(val);
                            break;
                        case 4: //实收金额 
                            this.getPriceFn(val);
                            break;
                        case 5: //订单取消量 
                            this.getCancelOrderCountFn(val);
                            break;
                        case 6: //运费成本 
                            this.getExpressPriceFn(val);
                            break;
                        case 7: //订单取消金额
                            this.getCancelOrderCountFn(val);
                            break;
                    }
                }
            })
            //console.log(this.searchOptions)
        },
        // 获取订单量
        getOrderNumFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getOrderNum(json).then(res => {
                if (res.code == '00') {
                    this.orderData = res.data;
                    this.LineChart('mycharts1', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        // 订单退货量
        getReturnCountFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getReturnCount(json).then(res => {
                if (res.code == '00') {
                    this.returnCount = res.data;
                    this.LineChart('mycharts2', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        // 订单金额
        getOrderPriceFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getOrderPrice(json).then(res => {
                if (res.code == '00') {
                    this.orderPrice = res.data;
                    this.LineChart('mycharts3', res.data.xaxis, res.data.series, 'bar')
                }
            })
        },
        //  订单退货金额
        getReturnPriceFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getReturnPrice(json).then(res => {
                if (res.code == '00') {
                    this.returnPrice = res.data;
                    this.LineChart('mycharts4', res.data.xaxis, res.data.series, 'bar')
                }
            })
        },

        // 实收金额
        getPriceFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getPrice(json).then(res => {
                if (res.code == '00') {
                    this.price = res.data;
                    this.LineChart('mycharts5', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        // 订单取消量  
        getCancelOrderCountFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getCancelOrderCount(json).then(res => {
                if (res.code == '00') {
                    this.cancelOrderCount = res.data;
                    this.LineChart('mycharts6', res.data.xaxis, res.data.series, 'bar')
                }
            })
        },
        // 运费成本 
        getExpressPriceFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getExpressPrice(json).then(res => {
                if (res.code == '00') {
                    this.expressPrice = res.data;
                    this.LineChart('mycharts7', res.data.xaxis, res.data.series, 'bar')
                }
            })
        },
        // 订单取消金额  
        getCancelOrderPriceFn(date) {
            let json = {}
            if (date) {
                json.beginTime = date[0]
                json.endTime = date[1]
            }
            getCancelOrderPrice(json).then(res => {
                if (res.code == '00') {
                    this.cancelOrderPrice = res.data;
                    this.LineChart('mycharts8', res.data.xaxis, res.data.series, 'bar')
                }
            })
        },
        // ---------------------关于画图--------------------------

        // 绘制订单量图图
        serLineItem: function (type) {
            return {
                name: '',
                smooth: true,
                type: type,
                data: []
            }
        },
        // 绘制订单量图
        LineChart: function (ID, axisData, seriesData, type) {
            let colorList = ['#908BDF', '#F7C699', ];
            var myChart = this.$echarts.init(document.getElementById(ID));
            var newData = [];
            var legendData = [];
            for (var i = 0; i < seriesData.length; i++) {
                var lineItem = this.serLineItem(type);
                lineItem.name = seriesData[i].name;
                legendData.push(seriesData[i].name);
                lineItem.data = seriesData[i].value;
                lineItem.itemStyle = {
                    normal: {
                        color: '#275F82', //改变折线点的颜色
                        lineStyle: {
                            color: '#253A5D' //改变折线颜色
                        }
                    }
                }
                newData.push(lineItem);
            }
            var option = {
                title: {
                    text: '',
                    subtext: '',
                    x: 'left',
                    y: 'top'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legendData,
                    top: 0
                },
                toolbox: {
                    show: false,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axisData
                },
                yAxis: {
                    type: 'value'
                },
                series: newData
            };
            myChart.setOption(option, true);
            // myChart.dispose();

        },

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getOrderNumFn();
        this.getReturnCountFn();
        this.getOrderPriceFn();
        this.getReturnPriceFn();
        this.getPriceFn();
        this.getCancelOrderCountFn();
        this.getExpressPriceFn();
        this.getCancelOrderPriceFn()

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
.mycharts {
    height: 350px;

}

.chartBox {
    background: #fff;
    padding: 32px;
    box-sizing: border-box;
    margin-bottom: 20px;

    .title {
        margin-bottom: 20px;
        color: #000000;
        line-height: 28px;
        font-weight: bold;

        .num {
            margin-left: 20px;
        }
    }

    .searchBox {
        // margin-bottom: 20px;

    }

    .eachSearch {
        word-break: keep-all;
        color: #797979;
        font-size: 14px;
        margin-left: 10px;
        cursor: pointer;
        text-decoration: underline;
        margin-bottom: 20px;

    }

    .el-range-editor--mini.el-input__inner {
        width: 100%;
    }
}
</style>
