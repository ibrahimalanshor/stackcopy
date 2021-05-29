export default {
  login(state, token) {
    state.token = token
    state.login = true
  },
  logout(state) {
    state.token = null
    state.login = false
  }
}