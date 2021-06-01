const { Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const virtuals = require('./virtuals')
const methods = require('./methods')
const helpers = require('./helpers')

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

for (let [name, helper] of Object.entries(helpers)) {
  QuestionSchema.query[name] = helper
}

QuestionSchema.set('toObject', { virtuals: true })
QuestionSchema.set('toJSON', { virtuals: true })

QuestionSchema.plugin(mongoosePaginate)

module.exports = QuestionSchema