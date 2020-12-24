<!--  -->
<template>
<div class=''>
    <el-row :gutter="20">
        <el-col :span="16" class="chartBox bgf">
            <div id="mycharts" ref="chartBox">
                <span v-html="loading"></span>
            </div>
        </el-col>
        <el-col :span="8" class="bgf"></el-col>
    </el-row>
</div>
</template>

<script>
import 'echarts/lib/chart/line'
import {
    getOrderNum
} from '../../api/statistics/order'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            loading: '',
            orderData: {}
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        // 获取订单量
        getOrderNumFn() {
            getOrderNum({}).then(res => {
                if (res.code == '00') {
                    this.orderData = res.data;
                    this.LineChart('mycharts', '订单量:' + res.data.total, res.data.xaxis, res.data.series)
                }
            })
        },

        // 绘制订单量图图
        serLineItem: function () {
            return {
                name: '',
                smooth: true,
                type: 'line',
                data: []
            }
        },
        // 绘制订单量图
        LineChart: function (ID, title, axisData, seriesData) {
            let colorList=['#908BDF','#F7C699',];
            var myChart = this.$echarts.init(document.getElementById(ID));
            var newData = [];
            var legendData = [];
            for (var i = 0; i < seriesData.length; i++) {
                var lineItem = this.serLineItem();
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
                    text: title,
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
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        magicType: {
                            type: ['line', 'bar']
                        },
                        restore: {},
                        saveAsImage: {}
                    }
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
            myChart.setOption(option);

        },

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getOrderNumFn()
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
#mycharts {
    height: 350px;
}

.chartBox {
    padding: 32px;
}
</style>
