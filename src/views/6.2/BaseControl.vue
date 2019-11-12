<template>
  <div>
    这是BaseControl基本控件页面
    <div>
      文本框:
      <el-input v-model="wenben" placeholder="请输入内容"></el-input>按钮：
    </div>
    <div>
      按钮：
      <el-button type="primary" @click="showWenben">查看文本框值</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" size="small" round>警告按钮</el-button>
    </div>
    <div>
      单选按钮：
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <el-button type="primary" @click="showRadio">查看单选值</el-button>
    </div>
    <div>
      多选框：
      <el-checkbox v-model="checked">备选项</el-checkbox>
      <el-button type="primary" @click="showCheck">查看多选框值</el-button>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A">A</el-checkbox>
        <el-checkbox label="复选框 B">B</el-checkbox>
        <el-checkbox label="复选框 C">C</el-checkbox>
      </el-checkbox-group>
      <el-button type="primary" @click="showCheckBox">查看多选框组</el-button>
    </div>
    <div>
      下拉框:
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" @click="showSelect">查看下拉框值</el-button>
    </div>
    <div>
      日期控件：
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="dateTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-button type="primary" @click="showDateTime">查看日期</el-button>
    </div>
    <div>
      表格：
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div>
      子页面
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "basecontrol",
  data() {
    return {
      wenben: "这是文本框",
      radio: "", //单选按钮
      checked: false, //多选框
      checkList: ["复选框 B"], //多选按组
      selectValue: [], //下拉框值
      selectOptions: [
        {
          value: "1",
          label: "张三"
        },
        {
          value: "2",
          label: "李四"
        }
      ], //下拉框选项List
      dateTime: "", //日期控件
      tableData: [
        {
          //表格控件
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    showWenben() {
      alert(this.wenben);
    },
    showRadio() {
      alert(this.radio);
    },
    showCheck() {
      alert(this.checked);
    },
    showCheckBox() {
      console.log(this.checkList);
    },
    showSelect() {
      alert(this.selectValue);
    },
    showDateTime() {
      debugger;
      console.log(this.dateTime);
    }
  }
};
</script>

<style>
</style>