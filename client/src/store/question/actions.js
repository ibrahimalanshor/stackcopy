export default {
  async get({ commit, rootState: { api } }) {
    const questions = await api.get('/question')

    commit('setQuestion', questions.data)
  },
  async store({ rootState: { api }}, data) {
    const question = await api.post('/question', data)

    console.log(data);

    return question
  }
}