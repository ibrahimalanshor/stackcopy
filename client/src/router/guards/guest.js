import store from '@/store'

export default (to, from, next) => {
  const login = store.state.auth.login

  if (to.meta.guest && login) next({ name: 'Home' })
  else next()
}