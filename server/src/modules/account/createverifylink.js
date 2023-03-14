const { getAuth } = require('../../utils/db')
const EmailUtils = require('../../utils/email')
const { ACCOUNT_ACTION } = require('../../utils/constants')
const ServerError = require('../../utils/error')

/**
 * Generate an email verification link for the for the user's email and send it via email.
 * Uses a custom styled HTML template for rendering the email.
 * @param {String} email User email
 * @returns {Promise}
 */
const sendEmailVerificationLink = async (email) => {
  // Check if the email is registered
  try {
    const user = await getAuth().getUserByEmail(email)

    if (user.emailVerified) {
      throw new ServerError('User is already registered.',
        ServerError.httpErrorCodes._405)
    }
  } catch (err) {
    throw new ServerError(err.message)
  }

  const actionCodeSettings = {
    url: process.env.CLIENT_WEBSITE_URL
  }

  try {
    const link = await getAuth().generateEmailVerificationLink(email, actionCodeSettings)

    // Send the custom email action "verifyEmail" handler URL
    const urlParams = new URLSearchParams(link)
    const oobCode = urlParams.get('oobCode')
    const verifyLink = `${process.env.CLIENT_WEBSITE_URL}/account?mode=${ACCOUNT_ACTION.VERIFY_EMAIL}&actionCode=${oobCode}`

    const content = `<p>Hello ${email},</p>
      <p>Follow this link to verify your email address.<p>
      <p>${verifyLink}</p>
      <p>If you didn’t ask to verify this address, you can ignore this email.</p>
      <p>Thanks,<br>
      Your My Phonebook Team</p>`

    return await EmailUtils.sendEmail({
      to: email,
      subject: 'Register your email for My Phonebook',
      text: content,
      html: EmailUtils.composeEmail({
        title: 'Verify your email for My Phonebook',
        buttonLabel: 'Verify',
        linkURL: verifyLink,
        content
      })
    })
  } catch (err) {
    throw new ServerError(err.message)
  }
}

module.exports = sendEmailVerificationLink
