const { Tag } = require('../models')

class TagController {

  async get(req, res) {
    try {
      const tags = await Tag.find({})

      return res.status(200).json(tags)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      const tag = await Tag.create(req.body)

      return res.status(200).json(tag)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new TagController