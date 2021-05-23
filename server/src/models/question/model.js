const { model } = require('mongoose')
const QuestionSchema = require('./schema')

module.exports = model('question', QuestionSchema)