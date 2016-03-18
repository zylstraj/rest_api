'use strict'
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let apiRouter = express.Router()
let mongoose = require('mongoose')

require(__dirname + '/routes/user-routes')(apiRouter)
require(__dirname + '/routes/student-routes')(apiRouter)
require(__dirname + '/routes/post-routes')(apiRouter)

let DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

app.use(bodyParser.json())
app.use('/', apiRouter)

app.listen(3000, () => {
  console.log('server started')
})
