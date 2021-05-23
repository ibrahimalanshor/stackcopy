const { Schema } = require('mongoose')
const { slugify } = require('./middleware')

const TagSchema = new Schema({
  name: String,
  slug: String
})

TagSchema.pre('validate', slugify)

module.exports = TagSchema