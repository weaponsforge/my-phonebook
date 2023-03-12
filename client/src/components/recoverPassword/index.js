import PropTypes from 'prop-types'
import Page from '@/common/layout/page'
import { Button, Paper, TextField, Typography } from '@mui/material'
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
              "recoverPassword ."`,
          alignItems:'stretch',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TextField
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
              <Button
                variant="contained"
                sx={{
                  fontWeight:'bold',
                  color:theme.palette.primary.contrastText,
                  gridArea: 'recoverPassword',
                }}
                onClick={recoverPasswordHandler}
                disabled
              >
              RECOVER PASSWORD
              </Button>
              :
              <Button
                variant="contained"
                disabled={state.loading}
                sx={{
                  fontWeight:'bold',
                  color:theme.palette.primary.contrastText,
                  gridArea: 'recoverPassword',
                }}
                onClick={recoverPasswordHandler}
              >
              RECOVER PASSWORD
              </Button>
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