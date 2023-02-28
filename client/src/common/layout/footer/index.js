import Box from '@mui/material/Box'

import styles from './styles'

function Footer () {
  return (
    <Box elevation={10} sx={styles.footer} component='footer'>
      My Phonebook @2023
    </Box>
  )
}

export default Footer
