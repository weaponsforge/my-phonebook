import { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'

import { Validate } from '@/lib/utils/textValidation'

const defaultState = { helperText: '', error: false, color: '', value: '' }

const INPUT_ID = {
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmpassword'
}

function ResetPasswordComponent ({ loading, locked, handleFormSubmit }) {
  /* eslint-disable no-unused-vars */
  const [activeTheme, setActiveTheme] = useActiveTheme()
  const [password, setPassword] = useState(defaultState)
  const [confirmpassword, setConfirmPassword] = useState(defaultState)

  const handleInputChange = (e) => {
    const { id } = e.target

    if (id === INPUT_ID.PASSWORD) {
      setPassword({
        ...Validate.password(e.target.value),
        value: e.target.value
      })
    }

    if (id === INPUT_ID.CONFIRM_PASSWORD) {
      setConfirmPassword({
        ...Validate.passwordConfirmation(password, e.target.value),
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
      <form id="resetpassword" onSubmit={handleFormSubmit}>
        <TextField
          id={INPUT_ID.PASSWORD}
          size='small'
          label='Enter your new password'
          placeholder='Enter your new password'
          helperText={password.helperText}
          error={password.error}
          disabled={loading || locked}
          color={(password.color === 'success')
            ? password.color
            : (activeTheme === 'light') ? 'dark' : 'primary'
          }
          onChange={handleInputChange}
        />

        <TextField
          id={INPUT_ID.CONFIRM_PASSWORD}
          size='small'
          label='Confirm your new password'
          placeholder='Confirm your new password'
          helperText={confirmpassword.helperText}
          error={confirmpassword.error}
          disabled={loading || locked}
          color={(confirmpassword.color === 'success')
            ? confirmpassword.color
            : (activeTheme === 'light') ? 'dark' : 'primary'
          }
          onChange={handleInputChange}
        />

        <Button variant='contained' type='submit' disabled={(
          loading ||
          locked ||
          password.error ||
          confirmpassword.error)
        }>
          Submit
        </Button>
      </form>
    </Box>
  )
}

ResetPasswordComponent.propTypes = {
  loading: PropTypes.bool,
  locked: PropTypes.bool,
  handleFormSubmit: PropTypes.func
}

export default ResetPasswordComponent
