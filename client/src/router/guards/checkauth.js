import store from '@/store'

export default (to, from, next) => {
  const login = store.state.auth.login

  if (login) {
    const exp = store.getters['auth/user'].exp * 1000

    if (Date.now() > exp) {
      store.commit('auth/logout')
    }
  }

  next()
}