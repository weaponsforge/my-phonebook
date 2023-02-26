import PropTypes from 'prop-types'
// import Image from "next/image";
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
function LoginComponent ({ simcards, stringNames }) {
  return (
    <Page>
      <Box sx={{
        outline: '3px solid green',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/pexels-pixabay-101529.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundOrigin: 'border-box',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 10px 0px inset',
        borderRadius: '20px',
        marginBottom: '-50px',
      }}>
        <Paper elevation={20} sx={{
          margin: '20px', 
          flex: 10,
          borderRadius: '30px',
          position: 'relative',
          background: 'inherit',
          minWidth: '300px',
          maxWidth: '500px',
          border: '1px solid green'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '30px',
            gap: '13px',
            padding: '40px',
            position: 'relative',
            backdropFilter: 'blur(3px)',
            zIndex: 9,
            minWidth: '300px',
            maxWidth: '500px'
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textDecoration: 'underline'}}>
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
          </Box>
        </Paper>
      </Box>
    </Page>
  )
}

LoginComponent.propTypes = {
  simcards: PropTypes.array,
  stringNames: PropTypes.string
}

export default LoginComponent
