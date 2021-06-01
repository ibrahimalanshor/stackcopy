const { Question, User } = require('../models')
const { Types } = require('mongoose');

class QuestionRepository {

  async read(page) {
    const questions = await Question.paginate({}, {
      sort: '-createdAt',
      populate: [
        {
          path: 'user',
          select: '-password -email'
        },
        {
          path: 'tags',
        }
      ],
      page: page ? page : 1
    })

    return questions
  }

  async find(id) {
    const question = await Question.findById(id).withUser().withTags()

    return question
  }

  async findUserPostBySlug(username, slug) {
    try {
      const user = await User.findOne({ username }).select({ _id: 1 }).lean()
      const question = await Question.findOne({ user: user._id, slug }).withUser().withTags()

      return question
    } catch (err) { console.log(err) }
  }

}

module.exports = new QuestionRepository