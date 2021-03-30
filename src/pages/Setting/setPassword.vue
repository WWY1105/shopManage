<template>
<div class="setPassword bgf">
    <div class="center flexCenter flexColumn bgf">
        <h2 class="title">您正在重设 富贵水果店【徐汇店】 的商户管理台登录密码</h2>
        <el-form label-position="left"  label-width="110px" ref="form">
            <el-form-item label="手机号" prop="mobile">
                <el-input placeholder="手机号" v-model="form.mobile "></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="smsCode">
                <div class="flexStart getCodeBox">
                    <el-input placeholder="验证码" v-model="form.smsCode "></el-input>
                    <span @click="getCodeTimer" :class="getCodeFlag?'getCode pointer':'getCode'">{{getCodeFlag?'已发送，'+time+'秒后可重发':'发送验证码'}}</span>
                </div>
            </el-form-item>
            <el-form-item label="输入新密码" prop="mobile">
                <el-input placeholder="输入新密码" v-model="form.password"></el-input>
            </el-form-item>

        </el-form>
        <div class="btnBox flexCenter">
            <el-button class="cancelBtn" @click="back">取消</el-button>
            <el-button class="searchBtn" @click="onSubmit">确认重设密码</el-button>
        </div>
    </div>
</div>
</template>

<script>
import {
    changePas
} from '@/api/setting/setPhone';
export default {
    data() {
        return {
            form: {},
            getCodeFlag:false
        }
    },
    methods: {
        getCodeTimer(){},
        back() {
            this.$router.push({
                path: "/setting"
            })
        },
        onSubmit() {
            if (!this.form.mobile) {
                this.$message({
                    showClose: true,
                    message: '请输入电话号码',
                    duration: 3 * 1000,
                    type: 'fail'
                })
                return;
            }
            if (!this.form.smsCode) {
                this.$message({
                    showClose: true,
                    message: '请输入验证码',
                    duration: 3 * 1000,
                    type: 'fail'
                })
                return;
            }
            if (!this.form.password ) {
                this.$message({
                    showClose: true,
                    message: '输入新密码',
                    duration: 3 * 1000,
                    type: 'fail'
                })
                return;
            }
            changePas(this.form).then(res => {
                if(res.code=='00'){
                     that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    this.back()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
.setPassword {
    height: 1000px;
    background: #fff;

    .center {
        flex-direction: column;

        .title {
            color: #FF2A2A;
            font-size: 22px;
            margin-bottom: 115px;
            margin-top: 150px;
            margin-left: 100px;
        }

        /deep/ .el-input__inner {
            width: 300px;
            height: 60px;
            background: #E8E8E8;
            border: 1px solid #E8E8E8;
            border-radius: 30px;
        }

        /deep/ .el-form-item__label {
            line-height: 30px;
        }

        .el-form-item__label {
            line-height: 60px;
        }

        .getCodeBox {
            position: relative;

            .getCode {
                margin-left: 33px;
                font-size: 14px;
                font-weight: 400;
                text-decoration: underline;
                color: #0078FF;
                cursor: pointer;
                word-break: keep-all;
                position: absolute;
                left: 380px;
                min-width: 200px;

                &.pointer {
                    color: #FF2A2A;
                    pointer-events: none;
                    word-break: keep-all;
                }
            }
        }

        .btnBox {
            width: 475px;
            margin-top: 115px;
            padding-left: 110px;

            .el-button {
                   width: 150px;
    height: 30px;
                border-radius: 30px;

                &.searchBtn {
                    // margin-bottom: 33px;
                }
            }
        }
    }

}
</style>
