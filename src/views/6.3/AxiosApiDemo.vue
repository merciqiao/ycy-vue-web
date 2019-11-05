<template>
  <div>
    这是axiosapidemo页
    <div>
      <el-button type="primary" @click="post_RequestBody">POST:RequestBody传参(封装)</el-button>
      <el-button type="primary" @click="post_RequestParam">POST:RequestParam传参01</el-button>
      <el-button type="primary" @click="post_RequestParam2">POST:RequestParam传参02(封装)</el-button>
      <el-button type="primary" @click="get_RequestBody">GET:RequestParam传参</el-button>
    </div>
    <div>
      超时设置：
      <el-button type="primary" @click="post_RequestBody">全局超时设置</el-button>
      <el-button type="primary" @click="post_Timeout">POST超时设置</el-button>
      <el-button type="primary" @click="get_Timeout">GET超时设置</el-button>
    </div>
  </div>
</template>

<script>
// import apis from '@/apis/apis'
import apis from '../../apis/apis'
export default {
  name: "axiosdemo",
  methods: {
    //重构
    post_RequestBody() {
      var param = {
        name: "张三",
        city: "北京"
      };
      apis.axiosDemoApi.post_RequestBody(param)
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    },
    post_RequestParam() {
      //01.URLSearchParams方式,网上说兼容性不好
      var param = new URLSearchParams();
      param.append("name", "李四");
      param.append("city", "上海");
      this.$http
        .post("/api/demo-api/post_form", param)
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    },
    //重构
    post_RequestParam2() {
      //02.main.js中全局添加qs处理参数
      var param = {
        name: "张三",
        city: "北京"
      };
      apis.axiosDemoApi.post_RequestParam2(param)
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    },
    get_RequestBody() {
      var param = {
        name: "张三",
        city: "北京"
      };
      this.$http
        .get("/api/demo-api/get_form", { params: param })
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    },
    post_Timeout() {
      var param = {
        name: "张三",
        city: "北京"
      };
      this.$http
        .post("/api/demo-api/post_body", param, {
          timeout: 10
        })
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    },
    get_Timeout() {
      var param = {
        name: "张三",
        city: "北京"
      };
      this.$http
        .get("/api/demo-api/get_form", { params: param, timeout: 10 })
        .then(res => {
          //成功
          console.log("成功报文：", res);
        })
        .catch(err => {
          //异常
          console.log("异常报文：", err);
        });
    }
  }
};
</script>

<style>
</style>