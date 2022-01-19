import Vue from 'vue'
import App from './App.vue'
import './assets/formulate.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')