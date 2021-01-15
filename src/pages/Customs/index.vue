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
                <el-col :span="7">
                    <div class="grid-content bg-purple">
                        <el-form-item label="注册时间段">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" onPick="registerTimeChange" v-model="json.registerTime" type="datetimerange" placeholder="注册时间段">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">
                        <el-form-item label="最后登录时间段">
                            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="json.lastLoginTime" type="datetimerange" placeholder="最后登录时间段">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        <el-form-item label="客户组">
                            <el-select v-model="json.usergroup" placeholder="客户组">
                                <el-option v-for="(i,j) in groupList" :value="i.value" :label="i.text" :key="j"></el-option>
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
                            <el-button class="searchBtn" type="primary" @click="getList">查询</el-button>
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
                <template slot-scope="scope">
                    <p class="toDetail" @click="val=>getDetailFn(val,scope.row.id)">详情</p>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination flexCenter">
            <el-pagination background @size-change="handleSizeChange" layout="total, sizes, prev, pager, next, jumper" :current-page="json.pageNum" :total="pageData.totalSize">
            </el-pagination>
        </div>
    </div>
    <!-- 客户信息 -->
    <el-dialog title="客户信息" center :visible.sync="cusInfoShow" width="343px" class="cusInfoDialog">
        <div class="part part1">
            <div class="partConetnt">
                <div class="flexSpace each">
                    <label for="">客户ID</label>
                    <span class="value">{{targetObj.id}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">名称</label>
                    <span class="value">{{targetObj.nickname}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">电话</label>
                    <span class="value">{{targetObj.mobild}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">性别</label>
                    <span class="value">{{targetObj.gende==0?'未知':targetObj.gender==1?'男':'女'}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">用户组</label>
                    <span class="value">{{targetObj.usergroup}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">注册时间</label>
                    <span class="value">{{targetObj.regsterTime}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">生日</label>
                    <span class="value">{{targetObj.birthday}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">默认地址：</label>
                    <span class="value">{{targetObj.address}}</span>
                </div>
            </div>
        </div>
        <p class="partTitle">储值卡</p>

        <div class="part part2">
            <div class="partConetnt">
                <div class="flexSpace each">
                    <label for="">累计购买金额</label>
                    <span class="value">{{targetObj.czk}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">累计购买次数</label>
                    <span class="value">{{targetObj.czkcs}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">当前余额</label>
                    <span class="value">{{targetObj.sy}}</span>
                </div>
            </div>
        </div>
        <p class="partTitle">积分</p>
        <div class="part part3">
            <div class="partConetnt">
                <div class="flexSpace each">
                    <label for=""> 累计获得积分
                    </label>
                    <span class="value">{{targetObj.jf}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">剩余积分</label>
                    <span class="value">{{targetObj.syjf}}</span>
                </div>
            </div>
        </div>
        <p class="partTitle">消费</p>
        <div class="part part4 noBorder">
            <div class="partConetnt">
                <div class="flexSpace each">
                    <label for=""> 总消费金额 </label>
                    <span class="value">{{targetObj.consumption}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">消费次数</label>
                    <span class="value">{{targetObj.xfcs}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">最后消费时间</label>
                    <span class="value">{{targetObj.xftime}}</span>
                </div>
                <div class="flexSpace each">
                    <label for="">消费记录</label>
                    <span class="value">??????????</span>
                </div>
            </div>
        </div>
    </el-dialog>
    <!-- 客户消费记录 -->
</div>
</template>

<script>
import {
    list,
    total,
    getDetail
} from '../../api/customs/index'
import {
    customType
} from '../../utils/jsons'
export default {
    components: {},
    data() {
        return {
            cusInfoShow: false,
            pageData: {},
            groupList: customType,
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
                pageSize: 30,
                lastLoginTime: [],
                registerTime: [],
            },
        };
    },
    computed: {},
    watch: {},
    methods: {

        getList() {
            let that = this;
            let json = this.json;
            if (json.lastLoginTime && json.lastLoginTime.length > 0) {
                json.loginBegin = json.lastLoginTime[0];
                json.loginEnd = json.lastLoginTime[1];
            }
            if (json.registerTime && json.registerTime.length > 0) {
                json.regBegin = json.registerTime[0];
                json.regEnd = json.registerTime[1];
            }
            delete json.registerTime;
            delete json.lastLoginTime;

            list(json).then(res => {
                if (res.code == '00') {
                    this.tableData = res.data;
                    this.pageData = res.page;
                }
            })
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.json.pageNum = val;
            this.getList()
        },
        handleCurrentChange(val) {
            this.json.pageSize = val;
            this.getList()
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
        },
        // 查看详情
        getDetailFn(val, id) {
            this.cusInfoShow=true;
            getDetail(id).then(res => {
                if (res.code == '00') {
                    this.targetObj = res.data;
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

.toDetail {
    cursor: pointer;
    color: #2481FF;
    font-size: 14px;
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

.cusInfoDialog {
    /deep/ .el-dialog__body {
        padding-top: 0px !important;
    }

    .el-dialog__body {
        padding-top: 0px !important;
    }
.partTitle{
            padding: 20px 0 10px;
             border-bottom: 1px solid #E5E5E5;
             color: #666;
             font-size: 22px;
        }
    .part {
        padding-top:20px ; 
        font-size: 14px;
        line-height: 32px;
        border-bottom: 1px solid #E5E5E5;
        &.noBorder{
            border:none;
        }
        .each {
            margin-bottom: 20px;
        }

        label {
            color: #666;
        }

        .value {
            color: #333;
        }
    }
}
</style>
