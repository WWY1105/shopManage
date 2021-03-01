<!--  -->
<template>
<div class='header flexSpace bgf'>
    <h1 class="flagName">{{$store.state.meta.title}}</h1>
    <div class="userInfo flexEnd">
        <!-- <el-dropdown> -->
            <!-- <span class="el-dropdown-link">
                <div class="content flexCenter">
                    <img class="headerIcon shuoming" src="../assets/images/header/shuoming.png" />
                    <span class="iconText">操作说明</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
            </span> -->
            <!-- <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <div class="instructions">
                        <p>
                            在本页您可以设置管理店铺信息、为软件或分店续费，以及管理分店信息；
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                    </div>
                </el-dropdown-item>
            </el-dropdown-menu> -->
        <!-- </el-dropdown> -->
        <router-link class="contact flexCenter" :to="{path: '/contact'}">
            <img class="headerIcon kefu" src="../assets/images/header/kefu.png" />
            <span class="iconText">联系客服</span>
        </router-link>
        <router-link class="infos flexCenter" :to="{path: '/sysMsg'}">
            <img class="headerIcon info" src="../assets/images/header/info.png" />
            <span class="iconText">未读消息</span>
        </router-link>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                <div class="content flexCenter">
                    <img v-if="user.imgurl" class="user" :src="$imgurl+user.imgurl" alt="">
                    <img v-else src="../assets/images/header/user.png"  class="user" />
                    <span class="userName">{{user&&user.name?user.name:'未登录'}}</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
            </span>
            <div class="userBox">
                <el-dropdown-menu slot="dropdown" class="userDroupDown">
                    <el-dropdown-item :command="i.id" v-for="(i,j) in branch" :key="j">{{i.name}}</el-dropdown-item>
                    <!-- <el-dropdown-item>分店分店</el-dropdown-item> -->
                    <el-dropdown-item class="noBorder">
                        <p class="logoutText" @click="LogOut">退出登陆</p>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </div>
        </el-dropdown>
    </div>
</div>
</template>

<script>
import {
    setToken
} from '@/utils/auth'
import {
    changeShop
} from '../api/shops/index'
export default {
    components: {},
    data() {
        return {

        };
    },
    props: ['user','branch'],
    computed: {},
    watch: {},
    methods: {
        LogOut() {
            let that = this;
            this.$store.dispatch('LogOut', {}).then(res => {
                that.$router.push({
                    path: '/login'
                })
            })
        },
        // 切换门店
        handleCommand(val) {
            if(!val)return;
            let that=this;
            changeShop({
                businessId: val
            }).then(res => {
                if (res.code == '00') {
                    ////console.log(res)
                    if (res.data && res.data.access_token) {
                        setToken(res.data.access_token);
                        that.$router.go(0);
                    }
                }
            })
        }
    },
    created() {

    },
    computed: {
        // loginUser() {
        //     return this.user;
        // }
    },
    mounted() {
        ////console.log('头部获取')
        ////console.log(this.user)
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
.header {
    height: 80px;
    padding: 0 28px;

    h1 {
        color: #00B0F0;
        font-size: 22px;
    }

    .headerIcon {
        height: 15px;
        width: 15px;
        margin-right: 10px;
    }

    .iconText {
        color: #3C3C3C;
        font-size: 12px;
    }

    .contact {
        margin: 0 74px;
        cursor: pointer;
    }

    .infos {
        margin-right: 100px;
        cursor: pointer;
    }

    img {
        &.user {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%;
        }
    }

    .userName {
        color: #00B0F0;
    }

}

.instructions {
    max-width: 300px;
    font-size: 12px;
    font-weight: 400;
    color: #3C3C3C;
    line-height: 28px;

    p {
        line-height: 28px;
    }
}

.userDroupDown {
   &.el-dropdown-menu {
        width: 250px;
        text-align: left;
        top: 80px !important;
        right: 0 !important;
        left: unset !important;
        box-sizing: border-box;
        padding-left: 24px;

    }

  

    /deep/ .el-dropdown-menu__item {
        height: 40px;
        border-bottom: 1px solid #E6E6E6;
        line-height: 40px;
        color: #3C3C3C;
        font-size: 12px;
        padding-left: 0;

        &.noBorder {
            border: none
        }

        &:hover {
            background-color: #fff;
        }

        .logoutText {
            color: #FF1A1A;
            line-height: 60px;
        }
    }

   
}
</style>
