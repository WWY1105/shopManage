<!--  -->
<template>
<div class='setPhone'>
    <div class="center flexCenter bgf">
        <h2 class="title">修改更换手机号</h2>
        <el-form label-position="left" :model="form" label-width="110px" ref="form" :rules="rules">
            <el-form-item label="当前手机号" prop="mobile">
                <el-input placeholder="当前手机号" v-model="form.mobile "></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="smsCode">
                <div class="flexStart getCodeBox">
                    <el-input placeholder="验证码" v-model="form.smsCode "></el-input>
                    <span @click="getCodeTimer" :class="getCodeFlag?'getCode pointer':'getCode'">{{getCodeFlag?'已发送，'+time+'秒后可重发':'发送验证码'}}</span>
                </div>
            </el-form-item>
            <el-form-item label="新手机号" prop="mobile">
                <el-input placeholder="新手机号" v-model="form.mobile "></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="smsCode">
                <div class="flexStart getCodeBox">
                    <el-input placeholder="验证码" v-model="form.smsCode "></el-input>
                    <span @click="getCodeTimer" :class="getCodeFlag?'getCode pointer':'getCode'">{{getCodeFlag?'已发送，'+time+'秒后可重发':'发送验证码'}}</span>
                </div>
            </el-form-item>
        </el-form>
        <div class="btnBox flexCenter flexColumn">
            <el-button class="searchBtn" @click="onSubmit">确认绑定</el-button>
            <el-button class="cancelBtn" @click="back">取消</el-button>
        </div>
    </div>

</div>
</template>

<script>
import {
    bindPhone
} from '../../api/setting/setPhone';
// 验证手机 
let checkPhone = (rule, value, callback) => {
    let reg = /^1[345789]\d{9}$/
    if (!reg.test(value)) {
        callback(new Error('请输入11位手机号'))
    } else {
        callback()
    }
}
export default {
    components: {},
    data() {
        return {
            getCodeFlag: false,
            time: 0,
            form: {
                mobile: '',
                smsCode: ''
            },
            rules: {
                mobile: [{
                    required: true,
                    validator: checkPhone,
                    message: '请输入11位有效手机号号码',
                    trigger: ['blur']
                }],
                smsCode: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }]
            }
        };
    },
    computed: {},
    watch: {},
    methods: {
        checkPhone(value) {
            let reg = /^1[345789]\d{9}$/
            if (!reg.test(value)) {

                return false;
            } else {
                return true;
            }
        },
        getCodeTimer() {
            if (this.checkPhone(this.form.mobile)) {
                let num = 60;
                let getCodeFlag = this.getCodeFlag;

                let timer = setInterval(() => {
                    if (num <= 0) {
                        clearInterval(timer);
                        this.getCodeFlag = false;
                    } else {
                        num--;
                        this.getCodeFlag = true;
                        this.time = num;
                    }
                }, 1000)
            }
        },
        back() {
            this.$router.push({
                path: "/login"
            })
        },
        onSubmit() {
            let that = this;
            this.$refs.form.validate((rules) => {
                if (rules) {
                    bindPhone(this.form).then((res) => {
                        Message({
                            showClose: true,
                            message: '设置成功',
                            duration: 3 * 1000,
                            type: 'success',
                            onClose: () => {
                                that.$router.push({
                                    path: "/login"
                                })
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
.setPhone {
    height: 100vh;

    .center {
        flex-direction: column;

        .title {
            color: #FF2A2A;
            font-size: 22px;
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

        .getCodeBox {
            position: relative;

            .getCode {
                margin-left: 33px;
                font-size: 16px;
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
                width: 202px;
                height: 60px;
                border-radius: 30px;

                &.searchBtn {
                    margin-bottom: 33px;
                }
            }
        }
    }

}
</style>
