import Page from '@/common/layout/page'
import { getRandomJoke } from '@/lib/services/random'
import { Validate } from '@/lib/utils/textValidation'
import { Button, Paper, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { useTheme } from '@emotion/react'

const RecoverPasswordComponent = () => {
  const theme = useTheme()
  const [username, setUsername] = useState({ error:true, helperText:' ',value:'', color:'text' })
  const [joke, setJoke] = useState()
  useEffect(()=>{
    (async()=>{
      const randomJoke = await getRandomJoke()
      setJoke(randomJoke)
    })()
  },[])
  const usernameHandler = (e) => {
    const {helperText, error, color} = Validate.email(e.target.value)
    const newUsername = {
      ...username,
      value: e.target.value,
      error,
      helperText,
      color
    }
    setUsername(newUsername)
  }
  const recoverPasswordHandler = () => {
    // to integrate with API route
  }
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
        <Typography variant="h8" component="h3" gutterBottom sx={{
          color:theme.palette.text.disabled, 
          textAlign: 'center', 
          paddingLeft: '20px',
          paddingRight:'20px', 
          width: '50vw' }}>
            `{joke && joke.joke}`
        </Typography>
        <Paper elevation={0} sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 20px',
          gridTemplateAreas:
              `"username icon1"
              "recoverPassword ."`,
          alignItems:'stretch',
          gap: '10px',
          minWidth: '300px',
          width: '500px',
          borderRadius: '30px',
          padding: '40px',
          background: 'inherit',
        }}>
          <TextField
            label="Username (email)"
            id="username"
            size="small"
            type="text"
            fullwidth="true"
            required={true}
            color={username.color}
            helperText={username.helperText}
            value={username.value}
            error={username.error}
            onChange={usernameHandler}
            sx={{ gridArea:'username'}}
          />
          {!username.error &&
              <CheckIcon fontSize="large" color="success" sx={{ gridArea:'icon1' }}/>
          }
          <Button 
            variant="contained" 
            sx={{
              fontWeight:'bold',
              color:theme.palette.primary.contrastText,
              gridArea: 'recoverPassword',
            }}
            onClick={recoverPasswordHandler}
          >
              RECOVER PASSWORD
          </Button>
        </Paper>
      </Paper>
    </Page>
  )
}

export default RecoverPasswordComponent