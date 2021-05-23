const { Schema } = require('mongoose')

const TagSchema = new Schema({
  name: String,
  slug: String
})

module.exports = TagSchema