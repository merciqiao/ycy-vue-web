<template>
  <div>
    这是一个child.vue
    <div>姓名:{{name}}  城市:{{city}}</div>

    <!-- <div>
          姓名:{{student.name}}城市:{{student.city}}
    </div>-->
    <div>
      <input type="text" v-model="city" />
      <!-- <input type="text" v-model="student.city" /> -->
    </div>
    <div>子组件调用父组件方法：
        <input type="button" @click="toParent" value="子组件点击事件">
    </div>
    <div>
        插槽:
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
  //字符串型的
  props: ["name", "city"],
  //对象型的
  // props:{
  //     student:Object
  // },
  methods: {
      toParent(){
          //调用父组件方法
          this.$emit('fromChild','我是子组件参数');
      },
      fromParent(param){
          alert("这是来自父组件的调用：参数是-->"+param);
      }
  },
};
</script>

<style>
</style>