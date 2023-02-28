// import PropTypes from 'prop-types'
// import Image from "next/image";
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function LoginComponent () {
  return (
    <Page>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <Paper elevation={20} sx={{
          margin: '20px',
          flex: 10,
          position: 'relative',
          background: 'inherit',
          minWidth: '300px',
          maxWidth: '500px',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '13px',
            padding: '40px',
            position: 'relative',
            zIndex: 9,
            minWidth: '300px',
            maxWidth: '500px'
          }}>
            <Typography variant="h5" sx={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              color:'black',
            }}>
              Login :
            </Typography>
            <TextField
              label="email"
              id="email"
              size="small"
            />
            <TextField
              label="password"
              id="password"
              size="small"
            />
            <Button variant="contained">LOGIN</Button>
          </Box>
        </Paper>
      </Box>
    </Page>
  )
}

// LoginComponent.propTypes = {
//   simcards: PropTypes.array,
//   stringNames: PropTypes.string
// }

export default LoginComponent
