<template>
<div class="quickReg flexCenter flexColumn bgf">
    <img src="../../assets/images/shops/zhuce.png" alt="" class="itemLogo1">
    <p class="itemTitle">快速注册小程序</p>
    <p class="desc">填写注册信息</p>
    <el-form label-position="left" label-width="140px" ref="ruleForm" :model="formLabelAlign" :rules="rules">
        <el-form-item label="法人姓名" prop="legal_persona_name">
            <el-input v-model="formLabelAlign.legal_persona_name " placeholder="输入营业执照上经营者"></el-input>
        </el-form-item>
        <el-form-item label="法人微信号" prop="legal_persona_wechat">
            <el-input v-model="formLabelAlign.legal_persona_wechat " placeholder="输入法人微信账号（非手机号、昵称）"></el-input>
        </el-form-item>
        <el-form-item label="企业名称" prop="name">
            <el-input v-model="formLabelAlign.name " placeholder="输入企业营业执照名称"></el-input>
        </el-form-item>
        <el-form-item label="企业代码类型" prop="code_type">
            <el-select v-model="formLabelAlign.code_type ">
                <el-option label="统一社会信用代码（18 位）" value="1"></el-option>
                <el-option label="组织机构代码（9 位 xxxxxxxx-x）" value="2"></el-option>
                <el-option label="营业执照注册号(15 位)" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="企业代码" prop="code">
            <el-input v-model="formLabelAlign.code" placeholder="输入统一社会企业代码（一般为18位）"></el-input>
        </el-form-item>
        <el-form-item label="第三方联系电话" prop="component_phone">
            <el-input v-model="formLabelAlign.component_phone " placeholder="输入第三方联系电话"></el-input>
        </el-form-item>
        <el-form-item>
            <div class="flexCenter">
                <el-button class="searchBtn" @click="fastregisterweappFn('ruleForm')">提交申请</el-button>
            </div>
        </el-form-item>
    </el-form>

</div>
</template>

<script>
import {
    postFastregisterweapp
} from '@/api/shops/index'
export default {
    data() {
        return {
            typeList: [], //营业行业列表
            formLabelAlign: {},
            rules: {
                name: [{
                    required: true,
                    message: '请输入企业名',
                    trigger: 'blur'
                }],
                code: [{
                    required: true,
                    message: '请输入企业代码',
                    trigger: 'blur'
                }],
                code_type: [{
                    required: true,
                    message: '请选择企业代码类型',
                    trigger: 'blur'
                }],
                legal_persona_wechat: [{
                    required: true,
                    message: '请输入法人微信号',
                    trigger: 'blur'
                }],
                legal_persona_name: [{
                    required: true,
                    message: '法人姓名（绑定银行卡）',
                    trigger: 'blur'
                }],
                component_phone: [{
                    required: true,
                    message: '第三方联系电话',
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
       
        fastregisterweappFn() {
            const that=this;
            this.$refs.ruleForm.validate((valid) => {
                console.log (valid)
                console.log(this.formLabelAlign)
                const json=this.formLabelAlign;
                if (valid) {
                    postFastregisterweapp(json).then(res => {
                        if (res.code == '00') {
                            that.$message({
                                showClose: true,
                                message: '设置成功',
                                duration: 3 * 1000,
                                type: 'success'
                            })
                            that.$router.push({
                                path:'/shops/wxAcountSuccess'
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });

        }
    },
    created() {
        // this.getTypeFn()
    }
}
</script>

<style lang="scss" scoped>
.quickReg {
    padding: 50px 0;

    .itemLogo1 {
        width: 101px;
        height: 104px;
        margin-bottom: 24px;
    }

    .itemTitle {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #545454;
        margin-bottom: 36px;
    }

    .desc {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
        margin-bottom: 60px;
    }

}

//min-height: 100%;
/deep/ .el-form-item__label {
    line-height: 40px;
    color: #545454;
    font-size: 14px;
    padding-right: 23px;
}

.el-input,
.el-select {
    width: 300px;
    height: 40px;
    background: #F4F4F4;
    border: 1px solid #E8E8E8;
    border-radius: 30px;
    line-height: 40px;

}

.el-input__suffix {
    right: 100px;
}

/deep/ .el-input__inner {
    background-color: transparent !important;
    border: none !important;
    text-align: center;
    color: #000;
    font-size: 14px;
    height: 40px !important;
    padding-right: 30px;

}

.el-button.searchBtn {
    width: 202px;
    height: 60px;
    background: #00B0F0;
    border-radius: 60px;
    padding: 0;
    box-sizing: border-box;
    margin-top: 50px;
}
.el-input__suffix {
    right: 20px;
}
</style>
