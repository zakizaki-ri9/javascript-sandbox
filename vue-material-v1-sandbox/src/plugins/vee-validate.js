import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

// ルールの追加
extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
