<template>
    <div>
        这是子组件child2
    </div>
</template>

<script>
import bus from '@/common/bus'
export default {
    name:'child2',
    data() {
        return {
            name:'',
        }
    },
    //页面渲染完成后完成执行
    created(){
        //监听事件总线的方法
        bus.$on('childTwoShowMsg',(param)=>{
            console.log('参数:',param);
            alert('child2组件弹框，参数：'+param);
        });
    }
}
</script>

<style>

</style>