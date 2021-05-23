const { Question } = require('../models')

class QuestionRepository {

  async read() {
    const questions = await Question.find({}).populate('user', '_id name').populate('tags', '_id name slug')

    return questions
  }

}

module.exports = new QuestionRepository