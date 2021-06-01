export default {
  findQuestion: state => (username, slug) => {
    return state.questions.docs.find(question => {
      return question.user.username === username && question.slug === slug
    })
  }
}