export default {
  async login({ commit, rootState: { api } }, credentials) {
    const { data: token } = await api.post('/auth/login', credentials)

    commit('login', token)
  },
  async register({ rootState: { api }}, credentials) {
    const user = await api.post('/auth/register', credentials)

    return !!user
  }
}