// import PropTypes from 'prop-types'
// import Image from "next/image";
import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { useEffect, useState } from 'react'
import { getRandomJoke } from '@/lib/services/random'

function LoginComponent () {
  const [joke, setJoke] = useState()
  useEffect(()=>{
    setTimeout(async()=>{
      const randomJoke = await getRandomJoke()
      setJoke(randomJoke)
    })
  },[])
  return (
    <Page>
      <Paper sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        background: 'inherit',
        flexWrap: 'wrap-reverse'
      }}>
        <Typography variant="h8" component="h3" gutterBottom sx={{ color:(theme)=>theme.palette.text.disabled, textAlign: 'center', paddingLeft: '20px',paddingRight:'20px', maxWidth: '50vw' }}>
          `{joke ? joke.joke : '. . .'}`
        </Typography>
        <Paper elevation={0} sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TextField
            label="email"
            id="email"
            size="small"
            type="email"
            fullwidth="true"
          />
          <TextField
            label="password"
            id="password"
            size="small"
            type="password"
            fullwidth="true"
          />
          <Button variant="contained" sx={{
            fontWeight:'bold',
            color: (theme)=>theme.palette.primary.contrastText
          }}>LOGIN</Button>
          <Link href="/register">
            <Typography
              sx={{
                fontSize: '12px',
                textAlign: 'center',
                marginTop: '-10px',
                color: (theme)=>theme.palette.text.primary,
              }}
            >
              Don`t have an account? Register instead
            </Typography>
          </Link>
        </Paper>
      </Paper>
    </Page>
  )
}

// LoginComponent.propTypes = {
//   simcards: PropTypes.array,
//   stringNames: PropTypes.string
// }

export default LoginComponent
