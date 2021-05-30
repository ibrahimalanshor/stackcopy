export default {
  findQuestion: state => (username, slug) => {
    return state.questions.find(question => {
      return question.user.username === username && question.slug === slug
    })
  }
}