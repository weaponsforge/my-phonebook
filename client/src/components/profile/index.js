import Page from '@/common/layout/page'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import { Avatar, Box, Button, Paper, TextField, Typography, IconButton } from '@mui/material'
import PropTypes from 'prop-types'

export const ProfileComponent = ({state, eventsHandler}) => {
  const {inputHandler, profilePictureHandler, updateUserHandler} = eventsHandler
  
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
          <Box
            sx={{
              aspectRatio:'1',
              gridColumn:'1/-1',
              position:'relative',
            }}
          >
            <Avatar
              src={state.user.profilePicture}
              alt="profilePicture"
              sx={{
                width:'100%',
                height:'100%'
              }}
              onClick={profilePictureHandler}
            />
            <IconButton color="primary" aria-label="upload picture" component="label" sx={{position:'absolute', bottom:'0', right:'0'}}>
              <input hidden accept="image/*" type="file" />
              <PhotoCameraIcon sx={{ color: 'black'}}/>
            </IconButton>
          </Box>
          <Typography variant="h7">Full Name</Typography>
          <TextField
            id="fullName"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={state.user.fullName}
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
            value={state.user.emailAddress}
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
            value={state.user.contactNo}
            onChange={inputHandler}
          />
          {state.profileChanged
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

ProfileComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func
}