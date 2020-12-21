<!--  -->
<template>
<div class='fullReductionDiscount'>
    <div class="bgf part1 flexSpace">
        <div class="left flexSpace">
            <div class="flexStart">
                <img src="../../../assets/images/sales/manjian.png" class="icon" alt="">
                <div class="textBox">
                    <h2>满减优惠规则设置</h2>
                    <p>除预售定金外，该规则适用于全部商品、订单<br>
                        在商品管理中勾选满减优惠即可
                    </p>
                </div>
            </div>
            <div class="switchBox flexEnd">
                <el-form label-position="top" :inline="true" class="demo-form-inline">
                    <el-form-item label="满减优惠模块开关">
                        <el-switch size="large" active-color="#00B0F0" inactive-color="#aaaaaa">
                        </el-switch>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="right flexStart">
            <div class="databox">
                <p class="title">数据汇总</p>
                <div class="flexStart">
                    <div class="eachData1">
                        <p class="dataTitle">优惠金额
                            <span class="dateTimePicker">全部日期</span>
                        </p>
                        <p class="num">{{discountData.total}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <p class="partTitle">优惠设定（最多3种）</p>

    <!-- 优惠列表 -->
    <div class="discountListBox">
        <el-row :gutter="20">
            <el-col :span="8" v-for="(i, j) in discountList" :key="j">
                <el-card :body-style="{ padding: '32px 28px 39px' }" shadow="hover">
                    <div class="eachDis">

                    </div>
                </el-card>
            </el-col>
            <!-- 添加按钮 -->
            <el-col :span="8">
                <el-card shadow="hover" class="addDis" :body-style="{borderRadius:'0',padding:'70px 30px 40px'}">
                    <div class="bgGray addDis flexCenter flexColumn" @click="edtiDisVisible=true">
                        <p class="addIcon">
                            <i class="el-icon-plus" size="50"></i>
                        </p>
                        <p class="addTips">添加新卡</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>

</div>
</template>

<script>
import {
    getData,
    deleteData,
    updateData,
    saveData
} from '../../../api/sales/fullReductionDiscount'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            discountData: {},
            discountList: []
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDataFn() {
            getData({}).then(res => {
                if (res.code == '00') {
                    this.discountList = res.data;
                }
            })
        },
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
.part1 {
    padding: 39px 67px;
    border: 1px solid #C7C7C7;

    .left {
        width: 50%;
        border-right: 1px solid #C3C3C3;
        padding-right: 5%;

        .el-form-item {
            margin: 0;
        }
    }

    .right {
        width: 50%;
        padding-left: 5%;

        .title {
            font-size: 22px;
            color: #2A3F54;
            margin-bottom: 39px;
        }

        .eachData1 {
            margin-right: 100px;
        }

        .dataTitle {
            font-size: 16px;
            color: #2A3F54;
            margin-bottom: 16px;
        }

        .num {
            font-size: 22px;
            font-weight: bold;
        }
    }

    .icon {
        width: 100px;
        height: 100px;
        margin-right: 35px;
    }

    .textBox {
        h2 {
            color: #00B0F0;
            font-weight: bold;
            font-size: 22px;
            margin: 0 0 20px;
        }

        p {
            color: #7E7E7E;
            font-size: 14px;
        }
    }
}

.discountListBox {

    margin-top: 20px;
}
</style>
