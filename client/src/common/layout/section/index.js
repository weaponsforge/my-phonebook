import styles from './styles'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
function Section ({ children }) {
  return (
    <Box sx={styles.container}>
      { children }
    </Box>
  )
}

export default Section
