import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Page from '@/common/layout/page'

function HomeComponent() {
  return (
    <Page>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h2" gutterBottom>
          It Works!
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          My Phonebook
        </Typography>

        <Image
          src="./vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </Box>
    </Page>
  )
}

export default HomeComponent
