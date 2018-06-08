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

  // async init({commit,state }, context) {
  //   let {store,page,node} = context
  //   await store.dispatch('list001/fetchList',{page,node})
  // },

  // async fetchList ({commit,state }, {page,node}) {
  //   let {page_lan} = page
  //   let parent_id = page.id
  //   if(node.cdata.data.content.parent == 'parent') {
  //     parent_id = page.page_parent
  //   }

  //   let {data} = await apiUtil.get('/page/articles',{params:
  //     {
  //       lan: page_lan,
  //       parent_id: parent_id
  //     }
  //   })

  //   commit('setLlist',data)

  // }

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