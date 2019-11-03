<template>
  <div>
      测试假接口
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        getData(){
            this.$http.get('data.js').then(res=>{
                debugger;
            }).catch(err=>{
                debugger;
            }); 
        }
    },
    mounted() {
        this.getData();
    },
}
</script>

<style>

</style>