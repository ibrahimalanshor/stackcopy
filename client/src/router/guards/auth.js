import store from '@/store'

export default (to, from, next) => {
  const login = store.state.auth.login

  if (to.meta.auth && !login) next({ name: 'Login' })
  else next()
}