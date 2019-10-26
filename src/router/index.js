import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
