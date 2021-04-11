<template>
<div class="wxAcountSet flexCenter flexColumn bgf">
    <img src="../../assets/images/shops/renzheng.png" alt="" class="wxLogo">
    <p class="title">认证公众号注册</p>
    <div class="qrcode" ref="qrCodeUrl"></div>
</div>
</template>

<script>
import QRCode from 'qrcodejs2'
import {
    getScanCode
} from '@/api/shops/index'
export default {
    data() {},
    methods: {
        getCodeFn() {
            getScanCode().then(res => {
                var qrcode = new QRCode(this.$refs.qrCodeUrl, {
                    text: res.data, // 需要转换为二维码的内容
                    width: 250,
                    height: 250,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                })
            })
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
