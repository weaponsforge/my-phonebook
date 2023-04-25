import { useMediaQuery } from '@mui/material'
import Paper from '@mui/material/Paper'

function Footer() {
  const mobile = useMediaQuery('(max-width:500px)')

  return (
    <>
      {!mobile && (
        <Paper
          elevation={10}
          sx={{
            width: '100%',
            minHeight: (theme) => theme.spacing(4),
            padding: '10px',
            textAlign: 'center',
            marginTop: 'auto',
            zIndex: 100,
            background: 'inherit',
            backdropFilter: 'blur(5px)',
            fontWeight: 'bold',
          }}
          component="footer"
        >
          myPhonebook @2023
        </Paper>
      )}
    </>
  )
}

export default Footer
