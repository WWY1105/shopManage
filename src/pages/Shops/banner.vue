<template>
<div class="bannerBox">
    <div class="searchBox bgf">
        <div class="flexEnd">
            <el-button class="searchBtn" @click="addBannerVisible=true">+新增</el-button>
        </div>
    </div>
    <div class="tableBox bgf">
        <el-table stripe :data="bannerList" border style="width: 100%">
            <el-table-column prop="index" type="index" label="序号">

            </el-table-column>
            <el-table-column prop="index" label="图片">
                <template slot-scope="scope">
                    <div class="flexCenter">
                        <img :src="$imgurl+scope.row.imgurl" class="mainPic" alt="">
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="rediectType" label="跳转类型">
                <template slot-scope="scope">
                    <div class="flexCenter">
                        {{scope.row.rediectType=='1'?'商品':'外部链接'}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="index" label="跳转内容">
                <template slot-scope="scope">
                    <div class="flexCenter">
                        {{scope.row.rediectType=='1'?'商品ID：'+scope.row.rediectTarget:scope.row.rediectTarget}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="index" label="排序">
                <template slot-scope="scope">
                    <div class="flexCenter sortBox">
                        <i class="el-icon-arrow-up" @click="val=>toUporDown(val,scope.row.id,'sy')"></i>
                        <i class="el-icon-arrow-down" @click="val=>toUporDown(val,scope.row.id,'xy')"></i>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="index" label="操作">
                <template slot-scope="scope">
                    <div class="controlBox flexCenter">
                        <p class="editBtn" @click="val=>{editFn(val,scope.row)}">
                            编辑
                        </p>
                        <div class="deleteBtn" @click="val=>{showDeleteDialog(val,scope.row.id)}">删除</div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <!-- 删除的确认弹窗 -->
    <deleteDialog title="确定删除此商品?" :deleteVisible="deleteVisible" />

    <el-dialog title="轮播图" center :visible.sync="addBannerVisible" class="ruleDialog">
        <div class="dialogContent">
            <el-form label-width="100px" label-position="left" :inline="true">
                <el-form-item label="跳转类型">
                    <el-select v-model="addBannerObj.rediectType" placeholder="跳转类型">
                        <el-option v-for="(i,j) in typeList" :value="i.value" :label="i.text" :key="j"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图片">
                    <el-upload :on-remove="handleRemove" :file-list="fileList" :limit="limit" class="avatar-uploader" :action="$uploadApi" :on-success="handleimgurlSuccess" list-type="picture-card">
                        <i class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="商品id" v-if="addBannerObj.rediectType==1">
                    <el-input v-model="addBannerObj.rediectTarget " type="number"></el-input>
                </el-form-item>
                <el-form-item label="链接" v-else>
                    <el-input v-model="addBannerObj.rediectTarget " type="text"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer flexCenter flexColumn">
                <el-button class="searchBtn btn" type="primary" @click="saveBannerFn">确 定</el-button>
                <el-button class="btn cancelBtn transBtn" @click="addBannerVisible = false">取 消</el-button>
            </span>
        </div>
    </el-dialog>
</div>
</template>

<script>
import deleteDialog from '../../components/deleteDialig'
import {
    getBanner,
    upOrDown,
    deleteBanner,
    saveBanner,
    putBanner
} from '@/api/shops/index'
export default {
    data() {
        return {
            limit: 1,
            bannerList: null,
            deleteVisible: false,
            targetId: false,
            addBannerVisible: false,
            imageUrl: false,
            fileList: [],
            addBannerObj: {
                rediectType: '1'
            },
            typeList: [{
                text: '跳转商品',
                value: '1'
            }, {
                text: '跳转外部链接',
                value: '2'
            }]
        }
    },
    components: {
        deleteDialog
    },
    methods: {
        handleRemove(file, fileList) {
             console.log(file);
            console.log(fileList);
        },
        handleimgurlSuccess(res, file) {
            console.log(res)
            this.imageUrl = URL.createObjectURL(file.raw);
            this.addBannerObj.imgurl = res.data;
        },
        editFn(val, obj) {
            console.log(obj)
            this.addBannerObj = obj;
            this.fileList.push({
                url: this.$imgurl + obj.imgurl
            })
            console.log(this.fileList)
            this.addBannerVisible = true;
        },
        // 删除的弹窗
        showDeleteDialog(val, id) {
            this.deleteVisible = true;
            this.targetId = id;

        },
        confirmDelete() {
            let that = this;
            deleteBanner(this.targetId).then(res => {
                if (res.code == '00') {

                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 2 * 1000,
                        type: 'success'
                    })
                    that.deleteVisible = false;
                    that.getBannerFn()
                }
            })
        },
        getBannerFn() {
            getBanner().then(res => {
                console.log(res)
                if (res.code == '00') {
                    this.bannerList = res.data;
                }
            })
        },
        // 上移或者下移
        toUporDown(val, id, type) {
            let that = this;
            // upOrDown(id, {
            //     type
            // }).then(res => {
            //     if (res.code == '00') {
            //         that.getList()
            //     }
            // })
        },
        saveBannerFn() {
            console.log(this.addBannerObj);
            const that = this;
            if (!this.addBannerObj.imgurl || !this.addBannerObj.rediectTarget || !this.addBannerObj.rediectType) {
                that.$message({
                    showClose: true,
                    message: '请填写完整信息',
                    duration: 2 * 1000,
                    type: 'error'
                })
                return;
            }
            // putBanner
            if (this.addBannerObj.id) {
                putBanner(this.addBannerObj.id, this.addBannerObj).then(res => {
                    if (res.code == '00') {
                        that.$message({
                            showClose: true,
                            message: '修改成功',
                            duration: 2 * 1000,
                            type: 'success'
                        })
                        that.addBannerVisible = false;
                        that.getBannerFn()
                    }
                })
            } else {
                {
                    saveBanner(this.addBannerObj).then(res => {
                        if (res.code == '00') {
                            that.$message({
                                showClose: true,
                                message: '添加成功',
                                duration: 2 * 1000,
                                type: 'success'
                            })
                            that.addBannerVisible = false;
                            that.getBannerFn()
                        }
                    })
                }

            }
        }
    },
    created() {
        this.getBannerFn()
    }
}
</script>

<style lang="scss" scoped>
.bannerBox {
    .searchBox {
        padding: 28px 33px;
    }

    .mainPic {
        width: 80px;
        height: 80px;
    }

    .tableBox {
        padding: 0 33px 30px;
    }

    // 排序
    .sortBox {
        i {
            color: #7F7F7F;
            width: 23px;
            height: 23px;
            border: 1px solid #7F7F7F;
            text-align: center;
            line-height: 23px;
            margin: 0 5px;
            min-width: 23px;
        }
    }

    .dialog-footer {
        margin-top: 50px;

        .el-button {
            width: 200px;

            &.cancelBtn {
                margin-left: 0;
                margin-top: 30px;
            }
        }
    }

}
</style>
