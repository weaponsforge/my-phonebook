import PropTypes from 'prop-types'
import Link from 'next/link'
import Page from '@/common/layout/page'
import { Paper, Typography } from '@mui/material'
import LoadingButton from '@/common/ui/loadingbutton'
import TransparentTextfield from '@/common/ui/transparentfield'
import CheckIcon from '@mui/icons-material/Check'
import { useTheme } from '@emotion/react'

import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'

const RecoverPasswordComponent = ({state, eventsHandler}) => {
  const theme = useTheme()
  const {username, joke} = state
  const {usernameHandler, recoverPasswordHandler} = eventsHandler

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
              "recoverPassword ."
              "resend ."`,
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
            disabled={state.loading}
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
          {
            state.username.error
              ?
              <LoadingButton
                variant="contained"
                sx={{
                  fontWeight:'bold',
                  color:theme.palette.primary.contrastText,
                  gridArea: 'recoverPassword'
                }}
                onClick={recoverPasswordHandler}
                disabled
                label='RECOVER PASSWORD'
              />
              :
              <LoadingButton
                variant="contained"
                disabled={state.loading}
                sx={{
                  fontWeight:'bold',
                  color:theme.palette.primary.contrastText,
                  gridArea: 'recoverPassword',
                }}
                isloading={state.loading}
                handleClick={recoverPasswordHandler}
                label='RECOVER PASSWORD'
              />
          }

          {(state?.message?.includes('User is not yet email-verified')) &&
          <Typography
            sx={{
              fontSize: '12px',
              textAlign: 'center',
              marginTop: '-5px',
              color:theme.palette.text.primary,
              a: {
                color:theme.palette.text.primary
              }
            }}
            style={{gridArea: 'resend'}}
          >
            Did not receive the account verification email? Resend it &nbsp;
            <Link href="/account?mode=resend_email_verification">here</Link>.
          </Typography>
          }
        </Paper>
      </Paper>

      {(state.message) &&
        <SimpleSnackbar
          message={state.message}
          closeHandler={eventsHandler.resetMessage}
        />
      }
    </Page>
  )
}

RecoverPasswordComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}

export default RecoverPasswordComponent