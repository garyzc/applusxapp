/**
 * Created by zhuchen on 2018/4/11.
 */
import apiUtil from '../../util/apiUtil'

export const state = () => ({
  list: []
})

const getters = {
  pay: (state, getters) => {
    let paylist = state.list.filter((item)=>{
      return item.state == 0
    })
    return paylist
  },
  collect: (state, getters) => {
    let paylist = state.list.filter((item)=>{
      return item.state == 1
    })
    return paylist
  },
  complete: (state, getters) => {
    let paylist = state.list.filter((item)=>{
      return item.state == 2
    })
    return paylist
  },
  cancel: (state, getters) => {
    let paylist = state.list.filter((item)=>{
      return item.state == 3
    })
    return paylist
  },
  total: (state, getters) => {
    return state.list.reduce((value,item)=>{
      if(item.checked) {
        return item.price*item.ordernum + value
      } else {
        return value
      }
    },0)
  },
  isCheckAll: (state, getters) => {
    return getters.checkeds == state.list.length
  },
  checkeds: (state, getters) => {
    let checkeList = getters.checkOutList
    return checkeList?checkeList.length:0
  },
  checkOutList: (state, getters) => {
    let checkeList = state.list.filter((item)=>{
      return item.checked == true
    })
    return checkeList
  },
}

export const actions = {
  
  async query({ commit, state }, context) {
    let { data } = await apiUtil.get('/orders', {
      params: {
        
      }
    })
    
    commit('setList',data)
  },

  async updateCheck({ commit, state }, {index,checked}) {
    
    commit('updateOrderItemToggleCheck',{index,checked})
  },

  async updateOrderItemNum({ commit, state, dispatch }, {index,value}) {
    dispatch('updateCheck',{index,checked:true})
    commit('updateOrderItemNum',{index,value})
  },

  async checkAll({ commit, state, dispatch }, checked) {
    commit('updateCheckAll',checked)
  },




}

export const mutations = {
  setList(state, { data }) {
    state.list = data
  },

  /**
   * 更新一个购物车记录的checked状态
   * @param {*} state 
   * @param {*} param1 
   */
  updateOrderItemToggleCheck(state, {index,checked}) {
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