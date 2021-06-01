const { Question } = require('../models')
const { QuestionService } = require('../services')
const { QuestionRepository } = require('../repositories')

class QuestionController {

  async get(req, res) {
    try {
      const page = req.query.page
      const questions = await QuestionRepository.read(page)

      return res.status(200).json(questions)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      const question = await QuestionService.store(req.body)

      return res.status(200).json(question)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

  async find(req, res) {
    try {
      const { username, slug } = req.params
      const question = await QuestionRepository.findUserPostBySlug(username, slug)

      return res.status(200).json(question)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new QuestionController