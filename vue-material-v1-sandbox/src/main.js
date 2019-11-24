import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

// リセットcss
import 'ress'

// plugin系のインポート
import '@/plugins/vue-material'
import '@/plugins/vee-validate'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
