import Link from 'next/link'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import styles from './styles'

function Header () {
  return (
    <AppBar position='fixed' sx={styles.appbar}>
      <Toolbar variant='dense' disableGutters sx={styles.toolbar}>
        <Container maxWidth='lg' sx={styles.container}>
          <Button sx={styles.button}>
            <Link href="/">
              Home
            </Link>
          </Button>

          <Button variant="outlined">
            <Link href="/login">
              Login
            </Link>
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
