const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('*', (req, res) => {
  return res.status(200).send(`Welcome to My Phonebook server\nRunning in [${process.env.NODE_ENV}] mode`)
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`My Phonebook server [${process.env.NODE_ENV}]\nlistening on http://localhost:${PORT} mode`)
})
