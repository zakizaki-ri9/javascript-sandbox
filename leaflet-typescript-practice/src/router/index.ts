import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/pages/Top.vue'
import LeafletMap from '@/pages/LeafletMap.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
    title: 'Top'
  },
  {
    path: '/map',
    name: 'map',
    component: LeafletMap,
    title: 'Map'
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
