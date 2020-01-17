import Vue from 'vue'
import App from './App.vue'
import { Toast } from 'vant';
import * as filters from "./util/filters"
import * as prototype from "./util/prototype"

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Object.keys(prototype).forEach(key => {
  Vue.prototype[key] = prototype[key]
})

Vue.config.productionTip = false
Vue.use(Toast);

new Vue({
  render: h => h(App),
}).$mount('#app')
