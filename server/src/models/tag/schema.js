const { Schema } = require('mongoose')
const methods = require('./methods')

const TagSchema = new Schema({
  name: String,
  slug: String
})

TagSchema.pre('validate', async function () {
  await this.makeSlug()
})

for (let [name, method] of Object.entries(methods)) {
  TagSchema.methods[name] = method
}

module.exports = TagSchema