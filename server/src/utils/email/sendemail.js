const path = require('path')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const ServerError = require('../error')

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

/**
 * Send email using gmail OAuth
 * @param {Object} data - Email contents { to, from, subject, text, html }
 * @param {String} data.to - Email recipient's email address
 * @param {String} data.from - Email sender's email address
 * @param {String} data.subject - Email subject/title
 * @param {String} data.text - Email's text content
 * @param {String} data.html - Email content written with HTML markup
 */
const _sendemail = async ({ to, from, subject, text = '', html = '' }) => {
  try {
    const { token } = await oauth2Client.getAccessToken()

    const newData = {
      to,
      subject,
      text,
      html,
      from: from || process.env.EMAIL,
      attachments: [{
        filename: 'my-phonebook-logo.png',
        path: path.join(__dirname, '..', 'template', 'app', 'my-phonebook-logo.png'),
        cid: 'logo1'
      }]
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.CLIENT_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: token
      }
    })

    return new Promise((resolve, reject) => {
      transporter.sendMail(newData, (err, data) => {
        if (err) {
          reject(new ServerError(err.message, ServerError.httpErrorCodes._502))
        } else {
          resolve('Email sent!')
        }
      })
    })
  } catch (err) {
    throw new ServerError(err.message)
  }
}

module.exports = _sendemail
