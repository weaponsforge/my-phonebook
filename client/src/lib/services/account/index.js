import axios from 'axios'

const ACTION_HANDLER_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/account/action`

const ACCOUNT_ACTION = {
  SEND_VERIFICATTION: 'send_verification',
  SEND_RESET: 'send_reset',
  VERIFY_EMAIL: 'verifyEmail',
  RESET_PASSWORD: 'resetPassword',
  RECOVER_EMAIL: 'recoverEmail',
  RESEND_EMAIL_VERIFICATION: 'resend_email_verification'
}

/**
 * This method implements custom email action handlers using custom-generated email action links from the server.
 * Read the server API documentation for more usage options.
 * @param {String} mode - Firebase account management options. One of ACCOUNT_ACTION
 * @param {String} actionCode - Firebase-generated oobCode sent to user's email. Not required if mode is
 *    ACCOUNT_ACTION.SEND_VERIFICATTION or ACCOUNT_ACTION.SEND_RESET
 * @param {String} email - User email. Required of mode is ACCOUNT_ACTION.VERIFY_EMAIL
 * @param {String} password - User's new password. Required if mode is ACCOUNT_ACTION.RESET_PASSWORD
 * @returns {Promise}
 */
const handleAccountActionCode = async ({ mode, actionCode, email, password }) => {
  const data = { mode, actionCode, email, password }
  return await axios.post(ACTION_HANDLER_URL, data)
}

/**
 * Send an account email verification to user's email address.
 * The email contains a custom URL link with actionCode (oobCode) for verifiying/confirming the email account.
 * @param {String} email - User email
 * @returns {Promise}
 */
const sendEmailVerification = async (email) =>
  handleAccountActionCode({ mode: ACCOUNT_ACTION.SEND_VERIFICATTION, email })

/**
 * Send a password reset email to user's email address.
 * The email contains a custom URL link with actionCode (oobCode) for resetting the password.
 * @param {String} email - User email
 * @returns {Promise}
 */
const sendPasswordResetEmail = async (email) =>
  handleAccountActionCode({ mode: ACCOUNT_ACTION.SEND_RESET, email })

/**
 * Verifies a user's Firebase email account.
 * @param {String} actionCode - Firebase-generated oobCode sent to user's email for verifying/confirming the email account.
 * @returns {Promise}
 */
const verifyAccountEmail = async (actionCode) =>
  handleAccountActionCode({ mode: ACCOUNT_ACTION.VERIFY_EMAIL, actionCode })

/**
 * Resets a user's password
 * @param {String} actionCode - Firebase-generated oobCode sent to user's email for resetting the password.
 * @param {String} password - New password
 * @returns {Promise}
 */
const resetAccountPassword = async (actionCode, password) =>
  handleAccountActionCode({ mode: ACCOUNT_ACTION.RESET_PASSWORD, actionCode, password })

export {
  ACTION_HANDLER_URL,
  ACCOUNT_ACTION,
  handleAccountActionCode,
  sendEmailVerification,
  sendPasswordResetEmail,
  verifyAccountEmail,
  resetAccountPassword
}
