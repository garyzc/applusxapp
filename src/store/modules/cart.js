/**
 * Created by zhuchen on 2018/4/11.
 */
import apiUtil from '../../util/apiUtil'
import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
  list: []
})

const getters = {
  getField,
}

export const actions = {
  
  async query({ commit, state }, context) {
    let { data } = await apiUtil.get('/cart', {
      params: {
        
      }
    })
    
    commit('setList',data)
  },


}

export const mutations = {
  updateField,
  setList(state, { data }) {
    state.list = data
  },

  /**
   * 更新一个购物车记录的checked状态
   * @param {*} state 
   * @param {*} param1 
   */
  updateOrderItemChecked(state, { index,checked }) {
    let data = state.list[index]
    data.checked = checked
    state.list.splice(index,1,data)
  },

  /**
   * 更新所有购物车记录的checked状态
   * @param {*} state 
   * @param {*} checked 
   */
  updateCheckAll(state, checked) {
    let list = state.list.map((item)=>{
      item.checked = checked
      return item
    })
    state.list = list
  },

  /**
   * 更新订单项订单数ordernum
   * @param {*} state 
   * @param {*} param1 
   */
  updateOrderItemNum(state,{index,value}) {
    let data = state.list[index]
    data.ordernum = value
    state.list.splice(index,1,data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}