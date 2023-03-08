const { getAuth } = require('../../utils/db')
const _sendemail = require('../../utils/email/sendemail')
const { ACCOUNT_ACTION } = require('../../utils/constants')
const ServerError = require('../../utils/error')
const composeEmail = require('../../utils/email/compose')

/**
 * Generate a reset password link for a Firebase user's and send it via email.
 * @param {String} email - Firebase Auth user email
 * @returns {Promise} Email sending status
 */
const sendResetPasswordLink = async (email) => {
  try {
    // Check if the email is registered
    await getAuth().getUserByEmail(email)
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

    return await _sendemail({
      to: email,
      subject: 'Reset your password for My Phonebook',
      text: content,
      html: composeEmail({
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
