module.exports = {
  slugify: async function () {
    this.slug = await this.name.toLowerCase().replace(/\W/g, '').replace(/\s/g, '')
  }
}