const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) throw 'Unauthorized'

    const appToken = process.env.APP_TOKEN

    const user = await jwt.verify(token, appToken)

    req.user = user

    next()
  } catch (err) {
    return res.status(401).json(err)
  }
}