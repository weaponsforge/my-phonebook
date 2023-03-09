import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { verifyPasswordResetCode } from 'firebase/auth'
import { auth } from '@/lib/utils/firebase/config'

import { handleAccountActionCode } from '@/services/account'
import { ACCOUNT_ACTION } from '@/lib/utils/constants'

import AccountComponent from '@/components/account'
import messages from './messages'

const defaultState = {
  loading: true,
  locked: false,
  message: '',
  error: '',
  success: '',
  mode: '',
  actionCode: '',
  password: ''
}

function Account () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()

  const handleActionCode = useCallback(async ({ password, mode, actionCode }) => {
    try {
      setState(prev => ({ ...prev, error: '', success: '', loading: true, locked: false }))
      await handleAccountActionCode({ mode, actionCode, password })

      setState(prev => ({
        ...prev,
        loading: false,
        success: messages.find(item => item.mode === mode)?.success ?? ''
      }))
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err?.response?.data ?? err.message
      }))
    }
  }, [])

  useEffect(() => {
    if (router.isReady) {
      const { mode, actionCode } = router.query

      if (!Object.values(ACCOUNT_ACTION).includes(mode))  {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid mode' }))
        return
      }

      if (mode && actionCode) {
        setState(prev => ({
          ...prev,
          loading: (mode === ACCOUNT_ACTION.VERIFY_EMAIL),
          message: messages.find(item => item.mode === mode)?.message ?? '',
          mode,
          actionCode
        }))

        switch(mode) {
        case ACCOUNT_ACTION.VERIFY_EMAIL:
          handleActionCode({ mode, actionCode })
          break
        case ACCOUNT_ACTION.RESET_PASSWORD:
          confirmPasswordResetCode(actionCode)
          break
        default:
          break
        }
      } else {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid request' }))
      }
    }
  }, [router.isReady, router.query, handleActionCode])

  const confirmPasswordResetCode = async (actionCode) => {
    try {
      await verifyPasswordResetCode(auth, actionCode)
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        locked: true,
        error: err?.response?.data ?? err.message
      }))
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const { password } = e.target

    handleActionCode({
      mode: state.mode,
      actionCode: state.actionCode,
      password: password.value
    })
  }

  return (
    <AccountComponent
      state={state}
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Account
