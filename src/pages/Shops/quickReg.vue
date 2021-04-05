<template>
<div class="quickReg flexCenter flexColumn bgf">
    <img src="../../assets/images/shops/zhuce.png" alt="" class="itemLogo1">
    <p class="itemTitle">快速注册小程序</p>
    <p class="desc">请根据实际业务选择主营类目，所选类目会导致注册方式的不同</p>
    <el-form label-position="left" label-width="100px" :model="formLabelAlign">
        <el-form-item label="行业">
            <el-select v-model="formLabelAlign.typeId">
                <el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {
    getType
} from '../../api/shops/index'
export default {
    data() {
        return {
            typeList: [], //营业行业列表
            formLabelAlign: {}
        }
    },
    methods: {
        // 获取行业
        getTypeFn() {
            let that = this;
            getType({}).then(res => {
                if (res.code == '00') {
                    that.typeList = res.data;
                }
            })
        },
    },
    created() {
        this.getTypeFn()
    }
}
</script>

<style lang="scss">
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
</style>
