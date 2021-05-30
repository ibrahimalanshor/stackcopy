const { Schema } = require('mongoose')
const virtuals = require('./virtuals')
const methods = require('./methods')

const QuestionSchema = new Schema({
  title: String,
  slug: String,
  content: String,
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

QuestionSchema.pre('save', async function () {
  await this.makeSlug()
})

for (let [name, virtual] of Object.entries(virtuals)) {
  QuestionSchema.virtual(name).get(virtual)
}

for (let [name, method] of Object.entries(methods)) {
  QuestionSchema.methods[name] = method
}

QuestionSchema.set('toObject', { virtuals: true })
QuestionSchema.set('toJSON', { virtuals: true })

module.exports = QuestionSchema