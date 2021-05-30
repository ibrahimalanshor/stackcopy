const { Schema } = require('mongoose')
const methods = require('./methods')
const { photoSrc } = require('./getters')

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  photo: {
    type: String,
    default: 'user.jpg',
    get: photoSrc
  },
  password: String,
})

UserSchema.pre('validate', async function () {
  await this.encrypt()
  await this.makeUsername()
})

for (let [name, method] of Object.entries(methods)) {
  UserSchema.methods[name] = method
}

UserSchema.set('toObject', { getters: true })
UserSchema.set('toJSON', { getters: true })

module.exports = UserSchema