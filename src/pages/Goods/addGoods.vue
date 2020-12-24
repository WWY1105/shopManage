<!--  -->
<template>
<div class='editGoods bgf'>
    <el-form ref="form" label-position="left" label-width="80px">
        <div class="part">
            <el-row :gutter="33">
                <el-col :span="16">
                    <el-form-item label="商品">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="单位">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3" v-if="form.id">
                    <el-form-item label="商品ID：">
                        <el-input v-model="form.id"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
        <div class="part">
            <div class="partTitle mainText mb20">商品类型</div>
            <el-row :gutter="33">
                <el-col :span="6">
                    <el-form-item label="一级分类">
                        <el-select v-model="form.categoryId" placeholder="一级分类" @change="categoriesChange">
                            <el-option :label="item.name" :value="item.id" v-for="(item,index) in categoryList" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="二级分类">
                        <el-select v-model="form.categoryId2" placeholder="二级分类">
                            <el-option v-for="(i,j) in categories2" :value="i.id" :key="j" :label="i.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
        <div class="part flexColumn pb20">
            <div class="flexStart alignStart">
                <div class="partTitle mainText mr24">上传主图</div>
                <div class="content">
                    <el-upload :file-list="fileList" :action="$uploadApi" :on-success="handleAvatarSuccess" list-type="picture-card">
                        <i slot="default" class="el-icon-plus"></i>
                        <!-- <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span  class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-download"></i>
                                </span>
                                <span  class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div> -->
                    </el-upload>
                </div>
            </div>
            <p class="tips">
                可上传<span class="mainText">1-5</span>张<span class="mainText">JPG</span>或<span class="mainText">
                    PNG</span>图片，<span class="mainText">500X500</span>像素大小，单张图片不得超过<span class="mainText">1</span>MB。
            </p>
        </div>
        <div class="part flexColumn pb20">
            <div class="flexStart alignStart">
                <div class="partTitle mainText mr24">商品详情</div>
                <div class="content">
                    <el-upload :file-list="fileList" :action="$uploadApi" :on-success="handleAvatarSuccess" list-type="picture-card">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                    <i class="el-icon-zoom-in"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-download"></i>
                                </span>
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload>
                    <!-- <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog> -->
                </div>
            </div>
            <p class="tips">
                可上传<span class="mainText">1-10</span>张<span class="mainText">JPG</span>或<span class="mainText">
                    PNG</span>图片，<span class="mainText">500X500</span>像素大小，单张图片不得超过<span class="mainText">1</span>MB。
            </p>
        </div>
        <div class="part">
            <div class="partTitle mainText mb20">配送与物流</div>
            <el-row :gutter="33">
                <el-col :span="7">
                    <el-form-item label="配送方式">
                        <el-select v-model="form.expType ">
                            <el-option value="1" label="免运费"></el-option>
                            <el-option value="2" label="收费"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item label="物流费用￥">
                        <div class="flexCenter">
                            <el-input type="number" v-model="form.expPrice " suffix="/件商品"></el-input>
                            <span>/件商品</span>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
        <div class="part">
            <div class="partTitle mainText">规格设定</div>
            <div class="content">
                <el-form label-position="left" :model="form" label-width="110px" ref="form">
                    <el-form-item :label="'规格'+index+1+'名称'" v-for="(item,index) in form.specs" :key="index">
                        <div class="flexStart">
                            <el-input type="text" v-model="item.name"></el-input>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="part">
            <div class="partTitle mainText">价格与库存</div>
        </div>
    </el-form>
</div>
</template>

<script>
import {
    getCategory
} from '../../api/goods/index'
export default {
    components: {},
    data() {
        return {
            fileList: [],
            form: {
                categoryId: '',
                categoryId2: '',
                spac: [{
                    name: ''
                }]
            },
            categoryList: [],
            categories2: []
        };
    },
    computed: {},
    watch: {},
    methods: {
        // 一级分类改变获取二级分类
        categoriesChange(e) {
            let id = e;
            this.categoryList.map(i => {
                if (i.id == id) {
                    this.categories2 = i.categories;
                }
            })
        },
        getCategoryFn() {
            getCategory().then(res => {
                if (res.code == '00') {
                    this.categoryList = res.data;
                }
            })
        },
        // 上传成功
        handleAvatarSuccess() {
            console.log(this.fileList)
        }
    },
    created() {
        this.getCategoryFn()
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
.editGoods {
    padding: 0 30px;
    padding-bottom: 100px;

    //min-height: 100%;
    .part {
        padding-top: 20px;
        border-bottom: 1px solid #E2E2E2;

        .tips {
            margin-top: 30px;
            padding-left: 80px;
        }
    }

    /deep/ .el-input__inner {
        height: 34px;
        background-color: #FAFAFA;
        border-color: #d5d5d5;
    }

    /deep/ .el-form-item__label {
        line-height: 34px;
        color: #7A7A7A;
        font-size: 14px;
        word-break: keep-all;
        white-space: nowrap;
    }

}
</style>
