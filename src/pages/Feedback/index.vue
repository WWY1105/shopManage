<!--  -->
<template>
<div class='feedback'>
    <!-- 商品营销 -->
    <div class="part bgf flexCenter flexColumn">
        <p class="chTitle">意见反馈</p>
        <p class="enTitle">感谢您的宝贵意见</p>
        <div class="content">
            <el-form>
                <el-form-item>
                    <el-input placeholder="您的称呼" v-model="name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="联系方式" v-model="tel" type="number"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="textarea" :rows="10" placeholder="*详细说明" v-model="content">
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="uploadBox">

                <!-- 图片上传 -->
                <el-upload :file-list="imgUrlfileList" :action="$uploadApi" :on-success="handleimgurlSuccess" list-type="picture-card">
                    <i slot="default" class="el-icon-plus"></i>

                </el-upload>
            </div>
            <div class="buttonBox">
                <el-button class="searchBtn" @click="postMsgFn">发送</el-button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    postMsg
} from '@/api/contact/index'
export default {
    components: {},
    data() {
        return {
            name: '',
            tel: '',
            content: '',
            imgurls: '',
            imgUrlfileList: [],
        };
    },
    computed: {},
    watch: {},
    methods: {
        postMsgFn() {
            let json = {
                name: this.name,
                tel: this.tel,
                content: this.content,
                imgurls: this.imgurls
            }
            if(!this.name){
                 this.$message({
                    showClose: true,
                    message: '请输入姓名',
                    duration: 3 * 1000,
                    type: 'error'
                })
                return;
            }
             if(!this.tel||this.tel.length!=11){
                 this.$message({
                    showClose: true,
                    message: '请输入正确联系电话',
                    duration: 3 * 1000,
                    type: 'error'
                })
                return;
            }
             if(!this.content){
                 this.$message({
                    showClose: true,
                    message: '请输入内容',
                    duration: 3 * 1000,
                    type: 'error'
                })
                return;
            }
            console.log(json);
            // return;
            postMsg(json).then(res => {
                if(res.code=='00'){
                    this.$message({
                    showClose: true,
                    message: '发送成功',
                    duration: 3 * 1000,
                    type: 'success'
                })
                this.name= '';
                this.tel= '';
                this.content= '';
                this.imgurls= '';
                }
            })
        },
        handleimgurlSuccess(response) {
            console.log(response)
            this.imgurls += response.data;
        },
    },
    created() {

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
.feedback {
    min-height: 100%;

    .part {
        margin-bottom: 20px;
        padding: 34px 150px 50px;

        .chTitle {
            font-size: 30px;
            font-weight: bold;
            color: #0091C6;
            margin-bottom: 10px;
        }

        .enTitle {
            font-size: 12px;
            font-weight: 400;
            color: #0091C6;
        }

        .content {
            width: 100%;
            margin-top: 80px;
            width: 800px;
        }

        .uploadBox {
            margin-top: 40px;
        }

        .buttonBox {
            margin-top: 80px;

        }
    }
}
</style>
