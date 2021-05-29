const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

class AuthService {

  async login({ email, password }) {
    const user = await User.findOne({ email })
    const match = await bcrypt.compare(password, user.password)

    if (!match) throw 'Password Incorrect'

    return this.attempt(user)
  }

  async attempt(user) {
    const payload = {
      name: user.name,
      username: user.username,
      email: user.email,
      photo: user.photo
    }

    const appToken = process.env.APP_TOKEN
    const token = jwt.sign(payload, appToken, { expiresIn: '1h' })

    return token
  }

}

module.exports = new AuthService