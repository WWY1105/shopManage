<!--  -->
<template>
<div class='sysMsg bgf flexCenter'>
    <!-- 商品营销 -->
    <div class="part  flexCenter flexColumn">
        <p class="chTitle">系统消息</p>
        <p class="enTitle">System message</p>
        <div class="content flexCenter">
            <div class="eachMsg flexCenter flexColumn" v-for="(i,j) in list" :key="j">
                <P class="textBox">
                    <span class="userName">天极星：</span>
                    <span class="sysContent">{{i.content}}</span>
                </P>
                <p class="date">{{i.createTime}}</p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    list
} from '@/api/contact/index'
export default {
    components: {},
    data() {
        return {
            list:[]
        };
    },
    computed: {},
    watch: {},
    methods: {
          getList() {
            let that = this;
            list().then(res => {
                if (res.code == '00') {
                    this.list = res.data;
                }
            })
        },
    },
    created() {
         this.getList()
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
.sysMsg {
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
            flex-direction: column;
            .eachMsg {
                background: #F4F4F4;
                border-radius: 10px;
                color: #757575;
                font-size: 16px;
                padding: 26px 33px 26px 18px;
                margin-bottom: 20px;
                line-height: 22px;
                width: 100%;
                .textBox{
                    width: 100%;
                }
                .sysContent {
                    line-height: 22px;
                    word-break: break-all;
                }

                .userName {
                    color: #00B0F0;
                }

                .date {
                    margin-top: 30px;
                    width: 100%;
                    text-align: right;
                }
            }

        }
    }
}
</style>
