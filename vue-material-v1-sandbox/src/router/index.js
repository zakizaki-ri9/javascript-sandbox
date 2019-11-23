import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/pages/HelloWorld'

const routes = [{ path: '/helloworld', component: HelloWorld }]

const router = new Router({
  routes
})

export default router
