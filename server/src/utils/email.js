const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)

oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

// Send email using gmail OAuth
const _sendemail = async (data) => {
  try {
    const { token } = await oauth2Client.getAccessToken()
    const { to, from, subject, text } = data

    const newData = {
      to,
      subject,
      text,
      from: from || process.env.EMAIL
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

    transporter.sendMail(newData, (err, data) => {
      if (err) {
        throw new Error(err.message)
      } else {
        return 'Email sent!'
      }
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = _sendemail
