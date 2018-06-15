/**
 * Created by zhuchen on 2018/4/11.
 */
import apiUtil from '../../util/apiUtil'

export const state = () => ({
  list: []
})

const getters = {}

export const actions = {

  async query({ commit, state }, context) {
    let { data } = await apiUtil.get('/search', {
      params: {
        
      }
    })
    
    commit('setList',data)
  },

}

export const mutations = {
  setList(state, {
    data
  }) {
    state.list = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}