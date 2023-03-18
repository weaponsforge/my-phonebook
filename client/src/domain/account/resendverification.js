import { useState } from 'react'
import PropTypes from 'prop-types'

import { Validate } from '@/lib/utils/textValidation'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TransparentTextfield from '@/common/ui/transparentfield'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'

const defaultState = { helperText: '', error: false, color: '', value: '' }

function ResendVerificationComponent ({
  loading,
  locked,
  handleResendEmailVerification
}) {
  const [email, setPassword] = useState(defaultState)
  const [activeTheme] = useSyncLocalStorage('activeTheme')

  const handleInputChange = (e) => {
    const { id } = e.target

    if (id === 'email') {
      setPassword({
        ...Validate.email(e.target.value),
        value: e.target.value
      })
    }
  }

  return (
    <Box sx={{
      margin: 'auto',
      marginBottom: '24px',
      width: {
        sm: '400px'
      },
      '& .MuiTextField-root, button': {
        marginTop: '24px',
        width: '100%'
      }
    }}>
      <form id="resetpassword" onSubmit={handleResendEmailVerification}>
        <TransparentTextfield
          id='email'
          type='email'
          size='small'
          label='Enter your email'
          placeholder='Enter your email'
          helperText={email.helperText}
          error={email.error}
          disabled={loading || locked}
          color={(email.color === 'success')
            ? email.color
            : (activeTheme === 'light') ? 'dark' : 'primary'
          }
          onChange={handleInputChange}
        />

        <Button variant='contained' type='submit' disabled={(
          loading ||
          locked ||
          email.error ||
          email.value === '')
        }>
          Resend
        </Button>
      </form>
    </Box>
  )
}

ResendVerificationComponent.propTypes = {
  loading: PropTypes.bool,
  locked: PropTypes.bool,
  ResendVerificationComponent: PropTypes.func
}

export default ResendVerificationComponent
