const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the My Phonebook server')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`My Phonebook server\nlistening on http://localhost:${PORT}`)
})
