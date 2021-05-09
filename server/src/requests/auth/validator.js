const { User } = require('../../models')

module.exports = {
  userExists: email => {
    return User.exists({ email }).then(exists => {
      if (!exists) {
        return Promise.reject('Email doesnt exists')
      }
    })
  },
  uniqueUser: email => {
    return User.exists({ email }).then(exists => {
      if (exists) {
        return Promise.reject('Email already exists')
      }
    })
  }
}