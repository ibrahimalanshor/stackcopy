const App = require('./src/App')
require('dotenv').config()

const app = new App(process.env.PORT)

app.listen()