<!--  -->
<template>
<div class='login flexStart flexColumn'>
    <div class="content flexCenter flexColumn">
        <img src="../assets/images/login/mainLogo.png" alt="" class="mainLogo">
        <el-form>
            <div class="flexStart flexColumn">
                <el-form-item>
                    <el-input placeholder="账户"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="searchBtn loginBtn">登陆</el-button>
                </el-form-item>
                <el-form-item>
                    <p class="forgetPass">忘记密码 </p>
                </el-form-item>
            </div>
        </el-form>
    </div>
    <div class="footer flexSpace">
        <p>©2020 京ICP证00000000号 京公网安备00000000000000号</p>
        <div class="footBox flexCenter">
            <img src="../assets/images/login/footLogo.png" class="footLogo" alt="">
            <span class="line"></span>
            <img src="../assets/images/login/footErcode.png" class="footErcode" alt="">
        </div>

    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {

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
.login {
    // min-width: 100vw;
    height: 100%;
    background: url('../assets/images/login/loginBg.png')left center no-repeat;
    background-size: 100% 100%;

    .content {
        margin-top: 10%;
        width: 254px;

        .mainLogo {
            width: 144px;
            height: 89px;
            margin-bottom: 118px;
        }

        /deep/ .el-input__inner {
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
            opacity: 0.9;
            border-radius: 25px;
            text-align: center;
            width: 254px;
        }

        .loginBtn {
            width: 254px;
            border: none;
            margin-top: 100px;
        }

        .forgetPass {
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 16px;
            cursor: pointer;
        }
    }

    .footer {
        min-height: 116px;
        width: 100%;
        background-color: #000;
        position: fixed;
        left: 0;
        bottom: 0;
        font-size: 14px;
        color: #909090;
        line-height: 16px;
        box-sizing: border-box;
        padding:0 48px;
        .footLogo {
            width: 232px;
            height: 56px;
        }

        .line {
            width: 1px;
            height: 56px;
            background-color: #848484;
            display: inline-block;
            margin: 0 30px;
        }
        .footErcode{
            width: 59px;
            height: 59px;
            margin-right: 48px;
        }
    }

}
</style>
