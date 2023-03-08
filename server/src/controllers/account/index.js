const AccountModule = require('../../modules/account')
const { ACCOUNT_ACTION } = require('../../utils/constants')
const ServerError = require('../../utils/error')

// Server-side custom Firebase Account management handlers for Email/Password sign-in
// Inserts and detects an "account_level" custom claims on the Firebase Auth user.
const manageAccount = async (req, res, next) => {
  const { email, mode, actionCode, password } = req.body

  // TO-DO: Use a detailed server-side validation using joi
  if (!mode) {
    return res.status(ServerError.httpErrorCodes._400)
      .send('Missing parameter/s')
  }

  // Require email when sending email confirm prompts
  if ([ACCOUNT_ACTION.SEND_VERIFICATTION, ACCOUNT_ACTION.SEND_RESET].includes(mode)) {
    if (!email) {
      return res.status(ServerError.httpErrorCodes._400)
        .send('Missing parameter/s')
    }
  }

  // Require actionCode when sending handling actions from emails
  if ([ACCOUNT_ACTION.VERIFY_EMAIL, ACCOUNT_ACTION.RESET_PASSWORD].includes(mode)) {
    if (!actionCode) {
      return res.status(ServerError.httpErrorCodes._400)
        .send('Missing parameter/s')
    }
  }

  switch (mode) {
    case ACCOUNT_ACTION.SEND_VERIFICATTION:
      try {
        // Send an email verification for the email account
        const response = await AccountModule.sendEmailVerificationLink(email)
        return res.status(200).send(response)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    case ACCOUNT_ACTION.VERIFY_EMAIL:
      try {
        // Verify an email
        const response = await AccountModule.verifyEmail(actionCode)
        return res.status(200).send(response)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    case ACCOUNT_ACTION.SEND_RESET:
      try {
        // Send a password reset link to email
        const response = await AccountModule.sendResetPasswordLink(email)
        return res.status(200).send(response)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    case ACCOUNT_ACTION.RESET_PASSWORD:
      if (!password) {
        return res.status(ServerError.httpErrorCodes._400)
          .send('Missing parameter/s')
      }

      try {
        // Reset a password
        const response = await AccountModule.resetPassword({
          actionCode,
          newPassword: password
        })

        return res.status(200).send(response.data)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    default:
      return res.status(ServerError.httpErrorCodes._400)
        .send('Invalid mode parameter')
  }
}

module.exports = {
  manageAccount
}
