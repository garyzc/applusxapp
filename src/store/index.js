import Vue from 'vue'
import Vuex from 'vuex'
import apiUtil from '../util/apiUtil'
import createLogger from 'vuex/dist/logger'

import actions from './actions'
import mutations from './mutations'

import search from './modules/search'
import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  mutations,
  modules: {
    search,
    cart,
    order,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})