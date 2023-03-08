import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const { default: Page } = require('@/common/layout/page')

const userData = {
  fullName: 'First Second Third',
  emailAddress: 'test@test.com',
  contactNo: '62812340018900',
  profilePicture: 'somePictureURL'
}

export const UserProfileComponent = () => {
  const originalProfile = useRef(userData)
  const [user, setUser] = useState(userData)
  const [save, setSave] = useState(false)

  const inputHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    setUser((prev)=>{
      return {
        ...prev,
        [key]:value
      }
    })
  }
  const updateUserHandler = () => {
    // const newUserData = user
  }

  useEffect(()=>{
    setSave(JSON.stringify(originalProfile.current) !== JSON.stringify(user))
  },[user])

  return (
    <Page>
      <Box sx={{
        flex:'1',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Paper elevation={6} sx={{
          display: 'grid',
          gridTemplateColumns:'1fr auto',
          gap:'10px',
          alignItems:'center',
          padding:'30px',
          borderRadius:'20px',
          backgroundColor:'inherit',
          backdropFilter:'contrast(120%)'
        }}>
          <Typography variant="h5" sx={{ gridColumn:'1/-1' }}>my Profile</Typography>
          <Typography variant="h7">Full Name</Typography>
          <TextField
            id="fullName"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={user.fullName}
            onChange={inputHandler}
          />

          <Typography variant="h7">Email Address</Typography>
          <TextField 
            id="emailAddress"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={user.emailAddress}
            onChange={inputHandler}
          />

          <Typography variant="h7">Contact No</Typography>
          <TextField 
            id="contactNo"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={user.contactNo}
            onChange={inputHandler}
          />
          {save
            ?
            <Button 
              variant="contained" 
              sx={{
                gridColumn:'1/-1', 
                fontWeight:'bold'
              }}
              onClick={updateUserHandler}
            >
                SAVE CHANGE
            </Button>
            :
            <Button variant="contained" disabled sx={{gridColumn:'1/-1', fontWeight:'bold'}}>
                SAVE CHANGE
            </Button>
          }
        </Paper>
      </Box>
    </Page>
  )
}