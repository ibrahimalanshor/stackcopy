const { Schema } = require('mongoose')
const virtuals = require('./virtuals')

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
}, { timestamps: true })

for (let [name, virtual] of Object.entries(virtuals)) {
  QuestionSchema.virtual(name).get(virtual)
}

QuestionSchema.set('toObject', { virtuals: true })
QuestionSchema.set('toJSON', { virtuals: true })

module.exports = QuestionSchema