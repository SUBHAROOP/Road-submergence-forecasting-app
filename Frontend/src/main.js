import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/components/presentational/Panel'
import BarChart from '@/components/client/charts/BarChart'
import LineChart from '@/components/client/charts/LineChart'
var Lang = require('vuejs-localization')
Lang.requireAll(require.context('./lang', true, /\.js$/))

Vue.use(Vuetify)
Vue.use(VueSweetalert2)
Vue.use(Lang)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDUh7nuLwf_z7fmKr0ZjWqfQJmQS6RZgt4',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.component('panel', Panel)
Vue.component('bar-chart', BarChart)
Vue.component('line-chart', LineChart)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
