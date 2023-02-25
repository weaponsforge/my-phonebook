import Box from '@mui/material/Box'

import Footer from '@/common/layout/footer'
import Header from '@/common/layout/header'
import Section from '@/common/layout/section'

function Page ({ children }) {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Header />

      <Section>
        { children }
      </Section>

      <Footer />
    </Box>
  )
}

export default Page
