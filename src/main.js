import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false


/**
 * 添加elementui
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/**
 * 添加axios
 */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//设置全局请求超时时间
axios.defaults.timeout = 5000;//1000=1秒
/**
 * 添加qs，解决post_form传参
 */
import qs from 'qs';
Vue.prototype.$qs=qs;


/**
 * 添加vue-i18n
 */
import i18n from './i18n'
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)

// const i18n = new VueI18n({
//   locale: 'en-US',//当前语言
//   messages: {
//     //英文
//     "en-US": {
//       message: {
//         hello: 'hello'
//       }
//     },
//     //中文
//     'zh-CN':{
//       message: {
//         hello: '你好'
//       }
//     }
//   }
// })

/**
 * 添加moment.js
 */
window.moment = require('moment')

/**
 * 引入ckeditor
 */
// import CKEditor from '@ckeditor/ckeditor5-vue';
// Vue.use( CKEditor );



new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
