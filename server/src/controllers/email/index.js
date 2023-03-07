const _sendemail = require('../../utils/email')
const ServerError = require('../../utils/error')

// Send email using gmail OAuth2
module.exports.sendEmail = async (req, res, next) => {
  const { to, from, subject, text } = req.body

  // TO-DO: Use a detailed server-side validation using joi
  if (to === undefined || from === undefined || subject === undefined || text === undefined) {
    return res.status(ServerError.httpErrorCodes._400).send(
      'Missing parameter/s', ServerError.httpErrorCodes._400)
  }

  try {
    const response = await _sendemail()
    return res.status(200).send(response)
  } catch (err) {
    return next((err.constructor.name === ServerError.name)
      ? err
      : new ServerError(err.message))
  }
}
