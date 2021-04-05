<!--  -->
<template>
<div class='center '>
    <div class="currentShop flexStart bgf">
        <img :src="$imgurl+user.imgurl" alt="">
        <p>{{user.name}}</p>
    </div>
    <div class="shopBox flexCenter flexColumn bgf">
        <div class="tabBox">
            <div class="tabs flexCenter">
                <span class="eachTab" v-for="(i,j) in tabs" :key="j">
                    {{i.text}}
                </span>
            </div>
        </div>
        <div class="totalData flexSpace">
            <div class="eachData" v-for="(i,j) in totalData" :key="j">
                <p class="num"> {{i.value}} </p>
                <p> {{i.text}} </p>
            </div>
        </div>
    </div>
    <div class="dataBox">
        <el-row :gutter="20">
            <!-- 订单量 -->
            <el-col :span="16">
                <div class="chartBox">
                    <p class="title">
                        <span>订单量</span>
                        <span class="num">{{orderData.total}}</span>
                    </p>
                    <div class="searchBox flexStart">
                        <div class="eachSearch">
                            <el-date-picker v-model="dataTime" type="daterange" align="right" size="mini" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" @change="dataTimeChange" />
                        </div>
                        <el-popover placement="top-start" title="请选择订单类型" width="200" trigger="click">
                            <div class="flexStart">
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox :label="i.text" :key="j" v-for="(i,j) in orderType" :value="i.value">{{i.text}}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                            <p slot="reference" class="eachSearch">所有订单</p>
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
                    <div id="mycharts1" ref="chartBox" class="mycharts">

                    </div>
                </div>
            </el-col>
            <!-- 订单退货量 -->
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</div>
</template>

<script>
import 'echarts/lib/chart/line'
import {
    getOrderNum
} from '../api/statistics/order'
import {
    getStatic
} from '../api/shops/index'
import {
    orderTypeOptions
} from '../utils/jsons'
export default {
    components: {},
    data() {
        return {
            tabs: [{
                    text: '今日',
                    value: 0
                },
                {
                    text: '本周',
                    value: 0
                },
                {
                    text: '本月',
                    value: 0
                }, {
                    text: '今年',
                    value: 0
                }
            ],
            totalData: [{
                    text: '今日营收',
                    value: 0
                },
                {
                    text: '今日订单',
                    value: 0
                },
                {
                    text: '今日访客',
                    value: 0
                }, {
                    text: '新增用户',
                    value: 0
                }, {
                    text: '总营收额',
                    value: 0
                }, {
                    text: '总用户量',
                    value: 0
                }
            ],
            user: {},
            dataTime: '',
            orderType: orderTypeOptions, //订单状态
            checkList: [],
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

        };
    },
    computed: {},
    watch: {},
    methods: {
        // 获取统计数据 ??? 参数没给
        getStaticFn(){
            getStatic().then(res=>{

            })
        },
        // 时间改变
        dataTimeChange(val) {

        },
        // 获取订单量
        getOrderNumFn() {
            getOrderNum({orderType:''}).then(res => {
                if (res.code == '00') {
                    this.orderData = res.data;
                    this.LineChart('mycharts1', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        // 获取用户信息
        getUserInfo() {
            let that = this;
            that.$store.dispatch('GetInfo').then((res) => {
                if (res.code == '00') {
                    this.user = res.data;
                    if (!res.data.mobile) {
                        // 测试
                        // that.$router.push({
                        //     path: '/bindPhone'
                        // })
                    }
                    // 获取品牌
                    that.$store.dispatch('Branch').then((res) => {
                        //console.log(res)

                    })

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
                    show: false
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
    created() {
        this.getUserInfo();
        this.getOrderNumFn();
        this.getStaticFn()
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
//@import url(); 引入公共css类
.shopBox {
    padding: 20px 80px 30px;
    margin-bottom: 20px;

    .tabBox {
        margin-bottom: 46px;
        font-size: 16px;
        font-weight: 400;
        color: #000000;
        line-height: 28px;

        .eachTab {
            padding: 0 40px;
        }
    }

    .totalData {
        width: 100%;

        .eachData {
            text-align: center;
            border-right: 1px solid #B9B9B9;
            font-size: 14px;
            font-weight: 400;
            color: #000000;
            width: 16.6%;

            &:last-child {
                border: none;
            }

            &.active {
                color: #00B0F0;
            }

            .num {
                font-size: 24px;
                font-weight: bold;

                margin-bottom: 25px;
            }
        }
    }
}

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

.currentShop {
    padding: 30px 40px;
    color: #00B0F0;
    font-size: 22px;
   margin-bottom: 20px;
    img {
        width: 60px;
        height: 60px;
        margin-right: 26px;
        border-radius: 50%;
    }
}
</style>
