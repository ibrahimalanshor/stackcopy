const { body } = require('express-validator')
const { auth } = require('../../middlewares')
const { handle } = require('../../helpers')
const { unique, isArray, existsUser } = require('./validator')

const rules = [
  body('title').exists().isString().withMessage('must be string').isLength({ min: 5 }).withMessage('must be at least 5 chars long').custom(unique),
  body('content').exists().isString().withMessage('must be string').isLength({ min: 30 }).withMessage('must be at least 30 chars long'),
  body('tags').exists().custom(isArray).withMessage('must be at least 1 tags'),
  body('user').exists().custom(existsUser)
]

module.exports = [
  auth,
  rules,
  handle
]