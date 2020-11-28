import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './routes.js'

axios.defaults.baseURL = "your base website";

new Vue({
  el: '#app',
  render: h => h(App)
})


