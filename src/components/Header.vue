<!--  -->
<template>
<div class='header flexSpace'>
    <h1 class="flagName">商户管理控制台</h1>
    <div class="userInfo flexEnd">
        <el-dropdown>
            <span class="el-dropdown-link">
                <div class="content flexCenter">
                    <img class="headerIcon shuoming" src="../assets/images/header/shuoming.png" />
                    <span class="iconText"> 操作说明</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <span class="iconText"> 操作说明</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="contact flexCenter">
            <img class="headerIcon kefu" src="../assets/images/header/kefu.png" />
            <span class="iconText">联系客服</span>
        </div>
        <div class="infos flexCenter">
            <img class="headerIcon info" src="../assets/images/header/info.png" />
            <span class="iconText">未读消息</span>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                <div class="content flexCenter">
                    <img class="user" src="../assets/images/header/user.png" />
                    <span class="userName">上海施德劳通风设备有限公司</span>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
            </span>
            <div class="userBox">
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>分店分店</el-dropdown-item>
                    <el-dropdown-item>分店分店</el-dropdown-item>
                    <el-dropdown-item>
                        <p class="logoutText">退出登陆</p>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </div>
        </el-dropdown>
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
.header {
    height: 100px;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.11);
    padding: 0 28px;

    h1 {
        color: #00B0F0;
        font-size: 27px;
    }

    .headerIcon {
        height: 28px;
        width: 28px;
        margin-right: 10px;
    }

    .iconText {
        color: #3C3C3C;
        font-size: 14px;
    }

    .contact {
        margin: 0 74px;
    }

    .infos {
        margin-right: 100px;
    }

    img {
        &.user {
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
    }

    .userName {
        color: #00B0F0;
    }

}

 /deep/ .userBox {
    /deep/ .el-dropdown-menu {
        width: 304px;
        text-align: center;
        top: 100px;
        right: 0 !important;
        left: unset !important;
        padding: 0 24px;
        box-sizing: border-box;

        /deep/ .el-dropdown-menu__item {
            height: 60px;
            border-bottom: 1px solid #E6E6E6;
            line-height: 60px;
            color: #3C3C3C;
            font-size: 14px;

            &:hover {
                background-color: #fff;
            }

            .logoutText {
                color: #FF1A1A;
                line-height: 60px;
            }
        }
    }
}
</style>
