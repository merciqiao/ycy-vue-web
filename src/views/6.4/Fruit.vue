<template>
  <div>
    我是fruit水果页面
    <div>
      <router-link class="tag" to="/fruit">水果页面</router-link>
      <router-link class="tag" to="/apple">苹果页面(子路由)</router-link>
      <router-link class="tag" to="/peach">桃子页面(子路由)</router-link>
      <router-link class="tag" to="/banana">香蕉页面</router-link>
    </div>
    <div class="childview">
      <!-- 子路由视图 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tag{
    margin-right:20px;
}
.childview{
    border:1px solid green;
    height:300px;
    width:300px;
    margin:0 auto;
}
</style>