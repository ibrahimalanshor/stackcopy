const { body } = require('express-validator')
const { handle } = require('../../helpers')
const { uniqueUser } = require('./validator')

const rules = [
  body('name').exists().isString().isLength({ min: 1 }),
  body('email').exists().isEmail().custom(uniqueUser),
  body('password').exists().isString().isLength({ min: 8 })
]

module.exports = [
  rules,
  handle
]