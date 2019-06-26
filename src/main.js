import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './css/index.css'
import format from 'date-fns/format'
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm') {
  return format(value, formatStr)
})
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store
})