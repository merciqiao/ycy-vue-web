import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/5.4/New.vue')
  },
  {
    path: '/new2',
    name: 'new2',
    component: () => import('../views/6.1/New2.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/6.1/Parent.vue')
  },
  {
    path: '/child',
    name: 'child',
    component: () => import('../views/6.1/Child.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/6.1/Lifecycle.vue')
  },
  {
    path: '/test01',
    name: 'test01',
    component: () => import('../views/test/test01.vue')
  },
  {
    path: '/basecontrol',
    name: 'basecontrol',
    component: () => import('../views/6.2/BaseControl.vue')
  },
  {
    path: '/axiosdemo',
    name: 'axiosdemo',
    component: () => import('../views/6.3/AxiosDemo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/**
 * 请求拦截器,添加请求头token
 */
axios.interceptors.request.use(
  config => {
    console.log('>>>请求url:',config.url);
    var headers = config.headers;
    if (sessionStorage.getItem("token")) {
      //请求头设置token
      headers.token = sessionStorage.getItem("token");
    }
    return config;
  },
  error => {
    console.log('>>>请求异常:',error.message);
    return Promise.reject(error);
  });


/**
 * 应答拦截器,添加请求头token
 */
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('<<<请求成功');
  return response;
}, error=> {
  // Do something with response error
  console.log('<<<异常信息:',error.message);
  return Promise.reject(error);
});


export default router
