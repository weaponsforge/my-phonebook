import axios from 'axios'

const ACTION_HANDLER_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/account/action`

const ACCOUNT_ACTION = {
  SEND_VERIFICATTION: 'send_verification',
  SEND_RESET: 'send_reset',
  VERIFY_EMAIL: 'verifyEmail',
  RESET_PASSWORD: 'resetPassword',
  RECOVER_EMAIL: 'recoverEmail'
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
  return axios.post(ACTION_HANDLER_URL, data)
}

export {
  ACTION_HANDLER_URL,
  ACCOUNT_ACTION,
  handleAccountActionCode
}
