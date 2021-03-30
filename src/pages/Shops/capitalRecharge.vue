<template>
<div class="capitalRecharge flexCenter flexColumn">
    <p class="tips"></p>
    <div class="content  bgf">
        <div class="inputBox flexStart">
            <span class="inputLabel">充值金额</span>
            <input type="number">
        </div>
        <p class="tupsDanger">请确认金额后支付</p>
    </div>
    <div class="ways flexStart">
        <span class="label">支付方式*</span>
        <div class="waysBox flexStart">

        </div>
    </div>
    <button class="submit"></button>
</div>
</template>

<script>
export default {
    data() {
        return {
            ways: [{
                text: '支付宝'
            }, {
                text: '微信'
            }]
        }
    }
}
</script> 

<style lang="scss" scoped>
.capitalRecharge {
    .ways {
        margin-top: 30px;
    }

    .content {
        width: 800px;
        padding: 32px;

        .tupsDanger {
            margin-top: 35px;
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #A8A8A8;
            line-height: 40px;
        }

        .inputBox {
            width: 100%;
            border-bottom: 1px solid #DEDEDE;
            height: 85px;
            padding-bottom: 30px;

            .inputLabel {
                font-size: 20px;
                font-weight: 400;
                color: #858585;
                line-height: 16px;
            }

            input {
                height: 100%;
                border: none;
                padding-left: 34px;
                width: 60%;
            }
        }
    }
}
</style>
