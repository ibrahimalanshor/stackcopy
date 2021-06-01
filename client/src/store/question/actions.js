export default {
  async get({ commit, rootState: { api } }, page) {
    const questions = await api.get('/question', {
      params: {
        page
      }
    })

    commit('setQuestion', questions.data)
  },
  async store({ dispatch, rootState: { api }, rootGetters: { headers }, }, data) {
    const question = await api.post('/question', data, headers)

    await dispatch('get')

    return question.data
  },
  async find({ rootState: { api } }, { user, slug }) {
    const question = await api.get(`/question/${user}/${slug}`)

    return question.data
  }
}