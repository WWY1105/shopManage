<!--  -->
<template>
<div class='shops'>
    <div class="mainShopInfo flexCenter bgf">
        <img v-if="shopInfo.imgurl" :src="$imgurl+shopInfo.imgurl" class="logo" alt="">
        <img v-else src="../../assets/images/header/user.png" class="logo" alt="">
        <p class="shopName">{{shopInfo.name}}</p>
        <div class="otherText">
            <p>公司名称：{{shopInfo.name}}</p>
            <p>公司地址：{{shopInfo.address}}</p>
            <p>联系电话：{{shopInfo.tel}}</p>
            <p>发票类型：{{shopInfo.invoice==1?'不开发票':shopInfo.invoice==2?'普票':shopInfo.invoice==3?'专票与普票':''}}</p>
        </div>
        <div class="flexCenter">
            <el-button class="transBtn flexCenter xiugaiBtn">
                <router-link :to="{name:'editShop'}">
                    <img src="../../assets/images/shops/editIcon.png" class="editIcon" alt="">
                    <span> 修改</span>
                </router-link>
            </el-button>
            <el-button class="transBtn" @click="toSetting">账户设置</el-button>
        </div>
    </div>

    <div class="shopPartInfo bgf flexSpace">
        <div class="eachInfo flexCenter ">
            <img src="../../assets/images/shops/haohua.png" class="icon" alt="">
            <p class="title">天极星 {{shopInfo.memberLevel}}</p>
            <p class="desc">已激活 有效期至{{shopInfo.memberExpireTime}}</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn" @click="showTipsDialog=true">续费</el-button>
                <!-- <el-button class="transBtn" @click="toSetting">账户设置</el-button> -->
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/zijin.png" class="icon" alt="">
            <p class="title">资金账户</p>
            <p class="desc">￥{{shopInfo.balance}}</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn" @click="goCapitalRecharge">充值 </el-button>
                <el-button class="transBtn">资金明细</el-button>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/edu.png" class="icon" alt="">
            <p class="title">分店额度</p>
            <p class="desc">{{shopInfo.branchCount}}</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn" @click="showTipsDialog=true">扩充</el-button>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/sales/peisongIcon.png" class="icon" alt="">
            <p class="title">外卖配送对接</p>
            <p class="desc">达达配送</p>
            <div class="buttons flexCenter">
                <router-link :to="{path:'/sales/distribute'}">
                    <el-button class="searchBtn" @click="goCapitalRecharge">配置 </el-button>
                </router-link>
            </div>
        </div>
        <div class="eachInfo flexCenter">
            <img src="../../assets/images/shops/erweima.png" class="icon" alt="">
            <p class="title">店铺二维码</p>
            <p class="desc">查看店铺二维码</p>
            <div class="buttons flexCenter">
                <el-button class="searchBtn">查看</el-button>
            </div>
        </div>
    </div>

    <!-- 分店管理 -->
    <h1 class="branchShopTitle">分店管理：</h1>
    <div class="branchShopBox bgf flexStart">
        <div class="eachSetting flexCenter" v-for="(i,j) in brand" :key="j">
            <div class="logoBox flexCenter">
                <img v-if="i.imgurl" :src="$imgurl+i.imgurl" class="logo" alt="">
                <img v-else src="../../assets/images/header/user.png" class="logo" alt="">
                <div class="switchBox">
                    <el-switch size="large" @change="val=>enabledChange(val,j)" v-model="i.used" active-color="#00B0F0" inactive-color="#aaaaaa">
                    </el-switch>
                </div>
            </div>
            <p class="shopName">{{i.name}}[徐汇店]</p>
            <div class="otherText">
                <p>公司名称：{{i.username}}</p>
                <p>公司地址：{{i.address}}</p>
                <p>联系电话：{{i.mobile}}</p>
                <p>发票类型：{{i.invoice|invoicesFilter}}</p>
            </div>
            <div class="btnBox flexSpace">
                <router-link :to="{name:'editShop',query:{child:i}}">
                    <el-button class="transBtn flexCenter">
                        <img src="../../assets/images/shops/editIcon.png" class="editIcon" alt="">
                        <span> 修改</span>
                    </el-button>
                </router-link>
                <el-button class="transBtn deleteBtn flexCenter" @click="deleteShop(i.id)">
                    <i class="el-icon-delete"></i>
                    <span>删除</span>
                </el-button>
            </div>
        </div>
        <router-link class="addShop flexCenter flexColumn" :to="{path:'/shops/addShop'}">
            <i class="el-icon-plus"></i>
        </router-link>
    </div>

    <!-- 弹窗 -->
    <el-dialog title="提示" center :visible.sync="showTipsDialog" width="30%">
        <span class="flexCenter">请联系您的销售顾问</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="showTipsDialog = false">取 消</el-button>
            <el-button type="primary" @click="showTipsDialog = false">确 定</el-button>
        </span>
    </el-dialog>

    <!-- 删除的提示框 -->
    <el-dialog title="提示" center :visible.sync="deleteShopVisible" width="30%">
        <span class="flexCenter">是否删除此店铺</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="deleteShopVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmDelete">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import {
    branch
} from '../../api/login'
import {
    putInfo,
    deleteShopFn
} from '../../api/shops/index';
import {
    invoicesList
} from '../../utils/jsons';

