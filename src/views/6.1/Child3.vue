<template>
  <div>
      这是子组件child3
      <div>
          <input type="button" @click="callChild2" value="调用child2">
      </div>
  </div>
</template>

<script>
import bus from '@/common/bus'
export default {
    name:'child3',
    methods: {
        callChild2(){
            bus.$emit('childTwoShowMsg','这是子组件child3的参数222');
        }
    },
}
</script>

<style>

</style>