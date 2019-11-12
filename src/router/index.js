import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Home from '../views/Home.vue'

import RouteDemo2 from '../views/6.4/RouteDemo2'

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
    component: () => import('../views/6.2/BaseControl.vue'),
    children:[
      {
        path: '/stylescope',
        name: 'stylescope',
        component: () => import('../views/6.2/StyleScope.vue')
      },
      {
        path: '/stylenoscope',
        name: 'stylenoscope',
        component: () => import('../views/6.2/StyleNoScope.vue')
      },
    ]
  },
  {
    path: '/axiosdemo',
    name: 'axiosdemo',
    component: () => import('../views/6.3/AxiosDemo.vue')
  },
  {
    path: '/axiosapidemo',
    name: 'axiosapidemo',
    component: () => import('../views/6.3/AxiosApiDemo.vue')
  },
  {
    path: '/routedemo',
    name: 'routedemo',
    // redirect:'routedemo2',//路由重定向
    component: () => import('../views/6.4/RouteDemo.vue')//异步引入
  },
  {
    path: '/routedemo2',
    name: 'routedemo2',
    component: RouteDemo2,//同步引入
    meta:{
      roles:['admin','组长'],
      isshow:false
    }
  },
  {
    path: '/fruit',
    name: 'fruit',
    component: () => import('../views/6.4/Fruit.vue'),
    children: [//子路由
      {
        path: '/apple',
        name: 'apple',
        component: () => import('../views/6.4/Apple.vue')
      },
      {
        path: '/peach',
        name: 'peach',
        component: () => import('../views/6.4/Peach.vue')
      },
    ]
  },

  {
    path: '/banana',
    name: 'banana',
    component: () => import('../views/6.4/Banana.vue')
  },
  {
    path: '/moment',
    name: 'moment',
    component: () => import('../views/6.4/Moment.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/6.4/Store.vue')
  },
  {
    path: '/ckeditor',
    name: 'ckeditor',
    component: () => import('../views/6.4/CKEditor.vue')
  },
  {
    path: '/ckeditor2',
    name: 'ckeditor2',
    component: () => import('../views/6.4/CKEditor2.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/homepage/Login.vue')
  },
 
  {
    path: '/*',//写在最后边
    name: '404',
    component: () => import('../views/homepage/404.vue')
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
    console.log('>>>请求url:', config.url);
    var headers = config.headers;
    if (sessionStorage.getItem("token")) {
      //请求头设置token
      headers.token = sessionStorage.getItem("token");
    }
    return config;
  },
  error => {
    console.log('>>>请求异常:', error.message);
    return Promise.reject(error);
  });


/**
 * 应答拦截器,添加请求头token
 */
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('<<<请求成功');
  return response;
}, error => {
  // Do something with response error
  console.log('<<<异常信息:', error.message);
  return Promise.reject(error);
});

//路由白名单，不进行权限校验
var whiteRoutePaths=['/login','/404','/test01'];

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  // debugger;
  //白名单校验
  if(whiteRoutePaths.includes(to.path)){
    next();
  }
  else{
    //登陆认证校验
    var token="getToken";
    // var token="";
    if(!token){
      next('/login');
    }
    else{
     next();
    }
  }

})

export default router
