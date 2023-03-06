const { Router } = require('express')
const router = new Router()

// Middleware
const { validToken } = require('../middleware/validtoken')

// Controllers
const Email = require('./email')

const Account = require('./account')

/**
 * @api {post} /email Send email
 * @apiName sendEmail
 * @apiGroup Email
 * @apiDescription Send email using the system's Gmail email account.
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
 *
 * const result = await axios({ ...obj, url: 'http://localhost:3001/api/email', method: 'POST' })
 */
router.post('/email', validToken, Email.sendEmail)

/**
 * @api {post} /account/action Firebase Account Management
 * @apiName manageAccount
 * @apiGroup Account
 * @apiDescription These endpoints are a set of server-side custom email action handlers using Firebase Admin for managing Firebase Accounts. A separate `Users` section will be dedicated for managing User profile information.
 *
 * @apiSampleRequest off
 * @apiBody {String} email Firebase Auth user's email address. Not required if `mode=verifyEmail`.
 * @apiBody {String=send_verification,verifyEmail,resetPassword,recoverEmail} mode Account management option.
 * @apiBody {String} actionCode `oobCode` - the action code sent to user's email for email verification. Not required if `mode=send_verification`.
 *
 * @apiSuccess {Object} User Firebase Auth record of a user, with custom claims included..
 *
 * @apiExample {js} Example usage: send email verification
 * // Send an email verification to a user
 * const obj = {
 *   data: {
 *     mode: 'send_verification'
 *     email: 'someone@gmail.com'
 *   }
 * }
 *
 * await axios.post(ACTION_HANDLER_URL, data)
 *
 * @apiExample {js} Example usage: verify email
 * // Verify a user's email (URL registration link with actionCode is sent sent thru email)
 * const obj = {
 *   data: {
 *     mode: 'verifyEmail'
 *     actionCode: 'GJLPOCYRFJb3eV88...'
 *   }
 * }
 *
 * await axios.post(ACTION_HANDLER_URL, data)
 *
 * @apiSuccess {String} uid Unique Firebase user ID
 * @apiSuccess {String} email Firebase user email
 * @apiSuccess {Bool} emailVerified Flag is email is verified.
 * @apiSuccess {String} disabled Flag if the Firebase account is disabled.
 * @apiSuccess {Object} metadata
 * @apiSuccess {Date} metadata.lastSignInTime User's last log-in time
 * @apiSuccess {Date} metadata.creationTime Time the user's account was created
 * @apiSuccess {String} metadata.lastRefreshTime Time when the user's tokens were last refreshed.
 * @apiSuccess {Object} customClaims Custom items for identifying a User, set using firebase-admin
 * @apiSuccess {Date} tokensValidAfterTime Max date when a signed-in user's tokens are valid.
 * @apiSuccess {Object} providerData Short user information summary
 * @apiSuccess {String} providerData.uid uid Unique Firebase user ID
 * @apiSuccess {String} providerData.email email Firebase user email
 * @apiSuccess {String} providerData.providerId `password` Sign-in option
 */
router.post('/account/action', Account.manageAccount)

module.exports = router
