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
    <div>
      method和componets比较
      <div>{{getAB()}}</div> 
      <div>{{getAB2}}</div>
      <div>
        <input type="button" value="执行B+1" @click="BAdd">
        <input type="button" value="读取AB" @click="ShowAB">
      </div>
      
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
      a:1,
      b:2,
    };
  },
  props:{
      genderList: Array
  },
  methods: {
      showGenders(){
          console.log("子页性别列表是：",this.genderList.toString());
      },
      getAB(){
        console.log("getAB")
          return this.a+this.b;
      },
      BAdd(){
        this.b+=1;
      },
      ShowAB(){
        this.getAB();
        var a=this.getAB2;
      }
  },
  computed: {
    getAB2(){
      console.log("getAB2")
      return this.a+this.b;
    }
  },
};
</script>

