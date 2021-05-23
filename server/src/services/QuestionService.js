const { Question, Tag } = require('../models')

class QuestionService {

  async store(body) {
    const tags = await this.getTag(body.tags)
    const question = await Question.create({ ...body, tags })

    return question
  }

  async getTag(tags) {
    const results = []

    for (let name of tags) {
      const result = await Tag.findOne({ name: name })
      const tag = result || await Tag.create({ name: name })

      results.push(tag._id)
    }

    return results
  }

}

module.exports = new QuestionService