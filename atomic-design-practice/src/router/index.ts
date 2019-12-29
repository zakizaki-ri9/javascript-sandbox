import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/pages/Top.vue'
import LeafletMap from '@/pages/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/map',
    name: 'map',
    component: LeafletMap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
