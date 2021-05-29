import axios from 'axios'

export default {
  sidebarOpen: false,
  api: axios.create({
    baseURL: 'http://localhost:3000/api'
  })
}