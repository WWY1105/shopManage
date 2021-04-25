<template>
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
} from '../../api/login';
import {
    putInfo,
    deleteShopFn
} from '../../api/shops/index';
export default {
    data() {
        return {
            brand: null,
            deleteShopVisible: false
        }
    },
    created() {
        this.getBranch()
    },
    methods: {
        getBranch() {
            branch().then(res => {
                if (res.code == '00') {
                    this.brand = res.data;
                }
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
    }
}
</script>

<style lang="scss" scoped>
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
</style>
