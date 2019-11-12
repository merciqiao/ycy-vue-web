<template>
  <div>
    这是stylescope页面
    <div class="btn">
      <el-input v-model="name" placeholder="请输入内容"></el-input>
      <br>
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <br>
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
<!-- 如果加了scope，
自己写的样式都会加上前缀；
自己写的元素样式也都将加随机前缀；
elementui的元素最外层会加随机前缀，但是内层的不会加
解决办法：
深度选择器：>>> 或者 /deep/-->
<style scoped>
.btn {
  border: 1px solid red;
}
.el-input {
  width: 300px;
}
/* >>>.el-input__inner{
    width:500px;
} */
/deep/.el-input__inner{
    width:500px;
}
</style>