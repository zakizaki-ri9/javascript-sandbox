import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '@/components/pages/HelloWorld'
import MdFieldTest from '@/components/pages/MdFieldTest'

const routes = [
  {
    path: '/hello_world',
    component: HelloWorld,
    mdIcon: 'pan_tool',
    label: 'HelloWorld'
  },
  {
    path: '/md_field_test',
    component: MdFieldTest,
    mdIcon: 'pan_tool',
    label: 'md-field test'
  },
  {
    path: '*',
    component: HelloWorld
  }
]

const router = new Router({
  routes
})

export { routes, router as default }
