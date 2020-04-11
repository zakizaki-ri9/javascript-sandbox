import 'normalize.css'
import '~/assets/global.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue: any) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
