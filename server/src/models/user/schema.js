const { Schema } = require('mongoose')
const methods = require('./methods')

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
})

UserSchema.pre('validate', async function () {
  await this.encrypt()
})

for (let [name, method] of Object.entries(methods)) {
  UserSchema.methods[name] = method
}

module.exports = UserSchema