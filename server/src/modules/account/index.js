const sendEmailVerificationLink = require('./createverifylink')
const sendResetPasswordLink = require('./createresetlink')
const verifyEmail = require('./verifyemail')

module.exports = {
  sendEmailVerificationLink,
  sendResetPasswordLink,
  verifyEmail
}
