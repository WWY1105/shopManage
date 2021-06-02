<template>
<div class="kitchen">
    <div class="bgf part1 flexStart">
        <img class="icon" alt="">
        <div class="textBox">
            <h2>厨房管理</h2>
            <p>配置厨房部门，以便订单按厨房不同部门、岗位分开打印出单。</p>
        </div>
    </div>
    <p class="partTitle">设置厨房部门、岗位</p>
    <div class="tableBox bgf">
        <div class="list flexStart">
            <div class="eachItem flexCenter flexColumn mr-left0">
                <p class="title">冷菜</p>
                <div class="flexSpace">
                    <div class="btns flexStart">
                        <i class="editIcon el-icon-edit-outline" @click="val=>editFn(val,i)"></i>
                        <i class="el-icon-delete deleteIcon" @click="val=>showDeleteFn(val,i.id)"></i>
                    </div>
                </div>
            </div>
            <div class="eachItem flexCenter flexColumn">
                <p class="addIcon">
                    <i class="el-icon-plus" size="50"></i>
                </p>
                <p class="addTips">新增部门、岗位</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    kitchenList,
    kitchenAdd,
    kitchenId,
    putKitchen,
    deleteKitchen
} from '@/api/shops/index'
export default {
    data() {
        return {
            kitchenList: [],
            edtiDisVisible: false, // 修改的弹窗
            tergetId: '',
            editJson: {},

        }
    },
    created() {

        this.getKitchenList()
    },
    methods: {
        // 获取厨房部门列表
        getKitchenList() {
            const that = this;
            kitchenList({}).then(res => {
                if (res.code == '00') {
                    that.kitchenList = res.data;
                }
            })
        },
        //编辑
        // 修改
        editFn(val, item) {
            this.edtiDisVisible = true;
            this.tergetId = item.id;
            this.editJson = item;
        },
        // 删除
        showDeleteFn(val, id) {
            let that = this;
            deleteData(id).then(res => {
                if (res.code == '00') {
                    that.$message({
                        showClose: true,
                        message: '删除成功',
                        duration: 3 * 1000,
                        type: 'success'
                    })

                }
                that.getKitchenList();
                that.edtiDisVisible = false
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.kitchen {
    .part1 {
        padding: 39px 67px;
        border: 1px solid #C7C7C7;

        .icon {
            width: 100px;
            height: 100px;
            margin-right: 35px;
        }

        .textBox {
            h2 {
                color: #00B0F0;
                font-weight: bold;
                font-size: 20px;
                margin: 0 0 20px;
            }

            p {
                color: #7E7E7E;
                font-size: 12px;
            }
        }
    }

    .partTitle {
        padding: 22px 67px;
        font-size: 20px;
        font-weight: 400;
        color: #393939;
    }

    .tableBox {
        padding: 39px;
        border: 1px solid #C7C7C7;

        .eachItem {
            width: 160px;
            height: 160px;
            background: #F4F4F4;
            border-radius: 10px;
            margin-left: 60px;
            &.mr-left0{
                margin-left: 0;
            }
            .title {
                font-size: 22px;
                font-weight: 400;
                color: #00B0F0;
                line-height: 11px;
            }

            .btns {
                margin-top: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #FF5B5B;
                align-self: flex-end;

                .editIcon {
                    margin-right: 36px;
                    color: #00B0F0;
                }
            }

            .addIcon {
                font-size: 40px;
            }

            .addTips {
                font-size: 14px;
                font-weight: 400;
                color: #2A3F54;
                margin-top: 25px;
            }
        }
    }

}
</style>
