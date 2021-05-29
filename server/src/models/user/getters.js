const { public } = require('../../helpers')

module.exports = {
  photoSrc: photo => public('user_photos', photo)
}