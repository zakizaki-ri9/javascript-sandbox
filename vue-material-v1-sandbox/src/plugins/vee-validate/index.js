import Vue from 'vue'
import { ValidationObserver, localize } from 'vee-validate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm' // ルールが全て登録されたValidationProviderをインポート
import ja from 'vee-validate/dist/locale/ja'

localize('ja', ja)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
