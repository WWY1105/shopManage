<!--  -->
<template>
<div class='contact bgf flexCenter'>
    <div class="part  flexCenter flexColumn">
        <p class="chTitle">联系我们</p>
        <p class="enTitle">我们会尽快给您回复</p>
        <div class="content flexStart">
            <div class="eachMsg flexCenter flexColumn">
                <P class="flexStart alignStart">
                    <img src="" alt="" class="userImg">
                    <span class="userName">天极星：</span>
                    <span class="sysContent">尊敬的商户用户您好，平台将于2020年12月12日凌晨2:00至4:00进行服务器升级，届时平台服务会暂停服
                        务，对您造成的不便敬请理解，谢谢！</span>
                </P>
                <p class="date">2020-12-14 21:00:00</p>
            </div>
        </div>
        <div class="sendBox flexEnd">
            <el-input type="textarea" rows="9" placeholder="请输入留言" resize="none" style="background-color: #F4F4F4"></el-input>
            <el-button class="searchBtn">发送</el-button>
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
//@import url(); 引入公共css类
.contact {
    min-height: 100%;
    align-items: flex-start;

    .part {
        margin-bottom: 20px;
        padding: 34px 35px 50px;
        width: 970px;
        box-sizing: border-box;

        .chTitle {
            font-size: 30px;
            font-weight: bold;
            color: #0091C6;
            margin-bottom: 10px;
        }

        .enTitle {
            font-size: 12px;
            font-weight: 400;
            color: #0091C6;
        }

        .content {
            width: 100%;
            margin-top: 38px;
            min-height: 674px;
            align-items: flex-start;

            .eachMsg {
                background: #F4F4F4;
                border-radius: 10px;
                color: #757575;
                font-size: 16px;
                padding: 26px 33px 26px 18px;
                margin-bottom: 20px;
                line-height: 22px;

                .sysContent {
                    line-height: 22px;
                }

                .userName {
                    color: #00B0F0;
                    word-break: keep-all;
                }

                .date {
                    margin-top: 30px;
                    width: 100%;
                    text-align: right;
                }
            }

        }

        .sendBox {
            width: 100%;
            height: 280px;
            background: #F4F4F4;
            border-radius: 10px;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-around;
            padding: 27px 18px;
            box-sizing: border-box;
        }
    }

}

.el-textarea {
    background-color: #F4F4F4 !important;
    border: none !important;

    /deep/ textarea.el-textarea__inner {
        background: #F4F4F4 !important;
        border: none !important;
    }

    textarea.el-textarea__inner {
        background: #F4F4F4 !important;
        border: none !important;
    }
}
</style>
