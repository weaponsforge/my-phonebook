const { getAuth } = require('../../utils/db')
const EmailUtils = require('../../utils/email/index')
const { ACCOUNT_ACTION } = require('../../utils/constants')
const ServerError = require('../../utils/error')

/**
 * Generate a reset password link for a Firebase user's and send it via email.
 * @param {String} email - Firebase Auth user email
 * @returns {Promise} Email sending status
 */
const sendResetPasswordLink = async (email) => {
  try {
    // Check if the email is registered
    const user = await getAuth().getUserByEmail(email)

    if (!user.emailVerified) {
      throw new ServerError('User is not yet email-verified', ServerError.httpErrorCodes._403)
    }

    if (!user?.customClaims?.account_level) {
      throw new ServerError('User is missing custom claims.', ServerError.httpErrorCodes._403)
    }
  } catch (err) {
    throw new ServerError(err.message)
  }

  try {
    const actionCodeSettings = {
      url: process.env.CLIENT_WEBSITE_URL
    }

    // https://firebase.google.com/docs/auth/admin/email-action-links#generate_password_reset_email_link
    const link = await getAuth().generatePasswordResetLink(email, actionCodeSettings)

    // Send the custom email action "resetPassword" handler URL
    const urlParams = new URLSearchParams(link)
    const oobCode = urlParams.get('oobCode')
    const resetLink = `${process.env.CLIENT_WEBSITE_URL}/account?mode=${ACCOUNT_ACTION.RESET_PASSWORD}&actionCode=${oobCode}`

    const content = `<p>Hello ${email},</p>
      <p>Follow this link to reset your password for your ${email} account.<p>
      <p>${resetLink}</p>
      <p>If you didn’t ask to reset your password, you can ignore this email.</p>
      <p>Thanks,<br>
      Your My Phonebook Team</p>`

    return await EmailUtils.sendEmail({
      to: email,
      subject: 'Reset your password for My Phonebook',
      text: content,
      html: EmailUtils.composeEmail({
        title: 'Reset your password for My Phonebook',
        buttonLabel: 'Reset',
        linkURL: resetLink,
        content
      })
    })
  } catch (err) {
    throw new ServerError(err.message)
  }
}

module.exports = sendResetPasswordLink
