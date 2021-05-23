const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

module.exports = {
  date: function () {
    return dayjs(this.createdAt).fromNow()
  }
}