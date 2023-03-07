const { getAuth } = require('../utils/db')

// Inspects if the Authorization Bearer token from client belongs to a valid signed-in user.
// Injects the decoded Firebase Auth user's information to req.user if token is valid.
module.exports.validToken = async (req, res, next) => {
  if (
    (!req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)
  ) {
    console.error(
      'No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>'
    )
    res.status(403).send('Unauthorized')
    return
  }

  let idToken

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1]
  } else {
    // No cookie
    res.status(403).send('Unauthorized')
    return
  }

  try {
    const decodedIdToken = await getAuth().verifyIdToken(idToken)

    if (decodedIdToken.account_level === undefined) {
      res.status(403).send('Unauthorized. Missing custom claims.')
      return
    }

    req.user = decodedIdToken
    next()
    return
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error)
    return res.status(403).send('Unauthorized')
  }
}
