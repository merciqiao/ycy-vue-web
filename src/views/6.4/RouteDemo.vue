<template>
  <div>
      这是routedemo.vue页
      <div>
          <!-- router-link跳转 -->
          <router-link to="/routedemo2">01.router-link跳转到routedemo2页面</router-link>
      </div>
      <div>
        <el-button type="primary" plain @click="route_push">路由push跳转</el-button>
      </div>
      <div>
        <el-button type="primary" plain @click="route_replace">路由replace跳转</el-button>
      </div>
      <div>
        <el-button type="primary" plain @click="route_params">路由params传参</el-button>
      </div>
       <div>
        <el-button type="primary" plain @click="route_query">路由query传参</el-button>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    //路由push跳转
    route_push(){
      //参数路由path
      this.$router.push('/routedemo2');
    },
    //路由push跳转
    route_replace(){
      //参数路由path
      this.$router.replace('/routedemo2');
    },
    //路由params传参
    route_params(){
      this.$router.push({
        name:'routedemo2',//params传参必须用name
        path:'/routedemo2',
        params:{
          name:'张三',
          city:'北京'
        }
      });
    },
     //路由query传参
    route_query(){
      this.$router.push({
        // name:'routedemo2',//query传参name和path都可以
        path:'/routedemo2',
        query:{
          name:'张三',
          city:'北京'
        }
      });
    }
  },
}
</script>

<style>

</style>