export default {
    components: {},
    data() {
        return {
            deleteShopVisible: false,
            showTipsDialog: false,
            brand: [],
            shopInfo: {},
            value: true,
            deleteTarget: ''
        };
    },
    filters: {
        invoicesFilter(val) {
            ////console.log('发票'+val)
            ////console.log(invoicesList)
            let name;
            val = val.trim()
            invoicesList.map(i => {
                if (i.id == val) {
                    name = i.name;
                }
            })
            return name;
        },

    },
    computed: {},
    watch: {},
    methods: {
        goCapitalRecharge() {
            this.$router.push({
                path: ' /shops/capitalRecharge'
            })
        },

        getBranch() {
            branch().then(res => {
                if (res.code == '00') {
                    this.brand = res.data;
                }
            })
        },
        getShopInfo() {
            this.$store.dispatch('GetInfo').then((res) => {
                const data = res.data;
                this.shopInfo = data;
            })
        },
        // 账户设置
        toSetting() {
            this.$router.push({
                path: '/shops/acountSetting'
            })
        },
        // 是否可用
        enabledChange(val, index) {
            let item = this.brand[index];
            let that = this;
            putInfo(item).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '设置成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.getBranch()
                }
            })
        },
        // 是否删除
        deleteShop(id) {
            this.deleteTarget = id;
            this.deleteShopVisible = true;
        },
        confirmDelete() {
            let that = this;
            deleteShopFn(this.deleteTarget).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    this.deleteShopVisible = false;
                    that.getBranch()
                }
            })
        }
    },
    created() {
        let that = this;
        this.getShopInfo();
        this.getBranch();
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    beforeCreate() {
        console.log('beforeCreate')
    }, //生命周期 - 创建之前
    beforeMount() {
        console.log('beforeMount')
    }, //生命周期 - 挂载之前
    beforeUpdate() {
        console.log('beforeUpdate')
    }, //生命周期 - 更新之前
    updated() {
        console.log('updated')
    }, //生命周期 - 更新之后
    beforeDestroy() {
        console.log('beforeDestroy')
    }, //生命周期 - 销毁之前
    destroyed() {
        console.log('destroyed')
    }, //生命周期 - 销毁完成
    activated() {
        console.log('activated')
    }, //如果页面有keep-alive缓存功能，这个函数会触发
    deactivated() {
        console.log('deactivated')
    }
}
</script>

<style lang="scss" scoped>
.shops {

    .editIcon {
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }

    >>>.el-button {
        &.searchBtn {
            padding: 5px;
            border-radius: 30px;
            font-size: 14px;
        }

        &.transBtn {
            padding: 5px;
            border-radius: 30px;
            font-size: 14px;
        }
    }

    //min-height: 100%;
    .mainShopInfo {
        flex-direction: column;
        padding: 42px 0 88px 0;

        .logo {
            width: 60px;
            height: 60px;
            margin-bottom: 30px;
            border-radius: 50%;
        }

        .shopName {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #00B0F0;
            margin-bottom: 18px;
        }

        .otherText {
            text-align: center;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #525252;
            margin-bottom: 10px;

            p {
                margin-bottom: 10px;
                font-size: 16px;
            }
        }
    }

    .shopPartInfo {
        padding: 0 10px 100px;

        .eachInfo {
            flex-direction: column;
            // border-right: 1px solid #B9B9B9;
            width: 20%;

            &:last-child {
                border: none;
            }

            .icon {
                width: 60px;
                height: 60px;
                margin-bottom: 30px;
            }

            .title {

                font-size: 18px;
                font-weight: bold;
                color: #00B0F0;
                margin-bottom: 20px;
            }

            .desc {

                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #525252;
                margin-bottom: 30px;
            }
        }

    }

    .branchShopTitle {
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        margin: 20px 0;
    }

    .branchShopBox {
        padding: 50px 30px;
        flex-wrap: wrap;

        .addShop {
            background: #F4F4F4;
            height: 340px;
            font-size: 70px;
            color: #333;
            border-radius: 10px;
            margin-bottom: 20px;
            max-width: 350px;
            width: 350px;
            padding: 25px;
            box-sizing: border-box;
        }

        .eachSetting {
            margin-bottom: 20px;
            box-sizing: border-box;
            background: #F4F4F4;
            border-radius: 10px;
            flex: 1;
            margin-right: 36px;
            flex-direction: column;
            min-width: 350px;
            width: 350px;
            padding: 25px;
            box-sizing: border-box;
            max-width: 350px;

            .logoBox {
                width: 100%;
                position: relative;

                .switchBox {
                    position: absolute;
                    top: 10px;
                    right: 0
                }

                .logo {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }

            .shopName {
                margin-top: 40px;
                font-size: 20px;
                font-weight: bold;
                color: #00B0F0;
            }

            .otherText {
                margin-top: 20px;
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #525252;
                text-align: center;
                margin-bottom: 30px;

                p {
                    margin-bottom: 10px;

                }
            }

            .btnBox {
                width: 100%;

                .transBtn {
                    background-color: transparent;

                    &.deleteBtn {
                        color: #FF2B2B !important;
                        border-color: #FF2B2B;
                        padding: 5px;
                        border-radius: 30px;
                        font-size: 14px;
                    }
                }

            }

        }
    }
}
</style>
