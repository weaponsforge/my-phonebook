import Box from '@mui/material/Box'

import Footer from '@/common/layout/footer'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'

const Background = () => {
  const activeTheme = useSyncLocalStorage('activeTheme')
  return (
    <Box
      sx={{
        '&:after,:before': {
          content: '""',
          display: 'block',
          position: 'fixed',
          zIndex: '-1',
          top: 0,
          width: '100%',
          height: '100%',
          animation: `animate 90s linear infinite, ${
            activeTheme === 'dark' ? 'darkColorSwitcher' : 'lightColorSwitcher'
          } 42s linear infinite`,
        },
        '&:after': {
          left: '15vw',
        },
        '&:before': {
          right: '15vw',
          animationDelay: '-15s',
          animationDirection: 'reverse',
        },
        '@keyframes lightColorSwitcher': {
          '0%': {
            backgroundColor: 'hsla(0,40%,80%,80%)',
          },
          '50%': {
            backgroundColor: 'hsla(180,50%,80%,80%)',
          },
          '100%': {
            backgroundColor: 'hsla(360,40%,80%,80%)',
          },
        },
        '@keyframes darkColorSwitcher': {
          '0%': {
            backgroundColor: 'hsla(0,40%,80%,10%)',
          },
          '50%': {
            backgroundColor: 'hsla(180,50%,80%,10%)',
          },
          '100%': {
            backgroundColor: 'hsla(360,40%,80%,10%)',
          },
        },
        '@keyframes animate': {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      }}
    ></Box>
  )
}

function Page({ children }) {
  const animate = useSyncLocalStorage('animate')
  return (
    <>
      {animate && <Background />}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <Header />

        <Section>{children}</Section>

        <Footer />
      </Box>
    </>
  )
}

export default Page
