const { Schema } = require('mongoose')

const QuestionSchema = new Schema({
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tag'
    }
  ]
})

module.exports = QuestionSchema