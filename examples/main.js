import Vue from 'vue'
import App from './App.vue'
import { router, routes } from './router'
import store from './store'
import './plugins/element.js'

import Boot from '../src/index'
Vue.use(Boot, { routes })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
