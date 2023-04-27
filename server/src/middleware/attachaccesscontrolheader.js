const { whitelist } = require('../utils/cors_options')

// Attach 'Access-Control-Allow-Origin' to the response header for whitelisted "BASE" origins.
const attachAccessControllAllowOrigin = (req, res, next) => {
  const origin = req.headers.origin

  if (whitelist.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  next()
}

module.exports = attachAccessControllAllowOrigin
