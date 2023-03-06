require('dotenv').config()
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const rateLimit = require('express-rate-limit')
const PORT = process.env.PORT || 3001
const app = express()

const { corsOptions } = require('./utils/cors_options')
const controllers = require('./controllers')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.API_RATE_LIMIT, // limit each IP to API_RATE_LIMIT requests per windowMs
  message: 'Too many requests from this IP. Please try again after 15 minutes.'
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '..', '/public')))

if (process.env.ALLOW_CORS === '1') {
  app.use(cors(corsOptions))
}

app.use('/api', limiter, controllers)

app.get('*', (req, res) => {
  return res.status(200).send(`Welcome to My Phonebook server\nRunning in [${process.env.NODE_ENV}] mode`)
})

app.use((err, req, res, next) => {
  return res.status(err?.errorCode ?? 500).send(err.message)
})

if (process.env.DEPLOYMENT_PLATFORM !== 'vercel') {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`My Phonebook server [${process.env.NODE_ENV}]\nlistening on http://localhost:${PORT} mode`)
  })
}

module.exports = app
