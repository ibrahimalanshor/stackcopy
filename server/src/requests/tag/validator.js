const { Tag } = require('../../models')

module.exports = {
  unique: name => {
    return Tag.exists({ name }).then(exists => {
      if (exists) {
        return Promise.reject('Tag already exists')
      }
    })
  }
}