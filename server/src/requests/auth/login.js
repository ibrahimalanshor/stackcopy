const { body } = require('express-validator')
const { handle } = require('../../helpers')
const { userExists } = require('./validator')

const rules = [
  body('email').exists().isEmail().custom(userExists),
  body('password').exists().isString().isLength({ min: 1})
]

module.exports = [
  rules,
  handle
]