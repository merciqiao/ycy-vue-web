<template>
  <div>
    <div>这是child4.vue</div>
    <div v-for="(item ,index) in dataList" :key="index">
      <span>{{item.name}}</span>
      <el-select placeholder="性别" v-model="genderList[index]">
        <el-option
          v-for="(item,index) in types"
          :key="index"
          :label="item.name"
          :value="item.gender"
        ></el-option>
      </el-select>
    </div>
    <div>
        <input type="button" @click="showGenders" value="子页查看性别">
    </div>
  </div>
</template>

<script>
export default {
  name: "child4",
  data() {
    return {
      dataList: [
        {
          name: "张三",
          city: "北京"
        },
        {
          name: "李四",
          city: "上海"
        }
      ],
      types: [
        {
          name: "男",
          gender: "1"
        },
        {
          name: "女",
          gender: "2"
        }
      ],
    //   genderList:[]
    };
  },
  props:{
      genderList: Array
  },
  methods: {
      showGenders(){
          console.log("子页性别列表是：",this.genderList.toString());
      }
  },
};
</script>

<style>
</style>