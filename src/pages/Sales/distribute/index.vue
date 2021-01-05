<!--  -->
<template>
<div class='bgf'>
    <div class="content flexCenter flexColumn">
        <img src="../../../assets/images/sales/peisong.png" alt="" class="icon">
        <p class="title">配送设置</p>
        <p class="tips">
            如果您经营的是无需配送的服务类商品，可以关闭本模块开关
            如果您需要配送商品，打开开关然后设置包邮优惠规则
        </p>
        <div class="formBox flexCenter flexColumn">
            <el-form label-position="top" :inline="true" class="demo-form-inline">
                <el-form-item label="配送模块开关" class="firstSwitch">
                    <el-switch size="large" active-color="#00B0F0" inactive-color="#aaaaaa">
                    </el-switch>
                </el-form-item>
                <el-form-item label="包邮优惠规则">
                    <el-switch size="large" active-color="#00B0F0" inactive-color="#aaaaaa" v-model="distribute.used">
                    </el-switch>
                </el-form-item>
            </el-form>
            <el-form label-position="left" :inline="true" class="demo-form-inline">
                <div class="flexCenter inputBox">
                    <el-form-item label="包邮优惠规则">
                        <el-input v-model="distribute.fullPrice" type="number" min='0'></el-input>
                    </el-form-item>
                    <span>包邮</span>
                </div>
            </el-form>
        </div>
        <el-button class="searchBtn" @click="saveDataFn">确定</el-button>

    </div>
</div>
</template>

<script>
import {
    getData,
    saveData
} from '../../../api/sales/distribute'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            distribute: {
                fullPrice: 0,
                used: false
            }

        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDataFn() {
            getData().then(res => {
                if (res.code == '00') {
                    this.distribute = res.data;
                }
            })
        },
        saveDataFn() {
            let that=this;
            saveData(this.distribute).then(res => {
                if (res.code == '00') {
                    this.$message({
                        
                        showClose: true,
                        message: '保存成功',
                        duration: 3 * 1000,
                        type: 'success',
                        close: () => {
                            that.$router.go(-1)
                        }
                    })
                }
            })
        }
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
.content {
    .el-form-item {
        margin-bottom: 0;
        margin-right: 0;
    }

    padding: 56px 0;

    .icon {
        width: 100px;
        height: 100px;
        margin-bottom: 30px;
    }

    .title {
        margin-bottom: 20px;
        font-size: 22px;
        font-weight: bold;
        color: #00B0F0;
    }

    .tips {
        max-width: 379px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #7E7E7E;
        line-height: 18px;
    }

    .formBox {
        margin-bottom: 178px;
        margin-top: 60px;

        /deep/ .el-form-item {
            &.firstSwitch {
                margin-right: 88px;
            }

        }
    }

    .inputBox {

        margin-top: 60px;

        span {
            line-height: 60px;
            margin-left: 20px;
        }

        /deep/ .el-input__inner {
            width: 375px;
            height: 60px;
            background: #F4F4F4;
            border: 1px solid #E8E8E8;
            border-radius: 30px;

        }

        /deep/ .el-form-item__label {
            line-height: 60px;

        }
    }
}

.searchBtn {
    width: 202px;
    height: 60px;
    background: #00B0F0;
    border-radius: 30px;
    font-size: 22px;
}
</style>
