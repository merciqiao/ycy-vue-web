import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import user_store from './components/user_store'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    //字段
  },
  mutations: {
    //同步操作state
  },
  actions: {
    //异步操作mutations
  },
  //按功能划分的单文件store模块
  modules: {
    user_store
  },
  plugins: [vuexLocal.plugin]//持久化
})
