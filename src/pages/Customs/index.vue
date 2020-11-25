<!--  -->
<template>
  <div class="customs">
    <div class="searchBox bgf">
      <el-form
        label-position="top"
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form-item label="注册时间段">
                <el-input
                  v-model="formInline1.user"
                  placeholder="注册时间段"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form-item label="最后登录时间段">
                <el-input
                  v-model="formInline1.user"
                  placeholder="最后登录时间段"
                ></el-input>
              </el-form-item>
            </div>
          </el-col>
           <el-col :span="5" :offset="9"></el-col>
        </el-row>
      </el-form>

      <el-form label-position="top" :model="formInline1">
        <div class="flexSpace">
          <el-row :gutter="20" type="flex"  justify="space-between" align="bottom">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="用户昵称">
                  <el-input
                    v-model="formInline1.user"
                    placeholder="用户昵称"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="用户ID">
                  <el-input
                    v-model="formInline1.user"
                    placeholder="用户ID"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="邀请人昵称">
                  <el-input
                    v-model="formInline1.user"
                    placeholder="邀请人昵称"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="邀请人ID">
                      <el-input
                    v-model="formInline1.user"
                    placeholder="邀请人ID"
                  ></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>

    <div class="tableBox bgf">
      <el-table stripe :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="客户ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="头像" width="180">
        </el-table-column>
        <el-table-column prop="address" label="昵称"> </el-table-column>
        <el-table-column prop="address" label="手机号"> </el-table-column>
        <el-table-column prop="address" label="邀请人ID"> </el-table-column>
        <el-table-column prop="address" label="邀请人昵称"> </el-table-column>
        <el-table-column prop="address" label="注册时间"> </el-table-column>
        <el-table-column prop="address" label="最后登录时间"> </el-table-column>
        <el-table-column prop="address" label="消费金额 "> </el-table-column>
        <el-table-column prop="address" label="分销奖金"> </el-table-column>
        <el-table-column prop="address" label="分享佣金"> </el-table-column>
        <el-table-column prop="address" label="客户类型"> </el-table-column>
        <el-table-column prop="address" label="备注"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      formInline: {},
      formInline1: {},
      tableData: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit() {},
  },
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.customs{
   //min-height: 100%;
}
.searchBox {
  padding: 28px 33px;
}

.tableBox {
  padding: 0 33px 30px;
}
</style>
