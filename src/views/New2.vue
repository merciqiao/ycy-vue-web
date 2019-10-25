<template>
  <div>
    <div>我是一个新页面叫new.vue</div>
    <div>
      姓名：
      <input type="text" v-model="name" />
       <br>
      <!-- 按钮 -->
      <input class="btn" type="button" value="查看name" @click="showName" />
      <br>
      <!-- 差值表达式 -->
      <div>{{name}}</div>

      <br>
      <!-- 双向绑定:<input type="text" v-model="name"/> -->
      <input type="text" v-model="name" />
    </div>
    <!-- 列表渲染 -->
    <div>
        <ul>
         <li v-for="(item,index) in list" :key="index">
           {{index}}.{{item}}
         </li>
        </ul>
    </div>
    <!-- table表格渲染 -->
    <div>
      <table border="1" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>城市</th>
        </tr>
        <tr v-for="(item,index) in tableData" :key="index">
          <td>{{index}}</td>
          <td>{{item.name}}</td>
          <td>{{item.city}}</td>
        </tr>
      </table>
    </div>
    <!-- v-if和v-show -->
    <div v-if="true">这是v-if显示</div>
    <div v-if="false">这是v-if隐藏</div>
    <div v-show="true">这是v-show显示</div>
    <div v-show="false">这是v-show隐藏</div>
  </div>
</template>
<!-- CSS样式 -->
<style lang="scss">
.btn {
  width: 200px;
  color: red;
}
</style>
<script>
export default {
  name: "new2", //页面名称
  data() {
    //页面实体
    return {
      name: "张三",
      list:['杨超越','张紫宁','徐梦洁'],
      tableData:[
        {
          name:'张三',
          city:'河北'
        },
        {
          name:'李四',
          city:'北京'
        },
        {
          name:'杨超越',
          city:'江苏'
        }
      ]
    };
  },
  //页面方法
  methods: {
    /**
     * 改变名称
     */
    showName() {
      // alert(111);
      console.log('name变量：'+this.name);
    }
  }
};
</script>