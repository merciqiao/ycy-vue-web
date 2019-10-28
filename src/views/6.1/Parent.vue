<template>
  <div>
      这是一个parent.vue
     <br>
      <!-- <input type="text" v-model="student.city"> -->
       <input type="text" v-model="city">
        <div>
            <input type="button" @click="callChild" value="父组件调用子组件方法">
        </div>
      <br>
      ---------------------------------------
       <!-- 父组件引用子组件 -->
      <Child ref="refChild" name="张三" :city="city" @fromChild="showMsg">

          <!-- 插槽的使用 -->
          <div>
              <input type="text" value="我是来自父组件的文本框">
          </div>
      </Child>
        <!-- <Child :student='student'></Child> -->

        ---------------------------------------
       <Child2></Child2>
       ---------------------------------------
        <Child3></Child3>
         ---------------------------------------
        <Child4 :genderList="genderList"></Child4>
        <div>
            <input type="button" @click="showGenders" value="父页查看性别按钮">
        </div>

  </div>
</template>


<script>
import Child from './Child.vue'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
export default {
    name:'parent',
    data() {
        return {
            student:{
                name:'李四',
                city:'北京'
            },
            city:'北京',
            genderList:[],
        }
    },
    //注册子组件
    components:{
        Child,
        Child2,
        Child3,
        Child4
    },
    methods: {
        //监听子组件的方法
        showMsg(param){
            alert('监听子组件的方法:'+param);
        },
        //父组件调用子组件
        callChild(){
            this.$refs.refChild.fromParent('父组件的参数111');
        },
        showGenders(){
            console.log("父页性别列表是：",this.genderList.toString());
        }
    },
}
</script>

<style>

</style>