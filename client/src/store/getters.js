export default {
  headers: (state, getters, rootState) => ({
    headers: {
      authorization: rootState.auth.token
    }
  })
}