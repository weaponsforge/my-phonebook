import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'


function HomeComponent({ state }) {
  const theme = useTheme()
  const {joke, activeTheme} = state
  return (
    <Page>
      <Box sx={{
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
      }}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/myphonebook-app-dev.appspot.com/o/Icons%2Fmyphonebook-low-resolution-logo-black-on-transparent-background.svg?alt=media&token=09e85161-4a07-4ce2-9542-b2f52af19b80"
          alt="Phonebook Logo"
          width={200}
          height={200}
          style={activeTheme === 'dark' && { filter: 'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)' }}
          priority
        />
        <Typography variant="h8" component="h3" gutterBottom sx={{ color:theme.palette.text.disabled,textAlign: 'center', paddingLeft: '20px',paddingRight:'20px',maxWidth: '70vw' }}>
          `{joke && joke.joke}`
        </Typography>
      </Box>
    </Page>
  )
}

HomeComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}


export default HomeComponent
