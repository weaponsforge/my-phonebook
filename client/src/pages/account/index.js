import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { verifyPasswordResetCode } from 'firebase/auth'
import { auth } from '@/lib/utils/firebase/config'

import {
  verifyAccountEmail,
  resetAccountPassword,
  sendEmailVerification,
  ACCOUNT_ACTION
} from '@/services/account'
import { usePromise, RequestStatus } from '@/lib/hooks/usePromise'

import AccountComponent from '@/components/account'
import messages from './messages'

const defaultState = {
  loading: true,
  locked: false,
  checkCode: false,
  message: '',
  error: '',
  success: '',
  mode: '',
  actionCode: '',
  password: ''
}

function Account () {
  const [state, setState] = useState(defaultState)
  const [method, setMethod] = useState({ promise: null, name: 'default' })
  const router = useRouter()

  const {
    status,
    error: asyncError,
    loading,
    name
  } = usePromise(method.promise, method.name)

  useEffect(() => {
    if (router.isReady) {
      const { mode, actionCode } = router.query

      if (!Object.values(ACCOUNT_ACTION).includes(mode))  {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid mode' }))
        return
      }

      if (mode) {
        setState(prev => ({
          ...prev,
          message: messages.find(item => item.mode === mode)?.message ?? '',
          mode
        }))
      }

      if (actionCode) {
        setState(prev => ({ ...prev, actionCode }))

        switch (mode) {
        case ACCOUNT_ACTION.VERIFY_EMAIL:
          setMethod({
            promise: verifyAccountEmail(actionCode),
            name: ACCOUNT_ACTION.VERIFY_EMAIL
          })
          break
        case ACCOUNT_ACTION.RESET_PASSWORD:
          setState(prev => ({ ...prev, checkCode: true }))
          setMethod({
            promise: verifyPasswordResetCode(auth, actionCode),
            name: 'checkcode'
          })
          break
        default:
          setState(prev => ({ ...prev,
            loading: false, error: 'Invalid request' }))
          break
        }
      } else {
        if (mode !== ACCOUNT_ACTION.RESEND_EMAIL_VERIFICATION) {
          setState(prev => ({ ...prev,
            loading: false, error: 'Invalid request' }))
        }
      }
    }
  }, [router.isReady, router.query])

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault()

    setState(prev => ({ ...prev, checkCode: false }))
    setMethod({
      promise: resetAccountPassword(
        state.actionCode,
        e?.target?.password?.value ?? ''),
      name: ACCOUNT_ACTION.RESET_PASSWORD
    }
    )
  }

  const handleResendEmailVerification = (e) => {
    e.preventDefault()
    setMethod({
      promise: sendEmailVerification(e?.target?.email?.value ?? ''),
      name: ACCOUNT_ACTION.RESEND_EMAIL_VERIFICATION
    })
  }

  return (
    <AccountComponent
      state={{
        ...state,
        loading,
        locked: (status === RequestStatus.ERROR && state.mode === ACCOUNT_ACTION.RESET_PASSWORD),
        error: (asyncError && asyncError !== 'Network Error')
          ? messages.find(item => item.mode === state.mode)?.error ?? asyncError
          : asyncError,
        success: (status === RequestStatus.SUCCESS && !state.checkCode) ?
          messages.find(item => item.mode === name)?.success : '',
      }}
      handleResetPasswordSubmit={handleResetPasswordSubmit}
      handleResendEmailVerification={handleResendEmailVerification}
    />
  )
}

export default Account
