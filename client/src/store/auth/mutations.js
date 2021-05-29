export default {
  login(state, token) {
    state.token = token
    state.login = true
  }
}