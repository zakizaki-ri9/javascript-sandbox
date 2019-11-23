import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// plugin系のインポート
import './plugins/vue-material'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
