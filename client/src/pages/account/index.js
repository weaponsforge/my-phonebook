import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { handleAccountActionCode } from '@/services/account'
import { ACCOUNT_ACTION } from '@/lib/utils/constants'

import AccountComponent from '@/components/account'

import messages from './messages'
const defaultState = { loading: true, message: '', error: '', success: '' }

function Account () {
  const [state, setState] = useState(defaultState)
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { mode, email, actionCode } = router.query

      if (!Object.values(ACCOUNT_ACTION).includes(mode))  {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid mode' }))
        return
      }

      const handleActionCode = async () => {
        try {
          await handleAccountActionCode({ mode, email, actionCode })

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
      }

      if (mode && actionCode) {
        setState(prev => ({
          ...prev,
          loading: true,
          message: messages.find(item => item.mode === mode)?.message ?? ''
        }))

        handleActionCode()
      } else {
        setState(prev => ({ ...prev, loading: false, error: 'Invalid request' }))
      }
    }
  }, [router.isReady, router.query])

  return (
    <AccountComponent
      state={state}
    />
  )
}

export default Account
