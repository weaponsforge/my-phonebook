import Box from '@mui/material/Box'

import Footer from '@/common/layout/footer'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'
import { useEffect } from 'react'
import { useBgColor } from '@/lib/hooks/useBgColor'

const Background = () => {
  const [activeTheme] = useActiveTheme()
  const [bgColor, animateBgColor] = useBgColor()

  useEffect(()=>{
    animateBgColor()
  },[animateBgColor])

  return (
    <Box sx={{
      animation: 'colorSwitcher 21s linear infinite',
      '&:after,:before' : {
        content: '""',
        display: 'block',
        position: 'fixed',
        zIndex: '-1',
        top: 0,
        width: '100vw',  
        height: '100vh',
        width: '100vmax',
        height: '100vmax',
        background: `hsla(${bgColor},40%,80%,${activeTheme === 'dark' ? '10%' : '80%'})`,
        animation: 'animate 90s linear infinite',
      },
      '&:after':{
        left: '15vw',
      },
      '&:before':{
        right: '15vw',
        animationDelay: '-30s',
        animationDirection: 'reverse',
      },
      '@keyframes colorSwitcher': {
        '0%': {
          background: '#74C390',
        },
        '16%': {
          background: '#5DBDB6',
        },
        '33%': {
          background: '#59D4E1',
        },
        '50%': {
          background: '#51BCE8',
        },
        '66%': {
          background: '#FA5374',
        },    
        '83%': {
          background: '#E46653',
        },
        '100%': {
          background: '#74C390',
        }
      },
      '@keyframes animate': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    }}>
    </Box>
  )
}

function Page ({ children }) {
  return (
    <>
      <Background/>
      <Box sx={{
        width: '100%', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}>
        <Header />

        <Section>
          { children }
        </Section>

        <Footer />
      </Box>
    </>
  )
}

export default Page
