<!--  -->
<template>
<div class='reset'>
    <el-container>
        <el-header height="100px">
            <Header />
        </el-header>
        <el-main style="background:#fff;margin:20px;">
            <div class="center flexCenter">
                <!-- 富贵水果店【徐汇店】 的 -->
                <h2 class="title">您正在重设商户管理台登录密码</h2>
                <el-form label-position="left" :model="form" label-width="110px" ref="form" :rules="rules">
                    <el-form-item label="输入旧密码" prop="oldPassword">
                        <el-input placeholder="输入旧密码" show-password v-model="form.oldPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="输入新密码" prop="password">
                        <el-input placeholder="输入新密码" show-password v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码" prop="confirmPass">
                        <el-input placeholder="确认新密码" show-password v-model="form.confirmPass">
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="btnBox flexSpace">
                    <el-button class="cancelBtn" @click="back">取消</el-button>
                    <el-button class="searchBtn" @click="onSubmit">确认重设密码</el-button>
                </div>
            </div>
        </el-main>
    </el-container>
</div>
</template>

<script>
import { Message } from 'element-ui'
import Header from '@/components/Header'
import {
    reset
} from '../api/reset'
export default {
    components: {
        Header
    },
    data() {
        return {
            form: {
                password: '',
                oldPassword: '',
                confirmPass: ''
            },
            rules: {
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
                oldPassword: [{
                    required: true,
                    message: '请输入旧密码',
                    trigger: 'blur'
                }],
                confirmPass: [{
                    required: true,
                    message: '请输入确认密码',
                    trigger: 'blur'
                }],
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        back() {
            this.$router.push({
                path: "/login"
            })
        },
        onSubmit() {
            let that = this;
            this.$refs.form.validate((rules) => {

                if (rules) {
                    if (that.form.password != that.form.confirmPass) {
                        Message({
                            showClose: true,
                            message: '确认密码与新密码不一致，请重试',
                            duration: 3 * 1000,
                            type: 'error'
                        })
                        return;
                    }
                    reset({
                        password: that.form.password,
                        oldPassword: that.form.oldPassword
                    }).then((res) => {
                        Message({
                            showClose: true,
                            message: '重置成功',
                            duration: 3 * 1000,
                            type: 'success',
                            onClose:()=>{
                                that.back()
                            }
                        })
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            console.log('执行')
            // 
        }

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
.reset {
    height: 100vh;

    .center {
        flex-direction: column;

        .title {
            color: #FF2A2A;
            font-size: 20px;
            margin-bottom: 115px;
            margin-top: 150px;
        }

        /deep/ .el-input__inner {
            width: 375px;
            height: 60px;
            background: #E8E8E8;
            border: 1px solid #E8E8E8;
            border-radius: 30px;
        }

        /deep/ .el-form-item__label {
            line-height: 60px;
        }

        .el-form-item__label {
            line-height: 60px;
        }

        .btnBox {
            width: 475px;
            margin-top: 115px;

            .el-button {
                width: 202px;
                height: 60px;
                border-radius: 30px;
            }
        }
    }

}
</style>
