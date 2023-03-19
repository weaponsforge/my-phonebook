import Box from '@mui/material/Box'

import Footer from '@/common/layout/footer'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'

const Background = () => {
  return (
    <Box sx={{
      '&:after,:before': {
        content: '""',
        display: 'block',
        position: 'fixed',
        zIndex: '-1',
        top: 0,
        width: '100%',
        height: '100%',
        animation: 'animate 90s linear infinite, colorSwitcher 21s alternate infinite'
      },
      '&:after': {
        left: '15vw',
      },
      '&:before': {
        right: '15vw',
        animationDelay: '-30s',
        animationDirection: 'reverse',
      },
      '@keyframes colorSwitcher': {
        '0%': {
          backgroundColor: 'hsla(0,40%,80%,30%)',
        },
        '100%': {
          backgroundColor: 'hsla(255,40%,80%,30%)',
        }
      },
      '@keyframes animate': {
        'from': {
          transform: 'rotate(0deg)',
        },
        'to': {
          transform: 'rotate(360deg)'
        }
      }
    }}>
    </Box>
  )
}

function Page({ children }) {
  return (
    <>
      <Background />
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      }}>
        <Header />

        <Section>
          {children}
        </Section>

        <Footer />
      </Box>
    </>
  )
}

export default Page
