export default {
  async search({ rootState: { api } }, name) {
    const results = await api.get('/tag', { params: { search: name } })

    return results.data
  }
}