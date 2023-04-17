import Box from '@mui/material/Box'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'
import { Sidebar } from '../sidebar'
import { updateSyncV, useSyncV } from 'use-sync-v'
import { Divider, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'

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
  const auth = useSyncV('auth')
  const animate = useSyncLocalStorage('animate')
  const showSidebar = useSyncV('show.sidebar')
  const isMobile = useMediaQuery('(max-width:900px)')
  useEffect(() => {
    if (isMobile) {
      updateSyncV('show.sidebar', false)
    } else {
      updateSyncV('show.sidebar', true)
    }
  }, [isMobile])
  return (
    <>
      {animate && <Background />}
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            overflowY:'scroll'
          }}
        >
          {showSidebar && auth.authStatus === 'signedIn' && <Sidebar />}
          <Divider orientation="vertical" variant="middle" flexItem />

          <Section>{children}</Section>
        </Box>
      </Box>
    </>
  )
}

export default Page
