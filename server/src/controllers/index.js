const { Router } = require('express')
const router = new Router()

const Email = require('./email')

/**
 * @api {post} /email Send email
 * @apiName sendEmail
 * @apiGroup Email
 * @apiDescription Send email using the system's Gmail email sender.
 *
 * @apiHeader {String} Authorization Bearer authorization value - signed-in user's firebase ID token.
 *
 * @apiSampleRequest off
 * @apiBody {String} to Recipient's email address
 * @apiBody {String} from Sender's email address
 * @apiBody {String} subject Email subject/title
 * @apiBody {String} text Email text content
 *
 * @apiSuccess {String} message Message log of successful email sent.
 *
 * @apiExample {js} Example usage:
 * const obj = {
 *   data: {
 *     to: 'you@gmail.com',
 *     from: 'me@gmail.com',
 *     subject: 'Hello!',
 *     text: 'Hi, this is a test message.'
 *   },
 *   headers: {
 *     Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2Z....'
 *   }
 * }
 */
router.post('/email', Email.sendEmail)

module.exports = router
