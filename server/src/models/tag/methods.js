const { slugify } = require('../../helpers')

module.exports = {
  makeSlug: async function () {
    this.slug = await slugify(this.name)
  }
}