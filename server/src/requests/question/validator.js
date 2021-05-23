const { Question, User } = require('../../models')

module.exports = {
  unique: title => {
    return Question.exists({ title }).then(exists => {
      if (exists) {
        return Promise.reject('Question already exists')
      }
    })
  },
  isArray: arr => {
    return Array.isArray(arr) ? arr.length > 0 : false
  },
  existsUser: _id => {
    return User.exists({ _id }).then(exists => {
      if (!exists) {
        return Promise.reject('User doesn\'t exists')
      }
    })
  }
}