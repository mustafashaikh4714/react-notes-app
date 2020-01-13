//SETUP DATABASE AND ENVIRONMENT VARIABLES

import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

require('./routes/index')(app)
const connection = require('./config/database')
connection()
  .then(() => {
    console.log('Connected to the database')
    app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))
  })
  .catch(error => console.log(error.message))

module.exports = { app }
