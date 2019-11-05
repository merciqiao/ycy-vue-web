<template>
  <div>
      这是routedemo2.vue页
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("$route:",this.$route);


    var params= this.$route.params;
    console.log("params:",params);

    var query=this.$route.query;
    console.log('query:',query);
  },
}
</script>

<style>

</style>