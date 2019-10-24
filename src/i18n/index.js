/**
 * 添加vue-i18n
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './language/en'
import zh from './language/zh'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en-US',//当前语言
  messages: {
    //英文
    "en-US": en,
    //中文
    'zh-CN':zh
  }
})
export default i18n