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
 * @api {post} /account/action Send Email Verification
 * @apiName sendEmailVerification
 * @apiGroup Account
 * @apiDescription Send an email verification to a non-email verified Firebase Auth user.
 *
 * @apiSampleRequest off
 * @apiBody {String} email Firebase Auth user's email address. Not required if `mode=verifyEmail`.
 * @apiBody {String=send_verification} mode Account management option.
 *
 * @apiSuccess {String} message Success message log
 *
 * @apiExample {js} Example usage:
 * // Send an email verification to a user
 * const obj = {
 *   data: {
 *     mode: 'send_verification'
 *     email: 'someone@gmail.com'
 *   }
 * }
 *
 * await axios.post('http://localhost:3001/api/account', data)
 */

/**
 * @api {post} /account/action Send Password Reset Email
 * @apiName sendPasswordReset
 * @apiGroup Account
 * @apiDescription Send a password reset email to My Phonebook's Firebase Auth user. The request will fail if the user is not yet email-verified, or is missing the `account_level=user` custom claims.
 *
 * @apiSampleRequest off
 * @apiBody {String} email Firebase Auth user's email address. Not required if `mode=resetPassword`.
 * @apiBody {String=send_reset} mode Account management option.
 *
 * @apiSuccess {String} message Success message log
 *
 * @apiExample {js} Example usage:
 * // Send an a password reset email to a user
 * const obj = {
 *   data: {
 *     mode: 'send_reset'
 *     email: 'someone@gmail.com'
 *   }
 * }
 *
 * await axios.post('http://localhost:3001/api/account', data)
 */

/**
 * @api {post} /account/action Verify Email
 * @apiName verifyEmail
 * @apiGroup Account
 * @apiDescription Verifies a Firebase Auth user's email and inserts an `account_level=user` custom claims to his Auth record. The `actionCode` (oobCode) is sent to a user's email using the API endpoint in Send Email Verification.
 *
 * @apiSampleRequest off
 * @apiBody {String=verifyEmail} mode Account management option.
 * @apiBody {String} actionCode `oobCode` - the action code sent to user's email for email verification. Not required if `mode=send_verification`.
 *
 * @apiSuccess {Object} User Firebase Auth record of a user, with custom claims included.
 * @apiSuccess {String} User.uid Unique Firebase user ID
 * @apiSuccess {String} User.email Firebase user email
 * @apiSuccess {Bool} User.emailVerified Flag is email is verified.
 * @apiSuccess {String} User.disabled Flag if the Firebase account is disabled.
 * @apiSuccess {Object} User.metadata
 * @apiSuccess {Date} User.metadata.lastSignInTime User's last log-in time
 * @apiSuccess {Date} User.metadata.creationTime Time the user's account was created
 * @apiSuccess {String} User.metadata.lastRefreshTime Time when the user's tokens were last refreshed.
 * @apiSuccess {Object} User.customClaims Custom items for identifying a User, set using firebase-admin
 * @apiSuccess {Date} User.tokensValidAfterTime Max date when a signed-in user's tokens are valid.
 * @apiSuccess {Object} User.providerData Short user information summary
 * @apiSuccess {String} User.providerData.uid uid Unique Firebase user ID
 * @apiSuccess {String} User.providerData.email email Firebase user email
 * @apiSuccess {String} User.providerData.providerId `password` Sign-in option
 *
 * @apiExample {js} Example usage:
 * // Verify an email
 * const obj = {
 *   data: {
 *     mode: 'verifyEmail'
 *     actionCode: 'GJLPOCYRFJb3eV88...'
 *   }
 * }
 *
 * await axios.post('http://localhost:3001/api/account', data)
 */

/**
 * @api {post} /account/action Reset Password
 * @apiName resetPassword
 * @apiGroup Account
 * @apiDescription Updates a Firebase Auth user's password using the URL link sent to a user's email using the API endpoint in Send Password Reset Email.
 *
 * @apiSampleRequest off
 * @apiBody {String=resetPassword} mode Account management option.
 * @apiBody {String} password New password
 * @apiBody {String} actionCode `oobCode` - the action code sent to user's email for resetting password. Not required if `mode=send_reset`.
 *
 * @apiSuccess {Object} message Password reset information log.
 * @apiSuccess {String} message.kind Firebase account management response type.
 * @apiSuccess {String} message.email Firebase user email
 * @apiSuccess {Bool} message.requestType Firebase account management request type. Value is `PASSWORD_RESET`.
 *
 * @apiExample {js} Example usage:
 * // Verify an email
 * const obj = {
 *   data: {
 *     mode: 'resetPassword'
 *     password: 'myNewPassword123',
 *     actionCode: 'GJLPOCYRFJb3eV88...'
 *   }
 * }
 *
 * await axios.post('http://localhost:3001/api/account', data)
 */

router.post('/account/action', Account.manageAccount)

module.exports = router
