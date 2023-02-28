// import PropTypes from 'prop-types'
// import Image from "next/image";
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

function LoginComponent () {
  return (
    <Page>
      <Paper sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        background: 'inherit',
      }}>
        <Paper elevation={0} sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <Typography variant="h6" sx={{
            fontWeight: 'bold',
            color:(theme)=>theme.palette.text.primary,
          }}>
            Login :
          </Typography>
          <TextField
            label="email"
            id="email"
            size="small"
            type="email"
            fullwidth="true"
          />
          <TextField
            label="password"
            id="password"
            size="small"
            type="password"
            fullwidth="true"
          />
          <Button variant="contained" sx={{
            fontWeight:'bold',
            color: (theme)=>theme.palette.primary.contrastText
          }}>LOGIN</Button>
          <Link href="/register">
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '-10px',
                color: (theme)=>theme.palette.text.primary,
              }}
            >
              Don`t have an account? Register instead
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
