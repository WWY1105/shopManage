<!--  -->
<template>
<div class='login flexStart flexColumn'>
    <div class="content flexCenter flexColumn">
        <img src="../assets/images/login/mainLogo.png" alt="" class="mainLogo">
        <el-form>
            <div class="flexStart flexColumn">
                <el-form-item>
                    <el-input placeholder="账户" v-model="username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" show-password v-model="password" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="searchBtn loginBtn" @click="onSubmit">登陆</el-button>
                </el-form-item>
                <el-form-item>
                    <router-link class="forgetPass" :to="{path:'/reset'}">忘记密码 </router-link>
                </el-form-item>
            </div>
        </el-form>
    </div>

</div>
</template>

<script>
import {
    login
} from '@/api/login'

export default {
    components: {},
    data() {
        return {
            username: '',
            password: ''
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 点击登录
        onSubmit() {
            let that = this;
           
            this.$store.dispatch('Login', {
                    client_id: 'business',
                    client_secret: '1234',
                    // auth_type: 'business',
                    grant_type: 'business',
                    username: this.username,
                    password: this.password
                 
                }).then(function (response) {
                    console.log(response);
                    if (response && response.access_token) {
                         that.$router.push({
                                path: '/'
                            })

                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

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
            font-size: 12px;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 16px;
            cursor: pointer;
        }
    }

}
</style>
