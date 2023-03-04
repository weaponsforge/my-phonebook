const _sendemail = require('../../utils/email')

// Send email using gmail OAuth
module.exports.sendEmail = async (req, res, next) => {
  const { to, from, subject, text } = req.body

  // TO-DO: Use a detailed server-side validation later using joi
  if (to === undefined || from === undefined || subject === undefined || text === undefined) {
    return res.status(400).send('Missing parameter/s')
  }

  try {
    const response = await _sendemail()
    return res.status(200).send(response)
  } catch (err) {
    return next(err.message)
  }
}
