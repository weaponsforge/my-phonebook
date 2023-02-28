import Box from '@mui/material/Box'

import Footer from '@/common/layout/footer'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'

import styles from './index.module.css'

function Page ({ children }) {
  return (
    <>
      <div className={styles.background} >
      </div>
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
