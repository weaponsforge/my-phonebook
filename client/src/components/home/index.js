import Image from 'next/image'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import Page from '@/common/layout/page'
import Link from 'next/link'

function HomeComponent() {
  return (
    <Page>
      <Box sx={{
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome
        </Typography>
        <Image
          src="./myphonebook-low-resolution-logo-black-on-transparent-background.png"
          alt="Phonebook Logo"
          width={200}
          height={200}
          priority
        />
      </Box>
    </Page>
  )
}

export default HomeComponent
