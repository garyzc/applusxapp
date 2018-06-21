// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

import AxIcon from './axui/components/ax-icon'
Vue.component('AxIcon', AxIcon)

import AxToast from './axui/components/ax-toast'
Vue.use(AxToast)

Vue.use(Vuex)

Vue.mixin({
  methods: {
      goBack: function () {
          this.$router.back()
      }
  }
})

Vue.config.productionTip = false
Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
