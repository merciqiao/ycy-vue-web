<template>
  <div class="_stylenoscope">
    这是stylescope页面
    <div class="btn">
      <el-input v-model="name" placeholder="请输入内容"></el-input>
      <br />
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br />
      <div class="el-input__inner">div</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "张三",
      selectValue: "",
      selectOptions: [
        {
          value: "1",
          label: "张三"
        },
        {
          value: "2",
          label: "李四"
        }
      ] //下拉框选项List
    };
  }
};
</script>
<!--不加scoped，直接修改样式会影响全局样式
解决办法：启用sass，加作用域修改-->
<style lang="scss">
.btn {
  border: 1px solid red;
}
/* .el-input {
  width: 300px;
} */
._stylenoscope {
  .el-input {
    width: 300px;
  }
}
</style>