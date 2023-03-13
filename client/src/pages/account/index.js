import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { verifyPasswordResetCode } from 'firebase/auth'
import { auth } from '@/lib/utils/firebase/config'

import { verifyAccountEmail, resetAccountPassword, ACCOUNT_ACTION } from '@/services/account'
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
  const [method, setMethod] = useState(null)
  const { status, error: asyncError, loading } = usePromise(method)
  const router = useRouter()

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
          message: messages.find(item => item.mode === mode)?.message ?? '',
          mode,
          actionCode
        }))

        switch (mode) {
        case ACCOUNT_ACTION.VERIFY_EMAIL:
          setMethod(verifyAccountEmail(actionCode))
          break
        case ACCOUNT_ACTION.RESET_PASSWORD:
          setState(prev => ({ ...prev, checkCode: true }))
          setMethod(verifyPasswordResetCode(auth, actionCode))
          break
        default:
          setState(prev => ({ ...prev,
            loading: false, error: 'Invalid request' }))
          break
        }
      } else {
        setState(prev => ({ ...prev,
          loading: false, error: 'Invalid request' }))
      }
    }
  }, [router.isReady, router.query])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    setState(prev => ({ ...prev, checkCode: false }))
    setMethod(resetAccountPassword(
      state.actionCode,
      e?.target?.password?.value ?? '')
    )
  }

  return (
    <AccountComponent
      state={{
        ...state,
        loading,
        error: state.error || asyncError,
        locked: (status === RequestStatus.ERROR && state.mode === ACCOUNT_ACTION.RESET_PASSWORD),
        success: (status === RequestStatus.SUCCESS && !state.checkCode) ?
          messages.find(item => item.mode === state.mode)?.success : '',
      }}
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default Account
