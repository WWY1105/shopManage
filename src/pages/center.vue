<!--  -->
<template>
<div class='center bgf'>
    <div class="shopBox flexCenter flexColumn">
        <div class="tabBox">
            <div class="tabs flexCenter">
                <span class="eachTab" v-for="(i,j) in tabs" :key="j">
                    {{i.text}}
                </span>
            </div>
        </div>
        <div class="totalData flexSpace">
            <div class="eachData" v-for="(i,j) in totalData" :key="j">
                <p class="num"> {{i.value}} </p>
                <p> {{i.text}} </p>
            </div>
        </div>
    </div>
    <div class="dataBox">
        <el-row :gutter="20">
            <el-col :span="14" class="bgf"></el-col>
            <el-col :span="10" class="bgf"></el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            tabs: [{
                    text: '今日',
                    value: 0
                },
                {
                    text: '本周',
                    value: 0
                },
                {
                    text: '本月',
                    value: 0
                }, {
                    text: '今年',
                    value: 0
                }
            ],
            totalData: [{
                    text: '今日营收',
                    value: 0
                },
                {
                    text: '今日订单',
                    value: 0
                },
                {
                    text: '今日访客',
                    value: 0
                }, {
                    text: '新增用户',
                    value: 0
                }, {
                    text: '总营收额',
                    value: 0
                }, {
                    text: '总用户量',
                    value: 0
                }
            ],
            user: {}
        };
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {
        let state = {
            ...this.$store.state
        };
        this.user = state.user ? state.user : {};
        if (!this.user.mobild) {
            // this.$router.push({
            //     path: '/bindPhone'
            // })
        }
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
.shopBox {
    padding: 20px 80px 30px;

    .tabBox {
        margin-bottom: 46px;
        font-size: 18px;
        font-weight: 400;
        color: #000000;
        line-height: 28px;

        .eachTab {
            padding: 0 40px;
        }
    }

    .totalData {
        width: 100%;

        .eachData {
            text-align: center;
            border-right: 1px solid #B9B9B9;
            font-size: 16px;
            font-weight: 400;
            color: #000000;
            width: 16.6%;

            &:last-child {
                border: none;
            }

            &.active {
                color: #00B0F0;
            }

            .num {
                font-size: 28px;
                font-weight: bold;

                margin-bottom: 25px;
            }
        }
    }
}
</style>
