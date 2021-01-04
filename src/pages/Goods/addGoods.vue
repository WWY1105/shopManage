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
        <div class="part ">
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
                <el-col :span="9">
                    <el-form-item label="物流费用￥">
                        <div class="flexCenter">
                            <el-input :disabled="form.expType==1?true:false" type="number" v-model="form.expPrice" suffix="/件商品"></el-input>
                            <span class="inputEndTips">/件商品</span>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>
        </div>
        <div class="part guige">
            <div class="partTitle mainText">规格设定</div>
            <div class="content">
                <el-form label-position="left" :model="form" label-width="110px" ref="form" v-for="(item,index) in form.specs" :key="index">
                    <div class="flexStart">
                        <el-form-item :label="'规格'+(index+1)+'名称'">
                            <div class="flexStart">
                                <el-input type="text" v-model="item.name"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item class="flexStart">
                            <el-button class="searchBtn" @click="addGuiGeFn">添加规格</el-button>
                        </el-form-item>
                    </div>
                    <div class="flexStart eachGuiGe">
                        <el-tag v-for="(i,j) in item.items" :key='j' closable :disable-transitions="false" @close="handleCloseGuiGe(index,j)">
                            <el-input v-model="i.name" @change="val=>addGuiGeItems(val,index,j)"></el-input>
                        </el-tag>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="part price">
            <div class="partTitle mainText flexSpace" style="width: 60%;">
                <span>价格与库存</span>
                <el-button class="searchBtn" @click="setPriceFn">设置价格与库存</el-button>
            </div>
            <el-table :data="specsList" style="width: 60%;background-color:#F8F8F8">
                <el-table-column prop="itemNames" label="规格" width="400">
                </el-table-column>
                <el-table-column prop="price" label="商品定价（￥）" width="180">
                </el-table-column>
                <el-table-column prop="stock" label="库存数量">
                </el-table-column>
            </el-table>
        </div>
        <div class="part yingxiao">
            <div class="partTitle mainText">
                <span>商品营销设定</span>
                <span class="partTitleTips">仅可在下列营销方式中选择1种使用</span>
            </div>
            <div class="content flexStart">
                <div class="eachWay flexCenter flexColumn" @click="val=>chooseSale(val,j)" v-for="(i,j) in disbuteWayList" :key="j">
                    <img :src="i.active?i.activeImg:i.img" alt="" class="yingxiaoImg">
                    <p>{{i.name}}</p>
                </div>
            </div>
        </div>
    </el-form>
</div>
</template>

<script>
import yushou from '../../assets/images/goods/yushou.png';
import pintuan from '../../assets/images/goods/pintuan.png';
import miaosha from '../../assets/images/goods/miaosha.png';
import kanjia from '../../assets/images/goods/kanjia.png';
import mianfei from '../../assets/images/goods/mianfei.png';

