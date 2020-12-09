<!--  -->
<template>
<div class='editShop bgf'>
    <div class="content flexCenter flexColumn">
        <div class="logoBox flexCenter flexColumn">
            <img src="../../assets/images/header/user.png" class="logoImg" alt="">
            <p class="editText">修改头像</p>
        </div>
        <div class="formBox ">
            <el-form label-position="left" label-width="120px" :model="formLabelAlign" >
                <el-form-item label="公司名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="公司地址">
                    <el-input v-model="formLabelAlign.address"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formLabelAlign.tel"></el-input>
                </el-form-item>
                <el-form-item label="发票类型">
                    <el-select v-model="formLabelAlign.invoice">
                        <el-option v-for="item in invoices" :key="item.code" :label="item.text" :value="item.code">
                        </el-option>
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="营业行业">
                    <el-select v-model="formLabelAlign.invoice">
                        <el-option v-for="item in invoices" :key="item.code" :label="item.text" :value="item.code">
                        </el-option>
                    </el-select>
                </el-form-item> -->
            </el-form>
            <div class="btnBox flexCenter">
                <el-button class="searchBtn">确定</el-button>
            </div>

        </div>

    </div>

</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            invoices: [{
                    code: 1,
                    text: '不开发票'
                },
                {
                    code: 2,
                    text: '普票'
                },
                {
                    code: 3,
                    text: '专票与普票'
                }
            ],
            formLabelAlign: {}
        };
    },
    computed: {},
    watch: {},
    methods: {

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
//@import url(); 引入公共css类
.editShop {

    //min-height: 100%;
    /deep/ .el-form-item__label {
        line-height: 60px;
        color: #545454;
        font-size: 16px;
        padding-right: 23px;
    }

    .el-input,
    .el-select {
        width: 375px;
        height: 60px;
        background: #F4F4F4;
        border: 1px solid #E8E8E8;
        border-radius: 30px;
        line-height: 60px;

    }

    /deep/ .el-input__inner {
        background-color: transparent !important;
        border: none !important;
        text-align: center;
        color: #000;
        font-size: 16px;
        height: 60px;

    }

    padding: 56px 0 153px;

    .formBox {
        margin-left: -100px;
    }

    .logoBox {
        width: 378px;

        .logoImg {
            width: 100px;
            height: 100px;
            margin-bottom: 34px;
        }

        .editText {
            color: #00B0F0;
            font-size: 16px;
            margin-bottom: 30px;
        }
    }

    .btnBox {
        width: 378px;
        padding-left: 100px;
    }

    .searchBtn {
        margin-top: 125px;
        width: 200px;
        height: 60px;
        border-radius: 30px;
        font-size: 22px;
    }
}
</style>
