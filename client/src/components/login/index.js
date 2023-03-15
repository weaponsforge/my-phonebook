import PropTypes from 'prop-types'

// common
import Page from '@/common/layout/page'

// lib
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import CheckIcon from '@mui/icons-material/Check'
import Paper from '@mui/material/Paper'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'
import TransparentTextfield from '@/common/ui/transparentfield'
import LoadingButton from '@/common/ui/loadingbutton'
import { useTheme } from '@emotion/react'

function LoginComponent ({ state, eventsHandler, resetError }) {
  const theme = useTheme()
  const { username, password, errorMessage, joke, loading } = state
  const { usernameHandler, passwordHandler, loginHandler } = eventsHandler

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
          color:theme.palette.text.disabled,
          textAlign: 'center',
          paddingLeft: '20px',
          paddingRight:'20px',
          width: '50vw' }}>
          `{joke && joke.joke}`
        </Typography>
        <Paper elevation={0} sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 20px',
          gridTemplateAreas:
            `"username icon1"
            "password icon2"
            "login ."
            "forgot ."`,
          alignItems:'stretch',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TransparentTextfield
            label="Username (email)"
            id="username"
            size="small"
            type="text"
            fullwidth="true"
            disabled={loading}
            required={true}
            color={username.color}
            helperText={username.helperText}
            value={username.value}
            error={username.error}
            onChange={usernameHandler}
            sx={{ gridArea:'username'}}
          />
          {!username.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon1' }}/>
          }
          <TransparentTextfield
            label="Password"
            id="userPassword"
            size="small"
            type="password"
            fullwidth="true"
            disabled={loading}
            required={true}
            value={password.value}
            error={password.error}
            color={password.color}
            helperText={password.helperText}
            onChange={passwordHandler}
            sx={{ gridArea:'password'}}
          />
          {!password.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon2' }}/>
          }
          {
            state.username.error || state.password.error
              ?
              <Button
                disabled
                variant="contained"
                id="login"
                sx={{
                  fontWeight:'bold',
                  color: theme.palette.primary.contrastText,
                  gridArea: 'login'
                }}
                onClick={loginHandler}
              >
              LOGIN
              </Button>
              :
              <LoadingButton
                variant="contained"
                id="login"
                disabled={loading}
                isloading={loading}
                sx={{
                  fontWeight:'bold',
                  color: theme.palette.primary.contrastText,
                  gridArea: 'login'
                }}
                handleClick={loginHandler}
                label='LOGIN'
              >
              </LoadingButton>
          }
          <Link href="/recoverPassword" style={{gridArea: 'forgot'}}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '-5px',
                color:theme.palette.text.primary,
              }}
            >
              Forgot your password ?
            </Typography>
          </Link>
          {errorMessage &&
            <SimpleSnackbar message={errorMessage} closeHandler={resetError} />
          }
        </Paper>
      </Paper>
    </Page>
  )
}

LoginComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}

export default LoginComponent
