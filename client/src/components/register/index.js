import Page from '@/common/layout/page'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'
import { Validate } from '@/lib/utils/textValidation'
import CheckIcon from '@mui/icons-material/Check'

const RegisterComponent = () => {
  const [joke, setJoke] = useState()
  const [username, setUsername] = useState({ error:true, helperText:' ',value:'', color:'text' })
  const [password, setPassword] = useState({ error:true, helperText:' ',value:'', color:'text' })
  const [passwordConfirmation, setPasswordConfirmation] = useState({ error:true, helperText:' ',value:'', color:'text' })

  useEffect(()=>{
    (async() => {
      const randomJoke = await getRandomJoke()
      setJoke(randomJoke)
    })()
  },[])

  const usernameHandler = (e) => {
    const {helperText, error, color} = Validate.email(e.target.value)
    const newUsername = {
      ...username,
      value: e.target.value,
      error,
      helperText,
      color
    }
    setUsername(newUsername)
  }

  const passwordHandler = (e) => {
    const {helperText, error, color } = Validate.password(e.target.value)
    const newPassword = {
      ...password,
      value: e.target.value,
      error,
      helperText,
      color
    }
    setPassword(newPassword)
  }

  const passwordConfirmationHandler = (e) => {
    const { helperText, error, color } = Validate.passwordConfirmation(password, e.target.value)
    const newPasswordConfirmation = {
      ...passwordConfirmation,
      value: e.target.value,
      error,
      helperText,
      color
    }
    setPasswordConfirmation(newPasswordConfirmation)
  }

  const registerHandler = () => {
    // only proceed when no error
    const allFieldAreValid = !username.error && !password.error && !passwordConfirmation.error
    if (!allFieldAreValid) return

    // gather all data to dispatch
    const request = {
      username:username.value,
      password:password.value
    }

  }
  return (
    <Page>
      <Paper sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        background: 'inherit',
        flexWrap: 'wrap-reverse'
      }}>
        <Typography variant="h8" component="h3" gutterBottom sx={{
          color:(theme)=>theme.palette.text.disabled, 
          textAlign: 'center', 
          paddingLeft: '20px',
          paddingRight:'20px', 
          width: '50vw' 
        }}>
                    `{joke && joke.joke}`
        </Typography>
        <Paper elevation={0} sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 20px',
          gridTemplateAreas:
            `"username icon1"
            "password icon2"
            "passwordConfirmation icon3"
            "register ."`,
          alignItems:'stretch',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TextField
            sx={{ gridArea:'username'}}
            label="Username (email)"
            id="username"
            size="small"
            type="text"
            fullwidth="true"
            required={true}
            color={username.color}
            helperText={username.helperText}
            value={username.value}
            error={username.error}
            onInput={usernameHandler}
          />
          {!username.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon1' }}/>
          }
          <TextField
            sx={{ gridArea:'password'}}
            label="Password"
            id="userPassword"
            size="small"
            type="password"
            fullwidth="true"
            required={true}
            value={password.value}
            error={password.error}
            color={password.color}
            helperText={password.helperText}
            onInput={passwordHandler}
          />
          {!password.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon2' }}/>
          }
          <TextField
            sx={{ gridArea:'passwordConfirmation'}}
            label="Password confirmation"
            id="userPasswordConfirmation"
            size="small"
            type="password"
            fullwidth="true"
            required={true}
            value={passwordConfirmation.value}
            error={passwordConfirmation.error}
            color={passwordConfirmation.color}
            helperText={passwordConfirmation.helperText}
            onInput={passwordConfirmationHandler}
          />
          {!passwordConfirmation.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon3' }}/>
          }
          <Button 
            variant="contained" 
            sx={{
              gridArea:'register',
              fontWeight:'bold',
              color: (theme)=>theme.palette.primary.contrastText
            }}
            onClick={registerHandler}
          >
            REGISTER
          </Button>
        </Paper>
      </Paper>
    </Page>
  )
}

export { RegisterComponent }