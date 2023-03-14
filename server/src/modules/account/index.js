const sendEmailVerificationLink = require('./createverifylink')
const sendResetPasswordLink = require('./createresetlink')
const verifyEmail = require('./verifyemail')
const resetPassword = require('./resetpassword')

module.exports = {
  sendEmailVerificationLink,
  sendResetPasswordLink,
  verifyEmail,
  resetPassword
}
