import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top.vue'
import ClickMap from '@/views/ClickMap.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
    title: 'Top'
  },
  {
    path: '/ClickMap',
    name: 'ClickMap',
    component: ClickMap,
    title: 'ClickMap'
  },
  {
    path: '*',
    component: Top
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
