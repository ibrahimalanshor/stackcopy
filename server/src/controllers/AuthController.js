const { User } = require('../models')
const { AuthService } = require('../services')

class AuthController {

  async login(req, res) {
    try {
      const user = await AuthService.login(req.body)

      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async register(req, res) {
    try {
      const user = await User.create(req.body)

      return res.status(200).json(user)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new AuthController