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
                        <el-input v-model="form.unit"></el-input>
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
                <el-col :span="3">
                    <div class="flexCenter radioBox">
                        <el-checkbox v-model="form.sy" label="1">推荐到首页</el-checkbox>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="part flexColumn pb20">
            <div class="flexStart alignStart">
                <div class="partTitle mainText mr24">上传主图</div>
                <div class="content">
                    <el-upload :file-list="imgUrlfileList" :action="$uploadApi" :on-success="handleimgurlSuccess" list-type="picture-card">
                        <i slot="default" class="el-icon-plus"></i>

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
                <div class="content textAreaContent">
                    <el-input type="textarea" :rows="20" v-model="form.content"></el-input>
                    <el-upload :file-list="fileList" :action="$uploadApi" :on-success="handleAvatarSuccess" list-type="picture-card">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="$imgurl+file.url" alt="">

                        </div>
                    </el-upload>
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
                <el-form label-position="left" :model="form" label-width="110px" ref="form" v-for="(item,index) in form.specRequest.spec" :key="index">
                    <div class="flexStart">
                        <el-form-item :label="'规格'+(index+1)+'名称'">
                            <div class="flexStart">
                                <el-input type="text" v-model="item.name" @change="setPriceFn"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item class="flexStart">
                            <el-button class="searchBtn" @click="addGuiGeFn">添加规格</el-button>
                        </el-form-item>
                    </div>
                    <!-- 小规格 -->
                    <div class="flexStart eachGuiGe">
                        <el-tag v-for="(i,j) in item.items" :key='j' closable :disable-transitions="false" @close="handleCloseGuiGe(index,j)">
                            <el-input v-model="item.items[j]" @change="val=>addGuiGeItems(val,index,j)"></el-input>
                        </el-tag>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="part price">
            <div class="partTitle mainText flexSpace" style="width: 80%;">
                <span>价格与库存</span>
                <el-button class="searchBtn" @click="setPriceFn(true)">设置价格与库存</el-button>
            </div>
            <el-table :data="specsList" style="width: 80%;background-color:#F8F8F8">
                <el-table-column prop="itemNames" label="规格" width="400">
                    <template slot-scope="scope">
                        <span v-for="(i,j) in scope.row.item" :key="j">{{i}}<i v-if="j<scope.row.item.length-1">*</i></span>
                    </template>
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
            <!-- 拼团 start-->
            <div class="yingxiaoRuleDetails" v-if="form.sellType=='pt'">
                <div class="partTitle mainText">
                    <span>拼团参数设置</span>
                </div>
                <el-form label-position="left" label-width="120px" :inline="true">
                    <el-form-item label="拼团人数要求">
                        <el-input type="number" v-model="form.groupCount" min="1"></el-input>
                    </el-form-item>
                    <el-form-item label="时间限制(小时)">
                        <el-input type="number" v-model="form.groupHour" min="1"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!-- 拼团 end-->
            <!-- 预售 start-->
            <div class="yingxiaoRuleDetails" v-if="form.sellType=='ys'">
                <div class="partTitle mainText">
                    <span>预售参数设置</span>
                </div>
                <el-form label-position="left" label-width="140px" :inline="true">
                    <el-form-item label="预售截止时间">
                        <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="form.preSaleEndTime" type="datetime" placeholder="有效期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="尾款支付开始时间">
                        <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="form.preSalePayBeginTime" type="datetime" placeholder="有效期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="尾款支付结束始时间">
                        <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" format="yyyy-MM-dd HH:mm:ss" v-model="form.preSalePayEndTime" type="datetime" placeholder="有效期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="预售定金">
                        <el-input type="number" v-model="form.preSalePrice"></el-input>
                    </el-form-item>
                    <el-form-item label="预售定金抵扣">
                        <el-input type="number" v-model="form.preSaleCost"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <!-- v-if="form.sellType=='ys'" -->
            <div class="part price">
                <div class="partTitle mainText flexSpace" style="width: 80%;">
                    <span>预售价格与库存</span>
                    <el-button class="searchBtn" @click.stop="yushouDialogVisible=true">设置价格与库存</el-button>
                </div>
                <el-table :data="yushouSpecsList" style="width: 80%;background-color:#F8F8F8">
                    <el-table-column prop="itemNames" label="规格" width="200">
                        <template slot-scope="scope">
                            <span v-for="(i,j) in scope.row.item" :key="j">{{i}}
                                <i v-if="j<scope.row.item.length-1">*</i>
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="原价（￥）" width="100">
                    </el-table-column>
                    <el-table-column label="预售价格（￥）" prop="marketingPrice" width="180"></el-table-column>
                    <el-table-column prop="stock" label="总库存">
                    </el-table-column>
                    <el-table-column label="预售库存" prop="marketingStock"> </el-table-column>
                </el-table>
            </div>
            <!-- 预售 end-->
        </div>

    </el-form>
    <el-button class="searchBtn finalSubmit" @click="saveDataFn">提交保存</el-button>

    <!-- 设置原价和库存 -->
    <el-dialog class="yingxiaoDialog" :visible.sync="originDialogVisible" center title="编辑营销价格与库存" width="70%">
        <el-table :data="specsList" style="background-color:#F8F8F8">
            <el-table-column prop="itemNames" label="规格" width="200">
                <template slot-scope="scope">
                    <span v-for="(i,j) in scope.row.item" :key="j">{{i}}<i v-if="j<scope.row.item.length-1">*</i></span>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="商品售价（￥）" width="100">
                <template slot-scope="scope">
                    <el-input :value="scope.row.price" @input="val=>priceChange(val,scope.$index)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="stock" label="库存">
                <template slot-scope="scope">
                    <el-input :value="scope.row.stock" @input="val=>stockChange(val,scope.$index)"></el-input>
                </template>
            </el-table-column>
        </el-table>
        <div class="flexCenter btnBox">
            <el-button class="transBtn" @click="originDialogVisible=false">保存</el-button>
        </div>
    </el-dialog>
    <!-- 设置原价和库存 end-->

    <!-- 预售 -->
    <el-dialog class="yingxiaoDialog" :visible.sync="yushouDialogVisible" center title="编辑营销价格与库存" width="70%">
        <el-table :data="yushouSpecsList" style="background-color:#F8F8F8">
            <el-table-column prop="itemNames" label="规格" width="200">
                <template slot-scope="scope">
                    <span v-for="(i,j) in scope.row.item" :key="j">{{i}}<i v-if="j<scope.row.item.length-1">*</i></span>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="原价（￥）" width="100">
            </el-table-column>
            <el-table-column label="预售价格（￥）" width="180">
                <template slot-scope="scope">
                    <el-input :value="scope.row.marketingPrice" @input="val=>marketingPriceChange(val,scope.$index)"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="stock" label="总库存">
            </el-table-column>
            <el-table-column prop="stock" label="预售库存">
                <template slot-scope="scope">
                    <el-input :value="scope.row.marketingStock" @input="val=>marketingStockChange(val,scope.$index)"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="启用">
                <template slot-scope="scope">
                    <el-switch :value="scope.row.enabled" @change="val=>enabledChange(val,scope.$index)"></el-switch>
                </template>
            </el-table-column>
        </el-table>
        <div class="flexCenter btnBox">
            <el-button class="transBtn" @click="yushouDialogVisible=false">保存</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import yushou from '../../assets/images/goods/yushou.png';
