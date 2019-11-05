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
    }
  },
}
</script>

<style>

</style>