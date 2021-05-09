const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

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
  }

  initRoute() {
    this.app.use('/', (req, res) => res.json('OK'))
  }

  listen() {
    this.app.listen(this.port)
  }

}

module.exports = App