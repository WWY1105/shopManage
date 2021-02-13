<!--  -->
<template>
<div class=''>
    <el-row :gutter="20">
        <!-- 用户量 -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>用户量</span>
                    <span class="num">{{userCoun.total}}</span>
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
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 消费金额 -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span>消费金额</span>
                    <span class="num">{{XfUser.total}}</span>
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
                <div id="mycharts2" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <!-- 新增用户 ￥ -->
        <el-col :span="16">
            <div class="chartBox">
                <p class="title">
                    <span>新增用户</span>
                    <span class="num">￥{{newUserCount.total}}</span>
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

                <div id="mycharts3" ref="chartBox" class="mycharts">
                    <span v-html="loading"></span>
                </div>
            </div>
        </el-col>
        <!-- 客单价￥ -->
        <el-col :span="8">
            <div class="chartBox">
                <p class="title">
                    <span>客单价？？？</span>
                    <span class="num">￥</span>
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
                <div id="mycharts4" ref="chartBox" class="mycharts">
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
    getNewUserCount,
    getUserCount
} from '../../api/statistics/custom.js'

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
                                console.log(date)
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

            userCoun: {}, //用户量
            newUserCount: {}, // 新增用户
            productCount: {}, // 商品销量
            productReturnCount: {}, // 商品退货率
            XfUser: {}, //消费金额
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    created() {
        this.getNewUserCountFn()
        this.getProductCountFn()
        this.getProductReturnCountFn()
        this.getUserCountFn()
        this.getXfUserFn()
    },
    //方法集合
    methods: {
        dataTimeChange() {},
        // 获取新增用户
        getNewUserCountFn() {
            getNewUserCount({}).then(res => {
                if (res.code == '00') {
                    this.newUserCount = res.data;
                    this.LineChart('mycharts3', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        getProductCountFn() {
            getProductCount({}).then(res => {
                if (res.code == '00') {
                    this.productCount = res.data;
                    this.LineChart('mycharts1', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        getUserCountFn() {
            getUserCount({}).then(res => {
                if (res.code == '00') {
                    this.userCount = res.data;
                    this.LineChart('mycharts1', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        getProductReturnCountFn() {
            getProductReturnCount({}).then(res => {
                if (res.code == '00') {
                    this.productReturnCount = res.data;
                    this.LineChart('mycharts1', res.data.xaxis, res.data.series, 'line')
                }
            })
        },
        getXfUserFn() {
            getXfUser({}).then(res => {
                if (res.code == '00') {
                    this.xfUser = res.data;
                    this.LineChart('mycharts2', res.data.xaxis, res.data.series, 'line')
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