import pintuan from '../../assets/images/goods/pintuan.png';
import miaosha from '../../assets/images/goods/miaosha.png';
import kanjia from '../../assets/images/goods/kanjia.png';
import mianfei from '../../assets/images/goods/mianfei.png';

import yushou_active from '../../assets/images/sales/yushou_active.png';
import pintuan_active from '../../assets/images/sales/pintuan_active.png';
import miaosha_active from '../../assets/images/sales/miaosha_active.png';
import kanjia_active from '../../assets/images/sales/kanjia_active.png';
import mianfei_active from '../../assets/images/sales/mianfei_active.png';
import {
    getCategory
} from '../../api/goods/index'
import {
    saveData
} from '../../api/goods/editGoods'
export default {
    components: {},
    data() {
        return {
            originDialogVisible: false, //原价和库存
            yushouDialogVisible: false,

            addGuiGeVal: '', //新添加规格名字
            imgUrlfileList: [],
            fileList: [],
            form: {
                imgurl: '',
                contentImgurl: '',
                expType: '',
                categoryId: '',
                categoryId2: '',
                sellType: '',
                specRequest: {
                    spec: [{
                        name: '',
                        items: ['']
                    }],
                    sku: []
                }
            },
            specsList: [],
            yushouSpecsList: [], //预售弹窗表格
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
            }]
        };
    },
    computed: {

    },
    watch: {

    },
    methods: {
        // sku组合方法
        cartesianProductOf() {
            return Array.prototype.reduce.call(arguments, function (a, b) {
                var ret = [];
                a.forEach(function (a) {
                    if (b && b.length > 0) {
                        b.forEach(function (b) {
                            ret.push(a.concat([b]));
                        });
                    }
                });
                return ret;
            }, [
                []
            ]);
        },

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
        handleAvatarSuccess(response) {
            console.log('上传成功')
            console.log(response)
            let arr = this.fileList;
            arr.push({
                url: response.data
            });
            console.log(arr)
            this.fileList = arr;
            this.form.contentImgurl += (response.data + ',');
        },
        handleimgurlSuccess(response) {
            this.form.imgurl += response.data;
        },
        // 点击添加规格
        addGuiGeFn() {
            this.form.specRequest.spec.push({
                name: '',
                items: ['']
            })
            console.log('点击添加规格')
            console.log(this.form.specRequest.spec)
            this.setPriceFn()
        },
        // 添加小规格
        addGuiGeItems(val, index, j) {
            console.log(val, index, j)
            if (this.form.specRequest.spec[index].name.trim() != '' && this.form.specRequest.spec[index].items[j].trim() != '') {
                this.form.specRequest.spec[index].items.push('')
            } else {
                this.$message({
                    showClose: true,
                    message: '请输入规格名称',
                    duration: 3 * 1000,
                    type: 'error'
                })
            }
            console.log('添加小规格')
            console.log(this.form.specRequest.spec)
            this.setPriceFn()
        },
        // 删除某个规格
        handleCloseGuiGe(index, i) {
            this.form.specRequest.spec[index].items.splice(i, 1);
            this.setPriceFn()
        },
        // 点击设置价格与库存
        setPriceFn(show) {
            let specsList = [];
            let arr = [];
            if (!this.form.specRequest.spec) {
                this.$message({
                    showClose: true,
                    message: '请输入规格名称',
                    duration: 3 * 1000,
                    type: 'error'
                })
            } else {
                this.form.specRequest.spec.map(i => {
                    let a = [];
                    i.items.map(j => {
                        if (j.trim() != '') {
                            a.push(j)
                        }
                    })
                    arr.push(a);
                })
                let allArr = this.cartesianProductOf(...arr);
                console.log('allArr')
                console.log(allArr)
                allArr.map(i => {
                    let arr = []
                    let obj = {
                        item: i,
                        price: '',
                        stock: ''
                    }
                    specsList.push(obj)
                })
                if (show) {
                    this.originDialogVisible = true;
                }

                this.specsList = specsList;
                this.form.specRequest.sku = specsList;
            }

        },
        // 选中一种营销方式
        chooseSale(val, index) {
            this.disbuteWayList.map(i => {
                i.active = false
            });
            this.disbuteWayList[index].active = true;
            this.form.sellType = this.disbuteWayList[index].val;

            // 预售
            this.yushouSpecsList = this.form.specRequest.sku;
            this.yushouSpecsList.map(i => {
                i.marketingPrice = '';
                i.marketingStock = '';
                i.enabled = false;
            })

        },
        // 保存数据
        saveDataFn() {
            let json = this.form;
            console.log("提交数据")
            console.log(json.contentImgurl.lastIndexOf(','));
            console.log(json.contentImgurl.length)

            if (json.contentImgurl.lastIndexOf(',') == json.contentImgurl.length - 1) {
                json.contentImgurl = json.contentImgurl.substr(0, json.contentImgurl.length - 1)
            }
            console.log('json');
            console.log(json);
            if (!this.isEmpty(json.title, '商品标题')) {
                return;
            }
            if (!this.isEmpty(json.imgurl, '商品主图')) {
                return;
            }
            if (!this.isEmpty(json.unit, '单位')) {
                return;
            }
            if (!this.isEmpty(json.sellType, '营销方式')) {
                return;
            }
            saveData(json).then(res => {
                if (res.code == '00') {
                    this.$message({
                        showClose: true,
                        message: '添加成功',
                        duration: 3 * 1000,
                        type: 'success',
                        onClose: () => {
                            this.$router.go(-1);
                        }
                    })
                }
            })
        },
        isEmpty(val, name) {
            if (!val) {
                this.$message({
                    showClose: true,
                    message: '请输入' + name,
                    duration: 3 * 1000,
                    type: 'error'
                })
                return false;
            } else {
                return true;
            }

        },
        // 营销是否启用
        enabledChange(val, index) {
            //console.log(val)
            let target = this.yushouSpecsList[index];
            target.enabled = val;
            this.$set(this.yushouSpecsList, index, target)
        },
        // 输入价格
        priceChange(val, index) {
            if (!this.specsList) {
                this.setPriceFn();
                return;
            }
            let target = this.specsList[index];
            target.price = val;
            this.$set(this.specsList, index, target)
            // //console.log(this.specsList)
        },
        //输入库存
        stockChange(val, index) {
            if (!this.specsList) {
                this.setPriceFn();
                return;
            }
            let target = this.specsList[index];
            target.stock = val;
            this.$set(this.specsList, index, target)
            // //console.log(this.specsList)
        },
        // 输入营销价格
        marketingPriceChange(val, index) {
            if (!this.yushouSpecsList) {
                this.setPriceFn();
                return;
            }
            let target = this.yushouSpecsList[index];
            target.marketingPrice = val;
            this.$set(this.yushouSpecsList, index, target)
            //console.log(this.yushouSpecsList)
        },
        //输入营销库存
        marketingStockChange(val, index) {
            if (!this.yushouSpecsList) {
                this.setPriceFn();
                return;
            }
            let target = this.yushouSpecsList[index];
            target.marketingStock = val;
            this.$set(this.yushouSpecsList, index, target)
            //console.log(this.yushouSpecsList)
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
                padding: 56px 0 40px 0;

                .eachWay {
                    margin: 0 60px;
                    color: #ACACAC;
                    font-size: 12px;

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
                margin-bottom: 40px;
                flex-wrap: wrap;

                .el-tag {
                    width: 170px;
                    height: 34px;
                    background: #FFFFFF;
                    border: 1px solid #D4D4D4;
                    border-radius: 17px;
                    margin-right: 30px;
                    margin-bottom: 20px;
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
        font-size: 12px;
        word-break: keep-all;
        white-space: nowrap;
    }

    .inputEndTips {
        word-break: keep-all;
        min-width: 100px;
        text-align: center;
    }

}

/deep/.finalSubmit {
    width: 354px;
    height: 60px;
    background: #00AEF1;
    border-radius: 30px;
    margin-top: 300px;
    box-sizing: border-box;
    font-size: 20px;
}

.yingxiaoRuleDetails {
    .partTitle {
        margin-bottom: 20px;
    }
}

.textAreaContent {
    width: 60%;

    .el-textarea {
        margin-bottom: 26px;
    }

}

.yingxiaoDialog {
    /deep/.el-dialog__body {
        position: relative;
    }

    .transBtn {
        width: 300px;
        height: 60px;
        background: #FFFFFF;
        border-radius: 30px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        bottom: -80px;
    }
}

.radioBox {
    height: 30px;
}
</style>
