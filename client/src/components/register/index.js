import Page from '@/common/layout/page'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'
import LoadingButton from '@/common/ui/loadingbutton'
import TransparentTextfield from '@/common/ui/transparentfield'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useTheme } from '@emotion/react'

const RegisterComponent = ({ state, eventsHandler }) => {
  const theme = useTheme()
  const {joke, username, password, passwordConfirmation, errorMessage, successMessage, loading } = state
  const {usernameHandler, passwordHandler, passwordConfirmationHandler, registerHandler, resetError } = eventsHandler
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
            "register ."
            "login ."`,
          alignItems:'stretch',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TransparentTextfield
            sx={{ gridArea:'username'}}
            label="Username (email)"
            id="username"
            size="small"
            type="text"
            fullwidth="true"
            required={true}
            disabled={loading}
            color={username.color}
            helperText={username.helperText}
            value={username.value}
            error={username.error}
            onInput={usernameHandler}
          />
          {!username.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon1' }}/>
          }
          <TransparentTextfield
            sx={{ gridArea:'password'}}
            label="Password"
            id="userPassword"
            size="small"
            type="password"
            fullwidth="true"
            required={true}
            disabled={loading}
            value={password.value}
            error={password.error}
            color={password.color}
            helperText={password.helperText}
            onInput={passwordHandler}
          />
          {!password.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon2' }}/>
          }
          <TransparentTextfield
            sx={{ gridArea:'passwordConfirmation'}}
            label="Password confirmation"
            id="userPasswordConfirmation"
            size="small"
            type="password"
            fullwidth="true"
            required={true}
            disabled={loading}
            value={passwordConfirmation.value}
            error={passwordConfirmation.error}
            color={passwordConfirmation.color}
            helperText={passwordConfirmation.helperText}
            onInput={passwordConfirmationHandler}
          />
          {!passwordConfirmation.error &&
            <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon3' }}/>
          }
          {
            state.username.error || state.password.error || state.passwordConfirmation.error
              ?
              <Button
                disabled
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
              :
              <LoadingButton
                variant="contained"
                sx={{
                  gridArea:'register',
                  fontWeight:'bold',
                  color: (theme)=>theme.palette.primary.contrastText
                }}
                isloading={loading}
                handleClick={registerHandler}
                label='REGISTER'
              />
          }
          <Link href="/login" style={{gridArea: 'login'}}>
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '-5px',
                color:theme.palette.text.primary,
              }}
            >
              Already have an account? Login instead.
            </Typography>
          </Link>
          {(errorMessage || successMessage) &&
            <SimpleSnackbar
              message={errorMessage || successMessage}
              closeHandler={resetError}
            />
          }
        </Paper>
      </Paper>
    </Page>
  )
}

RegisterComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}

export { RegisterComponent }