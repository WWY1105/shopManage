<!--  -->
<template>
<div class='setStyle bgf'>
    <p class="tips">选择风格颜色</p>
    <el-row :gutter="20" type="flex" justify="top" class="content flexSpace">
        <el-col :span="12" class="imgBox flexCenter">
            <img :src="mainImg" alt="" :style="'background:'+formLabelAlign.pageStyle">
            <img :src="detailImg" alt="" :style="'background:'+formLabelAlign.pageStyle">
            <p class="imgTips"></p>
        </el-col>
        <el-col :span="12" class="colorBox ">
            <!-- flexStart flexWrap -->
            <div class="colorList ">
                <el-row :gutter="50" type="flex" justify="start" align="top" class="flexWrap">
                    <el-col :span="6" v-for="(i,j) in colorList" :key="j">
                        <p class="eachColor flexCenter" :style="{'background':i.color}" @click="value=>selectColor(value,j)">
                            <i class="el-icon-check" v-if="i.selected"></i>
                        </p>
                    </el-col>
                </el-row>
            </div>
            <p class="tips inputIips">自定义色值</p>
            <div class="flexStart ">
                <div class="inputBox">
                    <el-input @input="colorInput" placeholder="以#号开头" :value="formLabelAlign.pageStyle"></el-input>
                </div>
                <span class="colorTips">请填写6位色值</span>
            </div>
            <div class="btnBox">
                <el-button class="searchBtn" @click="saveDataFn">确定</el-button>
            </div>

        </el-col>
    </el-row>
</div>
</template>

<script>
import mainImg from '../../assets/images/shops/style/1.png'
import detailImg from '../../assets/images/shops/style/2.png'
import {
    putInfo,
    getData
} from '../../api/shops/index';
import {
    mapState
} from 'vuex';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            // selectedColor: '',
            mainImg: mainImg,
            detailImg: detailImg,
            colorList: [{
                color: '#ff3131',
                selected: false
            },{
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
            },  {
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
            }]
        };
    },
    //监听属性 类似于data概念
    computed: {
        ...mapState({
             formLabelAlign: state => state.user.userInfo
        })
       
    },
    //监控data中的数据变化
    watch: {

    },
    //方法集合
    methods: {
        colorInput(e) {
            if (e.trim() != ''&&e.trim().length<=7) {
                this.colorList.map(i => {
                    i.selected = false;
                })
                this.$set(this.formLabelAlign,'pageStyle',e)
            }
            // //console.log(this.formLabelAlign)
        },
        selectColor(value, j) {
            this.colorList.map(i => {
                i.selected = false;
            })
            this.colorList[j].selected = true;
            this.formLabelAlign.pageStyle = this.colorList[j].color;
            this.selectedColor = this.colorList[j].color;
        },
        saveDataFn() {
            let that = this;
            let json = this.formLabelAlign;
           

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
                        duration:1 * 1000,
                        type: 'success'
                    })
                    // that.getDataFn()
                    that.$router.go(-1)
                }
            })
        },
        // getDataFn() {
        //     let that = this;
        //     getData({}).then(res => {
        //         if (res.code == '00') {
        //             that.formLabelAlign = res.data;
        //         }
        //     })
        // }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // this.getDataFn()
        //console.log(this.$store.state)
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
    padding: 30px;

    p.tips {
        color: #454545;
        font-size: 22px;
        margin-bottom: 20px;
    }

    .content {
        align-items: flex-start;
        margin-top: 30px;

        // .colorList>div{
        //     width: 25%;
        // }
        .imgBox {
            padding: 30px 10px;
            box-sizing: border-box;
            border: 2px dashed #797979;
            border-radius: 10px;

            img {
                width: 220px;
                display: inline-block;
                margin: 0 20px;
            }
        }

        .colorBox {
            width: 50%;
            margin-left: 30px;

            .colorList {
                margin-bottom: 30px;

                .eachColor {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    min-width: 40px;
                    color: #fff;
                    font-size: 24px;
                    font-weight: bolder;
                    margin-bottom: 20px;
                }
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
                margin-top: 100px;
            }
        }
    }
}
</style>
