export default {
  async get({ commit, rootState: { api } }) {
    const questions = await api.get('question')

    commit('setQuestion', questions.data)
  }
}