import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// leafletの設定
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// vuetifyの設定
import vuetify from './plugins/vuetify'

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
