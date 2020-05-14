export const state = () => ({
  homedata: [],


})

export const mutations = {
  SET_HOME: (state, payload) => {
    state.homedata = payload
  }

}

export const actions = {
    async getHome ({ commit }) {
    const response = await this.$axios.get('/api/gethome')

    commit('SET_HOME', response.data)
  }

}
