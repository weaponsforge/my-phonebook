import Image from 'next/image'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Page from '@/common/layout/page'
import { useActiveTheme } from '@/lib/hooks/useActiveTheme'
import { useEffect, useState } from 'react'
import { getRandomJoke } from '@/lib/services/random'

function HomeComponent() {
  const [activeTheme] = useActiveTheme()
  const [joke, setJoke] = useState()
  useEffect(()=>{
    setTimeout(async()=>{
      const randomJoke = await getRandomJoke()
      setJoke(randomJoke)
    })
  },[])
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
          src="./myphonebook-low-resolution-logo-black-on-transparent-background.svg"
          alt="Phonebook Logo"
          width={200}
          height={200}
          style={activeTheme === 'dark' && { filter: 'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)' }}
          priority
        />
        <Typography variant="h8" component="h3" gutterBottom sx={{ color:(theme)=>theme.palette.text.disabled,textAlign: 'center', paddingLeft: '20px',paddingRight:'20px',maxWidth: '70vw' }}>
          `{joke && joke.joke}`
        </Typography>
      </Box>
    </Page>
  )
}

export default HomeComponent
