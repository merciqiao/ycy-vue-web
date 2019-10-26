<template>
  <div>
      生命周期
  </div>
</template>

<script>
export default {
    name:'lifecycle',
    data() {
        return {
            name:'张三',
            city:'北京',
        }
    },
    //页面渲染之前
    created() {
        debugger;
        var a=this.$el;//获取页面dom
        var b=this.$data;//获取实体属性
        console.log(11);
    },
    //页面渲染之后
    mounted() {
        debugger;
        var a=this.$el;
        var b=this.$data;
        console.log(22);
    },
}
</script>

<style>

</style>