import yushou_active from '../../assets/images/sales/yushou.png';
import pintuan_active from '../../assets/images/sales/pintuan.png';
import miaosha_active from '../../assets/images/sales/miaosha.png';
import kanjia_active from '../../assets/images/sales/kanjia.png';
import mianfei_active from '../../assets/images/sales/mianfei.png';
import {
    getCategory
} from '../../api/goods/index'
export default {
    components: {},
    data() {
        return {
            addGuiGeVal: '', //新添加规格名字
            fileList: [],
            form: {
                expType: '',
                categoryId: '',
                categoryId2: '',
                sellType: '',
                specs: [{
                    name: '',
                    items: [{
                        name: ''
                    }]
                }]
            },
            specsList: [],
            categoryList: [],
            categories2: [],
            disbuteWayList: [{
                img: yushou,
                activeImg: yushou_active,
                name: '预售',
                active: false,
                val: 'ys'
            }, {
                img: pintuan,
                activeImg: pintuan_active,
                name: '拼团',
                active: false,
                val: 'pt'
            }, {
                img: miaosha,
                activeImg: miaosha_active,
                name: '限时秒杀',
                active: false,
                val: 'ms'
            }, {
                img: kanjia,
                activeImg: kanjia_active,
                name: '砍价',
                active: false,
                val: 'kj'
            }, {
                img: mianfei,
                activeImg: mianfei_active,
                name: '免费拿',
                active: false,
                val: 'mfn'
            }, ]
        };
    },
    computed: {

    },
    watch: {
        'form.specs': {
            handler(newVal, oldVal) {
                let specsList = [];
                console.log('watch')
                console.log(newVal)
                // // itemNames,price,stock
                // if (newVal.length == 1) {
                //     newVal[0].items.map(i => {
                //         let obj = {
                //             itemNames: i.name,
                //             price: 0,
                //             stock: 0
                //         }
                //     })
                //     specsList.push(obj)
                // } else {

                // }
                function cartesianProductOf() {
                    return Array.prototype.reduce.call(arguments, function (a, b) {
                        var ret = [];
                        a.forEach(function (a) {
                            b.forEach(function (b) {
                                ret.push({
                                    itemNames: a.name + '*' + b.name,
                                    price: 0,
                                    stock: 0
                                });
                            });
                        });
                        return ret;
                    }, [
                        []
                    ]);
                }

                let allArr = cartesianProductOf(...newVal)
                console.log(allArr)

                this.specsList = allArr;
            },
            immediate: true,
            deep: true
        }
    },
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
        },
        // 点击添加规格
        addGuiGeFn() {
            this.form.specs.push({
                name: '',
                items: [{
                    name: ''
                }]
            })
        },
        // 添加小规格
        addGuiGeItems(val, index, j) {
            console.log(index);
            console.log(j)
            if (this.form.specs[index].name.trim() != '' && this.form.specs[index].items[j].name.trim() != '') {
                this.form.specs[index].items.push({
                    name: ''
                })
            } else {
                this.$message({
                    showClose: true,
                    message: '请输入规格名称',
                    duration: 3 * 1000,
                    type: 'error'
                })
            }
            console.log(this.form.specs);
        },
        // 删除某个规格
        handleCloseGuiGe(index, i) {
            this.form.specs[index].items.splice(i, 1);
        },
        // 点击设置价格与库存
        setPriceFn() {

        },
        // 选中一种营销方式
        chooseSale(val, index) {
            this.disbuteWayList.map(i => {
                i.active = false
            });
            this.disbuteWayList[index].active = true;
            this.form.sellType = this.disbuteWayList[index].val;
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

    /deep/ .el-input__inner {
        height: 34px;
        background-color: #FAFAFA;
        border-color: #d5d5d5;
    }

    .part {
        padding-top: 20px;
        border-bottom: 1px solid #E2E2E2;

        .partTitle {
            .partTitleTips {
                color: #FF3D3D;
                margin-left: 100px;
            }
        }

        &.yingxiao {
            .content {
                padding: 56px 0 120px 0;

                .eachWay {
                    margin: 0 60px;
                    color: #ACACAC;
                    font-size: 14px;

                    .yingxiaoImg {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 20px;
                    }
                }
            }
        }

        &.price {
            padding-bottom: 38px;
        }

        &.guige {
            padding-bottom: 38px;

            .eachGuiGe {
                margin-bottom: 60px;

                .el-tag {
                    width: 170px;
                    height: 34px;
                    background: #FFFFFF;
                    border: 1px solid #D4D4D4;
                    border-radius: 17px;
                    margin-right: 30px;
                }

                .el-input {
                    height: 100%;
                    width: 90%;
                }

                /deep/ .el-input__inner {
                    background-color: #fff !important;
                    border: none;
                    height: 100%;
                    padding: 0;
                    line-height: 34px;
                }
            }

        }

        .tips {
            margin-top: 30px;
            padding-left: 80px;
        }
    }

    /deep/ .el-form-item__label {
        line-height: 34px;
        color: #7A7A7A;
        font-size: 14px;
        word-break: keep-all;
        white-space: nowrap;
    }

    .inputEndTips {
        word-break: keep-all;
        min-width: 100px;
        text-align: center;
    }

}
</style>
