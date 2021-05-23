const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const routes = require('./routes')

class App {

  constructor(port = 3000) {
    this.port = port
    this.app = express()

    this.connectDB()
    this.initConfig()
    this.initRoute()
  }

  connectDB() {
    mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, { useNewUrlParser:true, useUnifiedTopology: true })
      .catch(err => console.log(err))
  }

  initConfig() {
    this.app.use(morgan('dev'))

    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())

    this.app.use(cors())
  }

  initRoute() {
    for (let [name, router] of Object.entries(routes)) {
      this.app.use(`/api/${name}`, router)
    }
  }

  listen() {
    this.app.listen(this.port)
  }

}

module.exports = App