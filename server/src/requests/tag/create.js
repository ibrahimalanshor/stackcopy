const { body } = require('express-validator')
const { auth } = require('../../middlewares')
const { handle } = require('../../helpers')
const { unique } = require('./validator')

const rules = [
  body('name').exists().isString().isLength({ min: 3 }).custom(unique)
]

module.exports = [
  auth,
  rules,
  handle
]