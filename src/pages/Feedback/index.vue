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
                    <el-input placeholder="您的称呼"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="联系方式"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="textarea" :rows="10" placeholder="*详细说明" v-model="textarea">
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="uploadBox">

                <!-- 图片上传 -->
                <el-upload action="#" list-type="picture-card" :auto-upload="false">
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
            </div>
            <div class="buttonBox">
                <el-button class="searchBtn">发送</el-button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            textarea:''
        };
    },
    computed: {},
    watch: {},
    methods: {

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
            width: 969px;
        }
        .uploadBox{
            margin-top:40px;
        }
        .buttonBox{
            margin-top:80px;

        }
    }
}
</style>
