<!--  -->
<template>
<div class="customs">
    <div class="totalPanel">
        <p class="title flexStart"><span>数据汇总：</span>
            <el-button class="transBtn">查看图表</el-button>
        </p>
        <div class="panelBox flexSpace">
            <div class="eachTotalBox" v-for="(i,j) in panelDatas" :key="j">
                <p class="partTitle">{{i.name}}</p>
                <p class="num">￥{{i.num}}</p>
            </div>
        </div>
    </div>
    <div class="searchBox bgf">
        <el-form label-position="top" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="注册时间段">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss"  format="yyyy-MM-dd HH:mm:ss" v-model="json.registerTime" type="datetime" placeholder="注册时间段">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="最后登录时间段">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.lastLoginTime" type="datetime" placeholder="最后登录时间段">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="客户组">
                            <el-select v-model="json.usergroup" placeholder="客户组">
                                <el-option  v-for="(i,j) in groupList" :value="i.value" :label="i.text" :key="j"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
        </el-form>

        <el-form label-position="top">
            <el-row :gutter="20" type="flex" justify="space-between" align="bottom">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="用户昵称">
                            <el-input v-model="json.nickname" placeholder="用户昵称"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="用户ID">
                            <el-input v-model="json.user" placeholder="用户ID"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="邀请人昵称">
                            <el-input v-model="json.id" placeholder="邀请人昵称"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="邀请人ID">
                            <el-input v-model="json.inviterId" placeholder="邀请人ID"></el-input>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="4">
                    <div class="grid-content bg-purple flexEnd">
                        <el-form-item>
                            <el-button type="primary" @click="getList">查询</el-button>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>

        </el-form>
    </div>

    <div class="tableBox bgf">
        <el-table stripe :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="客户ID">
            </el-table-column>
            <el-table-column prop="imgurl" label="头像">
            </el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column prop="mobile" label="手机号"></el-table-column>
            <el-table-column prop="inviterId" label="邀请人ID"> </el-table-column>
            <el-table-column prop="inviterNickname" label="邀请人昵称"> </el-table-column>
            <el-table-column prop="registerTime" label="注册时间"> </el-table-column>
            <el-table-column prop="lastLoginTime" label="最后登录时间"> </el-table-column>
            <el-table-column prop="consumption" label="消费金额 "> </el-table-column>
            <el-table-column prop="balance" label="分销奖金"> </el-table-column>
            <el-table-column prop="yj" label="分享佣金"> </el-table-column>
            <el-table-column prop="type" label="客户类型"> </el-table-column>
            <el-table-column prop="address" label="备注"> </el-table-column>
            <el-table-column label="其他">
                <template>
                    <p class="tioDetail">详情</p>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
    list,
    total
} from '../../api/customs/index'
export default {
    components: {},
    data() {
        return {
              groupList: [{
                    text: '全部',
                    value: 'all'
                },
                {
                    text: '普通用户',
                    value: 'pt'
                }, {
                    text: '会员',
                    value: 'hy'
                }, {
                    text: '星卡通',
                    value: 'xkt'
                }
            ],
            panelDatas: [{
                name: '用户量',
                num: 0
            }, {
                name: '新增用户',
                num: 0
            }, {
                name: '活跃用户',
                num: 0
            }, {
                name: '下单用户',
                num: 0
            }, {
                name: '消费金额',
                num: 0
            }, {
                name: '客单价',
                num: 0
            }, {
                name: '分享奖金',
                num: 0
            }, {
                name: '分享佣金',
                num: 0
            }],
            formInline: {},
            formInline1: {},
            tableData: [],
            json: {
                pageNum: 1,
                pageSize: 30
            },
        };
    },
    computed: {},
    watch: {},
    methods: {

        getList() {
            let that = this;
            list(that.json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                }
            })
        },
        getTotal() {
            let that = this;
            total().then(res => {
                if (res.code == '00') {
                    this.panelDatas = [{
                        name: '用户量',
                        num: res.data.total
                    }, {
                        name: '新增用户',
                        num: res.data.newly
                    }, {
                        name: '活跃用户',
                        num: res.data.active
                    }, {
                        name: '下单用户',
                        num: res.data.orderUser
                    }, {
                        name: '消费金额',
                        num: res.data.xf
                    }, {
                        name: '客单价',
                        num: res.data.kd
                    }, {
                        name: '分享奖金',
                        num: res.data.fx
                    }, {
                        name: '分享佣金',
                        num: res.data.yj
                    }]

                }
            })
        }
    },
    created() {
        this.getList();
        this.getTotal()
    },
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.el-button.transBtn {
    padding: 11px 0;
    font-size: 16px;
}

.searchBox {
    padding: 28px 33px;
}

.tableBox {
    padding: 0 33px 30px;
}

.totalPanel {
    padding: 23px 36px;
    background-color: #fff;
    color: #2A3F54;
    margin-bottom: 20px;

    .title {
        font-size: 22px;
        margin-bottom: 30px;
    }

    .eachTotalBox {
        .partTitle {
            font-size: 16px;
            margin-bottom: 16px;
        }

        .num {
            font-size: 22px;
            font-weight: bold;
        }
    }
}
</style>
