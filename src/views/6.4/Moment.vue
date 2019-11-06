<template>
  <div>
    这是moment.vue页面
    <div>
      表格：
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="city" label="地址" width="180"></el-table-column>
        <el-table-column prop="createtime" :formatter="format_date" label="创建日期" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "张三",
          city: "北京",
          type: "1",
          age: 18,
          gender: 1,
          qq: 123444,
          createtime: 1546587784000,
          updatetime: 1546587784000
        },
        {
          name: "李四",
          city: "上海",
          type: "2",
          age: 19,
          gender: 0,
          qq: 555,
          createtime: 1572959048000,
          updatetime: 1572959048000
        }
      ]
    };
  },
  methods: {
    format_date(row, column, cellValue, index) {
      if (cellValue == undefined) {
        return "";
      }
      return this.$moment(cellValue).format("YYYY-MM-DD HH:mm:ss");
    }
  }
};
</script>

<style>
</style>