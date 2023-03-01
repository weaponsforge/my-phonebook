// import PropTypes from 'prop-types'
// import Image from "next/image";
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { useEffect, useState } from 'react'
import { getRandomJoke } from '@/lib/services/random'
import { Validate } from '@/lib/utils/textValidation'

function LoginComponent () {
  const [joke, setJoke] = useState()
  const [username, setUsername] = useState({ error:false, helperText:" ",value:"", color:"text" })
  const [password, setPassword] = useState({ error:false, helperText:" ",value:"", color:"text" })

  const usernameHandler = (e) => {
    const {helperText, error, color} = Validate.email(e.target.value)
    const newUsername = {
      ...username,
      value: e.target.value,
      error: false,
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
      error: false,
      helperText,
      color
    }
    setPassword(newPassword)
  }
  useEffect(()=>{
    setTimeout(async()=>{
      const randomJoke = await getRandomJoke()
      setJoke(randomJoke)
    })
  },[])
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
        <Typography variant="h8" component="h3" gutterBottom sx={{ color:(theme)=>theme.palette.text.disabled, textAlign: 'center', paddingLeft: '20px',paddingRight:'20px', maxWidth: '50vw' }}>
          `{joke && joke.joke}`
        </Typography>
        <Paper elevation={0} sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TextField
            label="Username"
            id="username"
            size="small"
            type="text"
            fullwidth="true"
            required={true}
            color={username.color}
            helperText={username.helperText}
            value={username.value}
            error={username.error}
            onChange={usernameHandler}
          />
          <TextField
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
            onChange={passwordHandler}
          />
          <Button variant="contained" sx={{
            fontWeight:'bold',
            color: (theme)=>theme.palette.primary.contrastText
          }}>LOGIN</Button>
          <Link href="/recoverPassword">
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '-5px',
                color: (theme)=>theme.palette.text.primary,
              }}
            >
              Forgot your password ?
            </Typography>
          </Link>
        </Paper>
      </Paper>
    </Page>
  )
}

// LoginComponent.propTypes = {
//   simcards: PropTypes.array,
//   stringNames: PropTypes.string
// }

export default LoginComponent
