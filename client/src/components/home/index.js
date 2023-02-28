import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Page from '@/common/layout/page'
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'

function HomeComponent() {
  const [activeTheme, setActiveTheme] = useActiveTheme()
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
          src="./myphonebook-low-resolution-logo-black-on-transparent-background.svg"
          alt="Phonebook Logo"
          width={200}
          height={200}
          style={activeTheme === 'dark' && { filter: "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)" }}
          priority
        />
      </Box>
    </Page>
  )
}

export default HomeComponent
