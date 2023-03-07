const { sendEmailVerificationLink, verifyEmail } = require('../../modules/account')
const { ACCOUNT_ACTION } = require('../../utils/constants')
const ServerError = require('../../utils/error')

// Server-side custom Firebase Account management handlers for Email/Password sign-in
// Inserts and detects an "account_level" custom claims on the Firebase Auth user.
const manageAccount = async (req, res, next) => {
  const { email, mode, actionCode } = req.body

  // TO-DO: Use a detailed server-side validation using joi
  if (!mode) {
    return res.status(ServerError.httpErrorCodes._400).send(
      new ServerError('Missing parameter/s', ServerError.httpErrorCodes._400))
  }

  switch (mode) {
    case ACCOUNT_ACTION.SEND_VERIFICATTION:
      if (!email) {
        return res.status(ServerError.httpErrorCodes._400).send(
          new ServerError('Missing parameter/s', ServerError.httpErrorCodes._400))
      }

      try {
        const response = await sendEmailVerificationLink(email, mode)
        return res.status(200).send(response)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    case ACCOUNT_ACTION.VERIFY_EMAIL:
      if (!actionCode) {
        return res.status(ServerError.httpErrorCodes._400).send(
          new ServerError('Missing parameter/s', ServerError.httpErrorCodes._400))
      }

      try {
        const response = await verifyEmail(actionCode)
        return res.status(200).send(response)
      } catch (err) {
        return next((err.constructor.name === ServerError.name)
          ? err
          : new ServerError(err.message))
      }
    default:
      return res.status(ServerError.httpErrorCodes._400).send(
        new ServerError('Invalid mode parameter', ServerError.httpErrorCodes._400))
  }
}

module.exports = {
  manageAccount
}
