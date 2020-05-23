const IMG_URL = process.env.IMG_URL

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
    let data = response.data
    data.header.image = `${IMG_URL}${data.header.banner.formats.large.url}`
    commit('SET_HOME', data)
  }

}
