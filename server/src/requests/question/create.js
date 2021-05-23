const { body } = require('express-validator')
const { auth } = require('../../middlewares')
const { handle } = require('../../helpers')
const { unique, isArray, existsUser } = require('./validator')

const rules = [
  body('title').exists().isString().isLength({ min: 5 }).custom(unique),
  body('tags').exists().custom(isArray),
  body('user').exists().custom(existsUser)
]

module.exports = [
  auth,
  rules,
  handle
]