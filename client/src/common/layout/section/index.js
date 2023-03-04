import styles from './styles'
import Box from '@mui/material/Box'
function Section ({ children }) {
  return (
    <Box sx={styles.container}>
      { children }
    </Box>
  )
}

export default Section
