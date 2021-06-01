module.exports = {
  withUser: function () {
    return this.populate('user', '-password -email')
  },
  withTags: function () {
    return this.populate('tags', '_id name slug')
  }
}