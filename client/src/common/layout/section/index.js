import Container from '@mui/material/Container'
import styles from './styles'

function Section ({ children }) {
  return (
    <Container sx={styles.container} maxWidth='lg'>
      { children }
    </Container>
  )
}

export default Section
