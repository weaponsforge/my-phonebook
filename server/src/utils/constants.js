const ACCOUNT_ACTION = {
  SEND_VERIFICATTION: 'send_verification',
  SEND_RESET: 'send_reset',
  VERIFY_EMAIL: 'verifyEmail',
  RESET_PASSWORD: 'resetPassword',
  RECOVER_EMAIL: 'recoverEmail'
}

const ACCOUNT_TYPE = {
  USER: 'user',
  ADMIN: 'admin'
}

const MAX_CONTACTS = 500

const CONTACT_FIELDS = {
  DOC_ID: 'doc_id',
  EMAIL_ADDRESS: 'email_address',
  FIRST_NAME: 'first_name',
  MIDDLE_NAME: 'middle_name',
  LAST_NAME: 'last_name',
  PHONE_NUMBER: 'phone_number',
  PROFILE_PICTURE_URL: 'profile_picture_url',
  DATE_CREATED: 'date_created',
  DATE_UPDATED: 'date_updated'
}

module.exports = {
  ACCOUNT_ACTION,
  ACCOUNT_TYPE,
  CONTACT_FIELDS,
  MAX_CONTACTS
}
