import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import Page from '@/common/layout/page'

function AccountComponent ({ state }) {
  return (
    <Page>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{
          width: {
            md: '800px',
          },
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          margin: 'auto',
          marginTop: '32px',
          borderRadius: '8px',
          boxShadow: 'inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1), 0 0 0 1px hsla(230, 13%, 9%, 0.075), 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02), 0 0.9px 1.5px hsla(230, 13%, 9%, 0.045), 0 3.5px 6px hsla(230, 13%, 9%, 0.09)',
          textAlign: 'center',
          padding: '24px'
        }}>
          <div>
            {state.message &&
              <p>{state.message}</p>
            }
          </div>

          <div>
            {state.loading
              ? <CircularProgress size={24} />
              : (state.error !== '')
                ? <Typography variant='caption' sx={{ color: 'red' }}>
                    Error: {state.error}
                </Typography>
                : <Typography variant='body1'>
                  {state.success}
                </Typography>
            }
          </div>
        </Box>
      </Box>
    </Page>
  )
}

AccountComponent.propTypes = {
  state: PropTypes.object
}

export default AccountComponent
