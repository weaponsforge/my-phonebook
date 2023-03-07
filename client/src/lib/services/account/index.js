import axios from 'axios'

// These methods implement custom email action handlers using custom-generated email action links from the server

const ACTION_HANDLER_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/account/action`

const handleAccountActionCode = async ({ mode, email, actionCode }) => {
  const data = { mode, actionCode, email }
  return await axios.post(ACTION_HANDLER_URL, data)
}

export {
  ACTION_HANDLER_URL,
  handleAccountActionCode
}
