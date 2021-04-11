<template>
<div class="wxAcountSet flexCenter flexColumn bgf">
    <img src="../../assets/images/shops/renzheng.png" alt="" class="wxLogo">
    <p class="title">认证公众号注册</p>
    <div class="qrcode">
        <img :src="imgFile" alt="">
    </div>
</div>
</template>

<script>
import QRCode from 'qrcodejs2'
import {
    getScanCode
} from '@/api/shops/index'
export default {
    data() {
        return {
            imgFile: ''
        }
    },
    methods: {
        getCodeFn() {
            let that = this;
            getScanCode().then(res => {
                that.imgFile = 'data:image/png;base64,'+res.data;
                console.log(that.imgFile)
            })
        },
        //将base64转换为文件 data ---base64字符串 filename---生成文件的名字 ---- 传入的bsae64 去掉data:image/png;截取这个后面的
        dataURLtoFile(data, filename) {
            var bstr = atob(data),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: "jpg/png"
            });
           
        }
    },
    created() {
        this.getCodeFn()
    }
}
</script>

<style lang="scss" scoped>
.wxAcountSet {
    padding: 50px 0;

    .wxLogo {
        width: 88px;
        height: 95px;
        margin-bottom: 24px;
    }

    .title {
        font-size: 22px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #545454;
        margin-bottom: 70px;
    }

    .qrcode {
        display: inline-block;

        img {
            width: 250px;
            height: 250px;
            background-color: #fff; //设置白色背景色
            padding: 6px; // 利用padding的特性，挤出白边
            box-sizing: border-box;
        }
    }
}
</style>
