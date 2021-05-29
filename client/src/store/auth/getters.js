import jwt_decode from 'jwt-decode'

export default {
  user: (state) => jwt_decode(state.token)
}