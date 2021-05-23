const { model } = require('mongoose')
const TagSchema = require('./schema')

module.exports = model('tag', TagSchema)