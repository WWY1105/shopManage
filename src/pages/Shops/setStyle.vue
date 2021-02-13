<!--  -->
<template>
<div class='setStyle bgf'>
    <p class="tips">选择您的小程序软件风格和主题色</p>
    <div class="content flexSpace">
        <div class="imgBox flexCenter">
            <img :src="mainImg" alt="" :style="'background:'+formLabelAlign.pageStyle">
            <img :src="detailImg" alt="" :style="'background:'+formLabelAlign.pageStyle">
            <p class="imgTips"></p>
        </div>
        <div class="colorBox">
            <p class="tips">软件主题色选择</p>
            <div class="colorList flexStart">
                <el-row :gutter="50">
                    <el-col :span="4" v-for="(i,j) in colorList" :key="j">
                        <p class="eachColor flexCenter" :style="{'background':i.color}" @click="value=>selectColor(value,j)">
                            <i class="el-icon-check" v-if="i.selected"></i>
                        </p>
                    </el-col>
                </el-row>
            </div>
            <p class="tips inputIips">自定义色值</p>
            <div class="flexStart ">
                <div class="inputBox">
                    <el-input @input="colorInput" placeholder="以#号开头" v-model="selectedColor"></el-input>
                </div>
                <span class="colorTips">请填写6位色值</span>
            </div>
            <div class="btnBox">
                <el-button class="searchBtn" @click="saveDataFn">确定</el-button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import mainImg from '../../assets/images/shops/style/1.png'
import detailImg from '../../assets/images/shops/style/2.png'
import {
    putInfo,
    getData
} from '../../api/shops/index'
export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            selectedColor:'',
            mainImg: mainImg,
            detailImg: detailImg,
            formLabelAlign: {},
            colorList: [{
                    color: '#00B0F0',
                    selected: false
                }, {
                    color: '#09BB07',
                    selected: false
                }, {
                    color: '#2782D7',
                    selected: false
                }, {
                    color: '#FFD24D',
                    selected: false
                }, {
                    color: '#EC6B4A',
                    selected: false
                },
                {
                    color: '#FF5B5B',
                    selected: false
                }, {
                    color: '#C346C4',
                    selected: false
                }, {
                    color: '#DADADA',
                    selected: false
                }, {
                    color: '#E8C892',
                    selected: false
                }, {
                    color: '#8E63C9',
                    selected: false
                }, {
                    color: '#5C503C',
                    selected: false
                }
            ]
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        colorInput(e) {
            if (e.trim() != '') {
                this.colorList.map(i => {
                    i.selected = false;
                })
                this.formLabelAlign.pageStyle = this.selectedColor;
            }
            
        },
        selectColor(value, j) {
            this.colorList.map(i => {
                i.selected = false;
            })
            this.colorList[j].selected = true;
            this.formLabelAlign.pageStyle = this.colorList[j].color;
            this.selectedColor= this.colorList[j].color;
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
            // let selectColor = false;
            this.colorList.map(i => {
                if (i.selected) {
                    this.formLabelAlign.pageStyle = i.color;
                }
            })
            if (this.formLabelAlign.pageStyle) {
                if (this.formLabelAlign.pageStyle.length != 7) {
                    that.$message({
                        showClose: true,
                        message: '请输入正确色号',
                        duration: 3 * 1000,
                        type: 'error'
                    })
                    return;
                } else {
                    json.pageStyle = this.formLabelAlign.pageStyle.startsWith('#') ? this.formLabelAlign.pageStyle : '#' + this.formLabelAlign.pageStyle;
                }

            } else if (selectColor) {
                json.pageStyle = selectColor
            } else {
                that.$message({
                    showClose: true,
                    message: '请选择或填写颜色',
                    duration: 3 * 1000,
                    type: 'error'
                })
                return;
            }

            putInfo(json).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '保存成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })
                    that.getDataFn()
                }
            })
        },
        getDataFn() {
            let that = this;
            getData({}).then(res => {
                if (res.code == '00') {
                    that.formLabelAlign = res.data;
                }
            })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getDataFn()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
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
.setStyle {
    padding: 72px 78px;

    p.tips {
        color: #454545;
        font-size: 22px;
        margin-bottom: 58px;
    }

    .imgBox {
        // width: 50%;
        // height: 832px;
        padding:36px 54px;
        box-sizing: border-box;
        border: 2px dashed #797979;
        border-radius: 10px;
      
        img {
            width: 375px;
            height: 812px;
            display: inline-block;
              margin: 0 20px;
        }
    }

    .colorBox {
        width: 50%;
            margin-left: 110px;

        .colorList {
            margin-top: 33px;
        }

        .eachColor {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            min-width: 60px;
            color: #fff;
            font-size: 24px;
            font-weight: bolder;
            margin-bottom: 50px;
        }

        .inputIips {
            margin-bottom: 60px;
        }

        .inputBox {
            width: 180px;
            margin-right: 18px;

        }

        .colorTips {
            color: #9A9A9A;
            font-size: 22px;
        }

        .btnBox {
            margin-top: 280px;
        }
    }
}
</style>
