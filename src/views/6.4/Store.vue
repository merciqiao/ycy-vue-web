<template>
  <div>
    这是store.vue页面
    <div>
      <el-button @click="login">登陆</el-button>
    </div>
    <div>
      <el-button @click="loginPromise">登陆Promise</el-button>
    </div>
    <div>
      <el-button @click="loginPlus">登陆Plus</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
      //命名空间、state名称
    ...mapState("user_store", ["token"])
  },
  methods: {
    // map映射  'setUserInfo'  将 `this.setUserInfo(param)` 映射为 `this.$store.dispatch('setUserInfo', param)`
    //命名空间、action名称
    ...mapActions("user_store", ["setUserInfo_Promise"]),
    login() {
      var param = {
        loginName: "admin",
        password: "123456"
      };
      //带命名空间调用
      this.$store
        .dispatch("user_store/setUserInfo", param)
        .then(res => {
          debugger;
        })
        .catch(err => {
          debugger;
        });
    },
    loginPromise() {
      var param = {
        loginName: "admin",
        password: "123456"
      };
      console.log("loginPromise_1");
      //带命名空间调用
      this.$store
        .dispatch("user_store/setUserInfo_Promise", param)
        .then(res => {
          console.log("loginPromise_8");
        })
        .catch(err => {
          debugger;
        });
    },
    loginPlus() {
      var param = {
        loginName: "admin",
        password: "123456"
      };
      this.setUserInfo_Promise(param)
        .then(res => {
          debugger;
          console.log("登陆成功：", res);
          //读取state
          console.log("token:", this.$store.state.user_store.token);

          console.log("this.token:",this.token);
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
</style>