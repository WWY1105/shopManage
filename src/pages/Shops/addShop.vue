<!--  -->
<template>
<div class='addShop bgf'>
    <div class="content flexCenter flexColumn">
        <div class="logoBox flexCenter flexColumn">
            <img src="../../assets/images/header/user.png" class="logoImg" alt="">
            <el-upload class="upload-demo" :action="$uploadApi" :on-success="handleAvatarSuccess" :show-file-list="false">
                <p class="editText flexCenter"><i class="el-icon-edit-outline"></i> 修改头像</p>
            </el-upload>

        </div>
        <div class="formBox ">
            <el-form label-position="left" label-width="140px" :model="formLabelAlign">
                <el-form-item label="公司名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="公司地址">
                    <div class="flexStart">
                        <el-input v-model="formLabelAlign.address"></el-input>
                        <img src="../../assets/images/shops/locateIcon.png" alt="" class="locateIocn">
                    </div>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formLabelAlign.tel"></el-input>
                </el-form-item>
                <el-form-item label="发票类型">
                    <el-select v-model="formLabelAlign.invoice">
                        <el-option v-for="item in invoices" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="营业行业">
                    <el-select v-model="formLabelAlign.typeId">
                        <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分店管理员手机号">
                    <el-input v-model="formLabelAlign.mobile"></el-input>
                </el-form-item>
                <el-form-item label="分店管理密码">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
            </el-form>
            <div class="btnBox flexCenter">
                <el-button class="searchBtn" @click="saveDataFn">确定</el-button>
            </div>

        </div>

    </div>

</div>
</template>

<script>
import {
    invoicesList
} from '../../utils/jsons'
import {
    getType,
    saveInfo
} from '../../api/shops/index'
export default {
    components: {},
    data() {
        return {
            typeList: [], //营业行业列表
            invoices: invoicesList,
            formLabelAlign: {}
        };
    },
    computed: {},
    watch: {},
    methods: {
        getTypeFn() {
            let that = this;
            getType({}).then(res => {
                if (res.code == '00') {
                    that.typeList = res.data;
                }
            })
        },
        handleAvatarSuccess(res, file) {
            if (res.code == '00') {
                this.formLabelAlign.imgurl = res.data;
                this.saveDataFn()
            }

        },
        saveDataFn() {
            let that = this;
            let json = {};
            if (this.formLabelAlign.imgurl) {
                json.imgurl = this.formLabelAlign.imgurl;
            }
            if (this.formLabelAlign.name) {
                json.name = this.formLabelAlign.name;
            }
            if (this.formLabelAlign.address) {
                json.address = this.formLabelAlign.address;
            }
            if (this.formLabelAlign.tel) {
                json.tel = this.formLabelAlign.tel;
            }
            if (this.formLabelAlign.invoice) {
                json.invoice = this.formLabelAlign.invoice;
            }
            if (this.formLabelAlign.typeId) {
                json.typeId = this.formLabelAlign.typeId;
            }
            if (this.formLabelAlign.mobile) {
                json.mobile = this.formLabelAlign.mobile;
            }
            if (this.formLabelAlign.password) {
                json.password = this.formLabelAlign.password;
            }
            saveInfo(json).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '保存成功',
                        duration: 3 * 1000,
                        type: 'success',
                        computed:()=>{
                            that.$router.replace({
                                path:'/shop'
                            })
                        }
                    })
                }
            })
        },

    },
    created() {
        this.getTypeFn();
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
.addShop {

      //min-height: 100%;
    /deep/ .el-form-item__label {
        line-height:40px;
        color: #545454;
        font-size: 14px;
        padding-right: 23px;
    }

    .el-input,
    .el-select {
        width: 300px;
        height:40px;
        background: #F4F4F4;
        border: 1px solid #E8E8E8;
        border-radius: 30px;
        line-height:40px;

    }

    /deep/ .el-input__suffix {
        right: 100px;
    }

    /deep/ .el-input__inner {
        background-color: transparent !important;
        border: none !important;
        text-align: center;
        color: #000;
        font-size: 14px;
        height: 42px!important;
        padding-right: 30px;
        line-height: 42px;

    }

    padding: 56px 0 153px;

    .formBox {
        margin-left: -100px;
    }

    .logoBox {
        width: 378px;

        .logoImg {
            width: 100px;
            height: 100px;
            margin-bottom: 34px;
            border-radius: 50%;
        }

        .editText {
            color: #00B0F0;
            font-size: 14px;
            margin-bottom: 30px;
            cursor: pointer;

            i {
                margin-right: 8px;
            }
        }
    }

    .btnBox {
        width: 378px;
        padding-left: 100px;
    }

   .searchBtn {
        margin-top: 55px;
        width: 200px;
        height:40px;
        border-radius: 30px;
        font-size: 20px;
    }
}
.locateIocn {
    margin-left: 30px;
}
</style>
