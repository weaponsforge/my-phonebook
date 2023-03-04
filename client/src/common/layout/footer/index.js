// MUI
import Paper from '@mui/material/Paper'

// CSS
import styles from './styles'

function Footer () {
  return (
    <Paper elevation={10} sx={styles.footer} component='footer'>
      myPhonebook @2023
    </Paper>
  )
}

export default Footer
