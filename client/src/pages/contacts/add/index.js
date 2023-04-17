import ProtectedPage from '@/common/auth/protectedpage'
import Page from '@/common/layout/page'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import { Avatar, Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useSyncV } from 'use-sync-v'
const initialState = {
  sorting: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email_address: '',
  profile_picture_url: '',
}

const Add = () => {
  const { authUser } = useSyncV('auth')
  const [form, setForm] = useState(initialState)
  const [isFormChanged, setIsFormChanged] = useState(false)

  const inputHandler = (e) => {
    const fieldID = e.target.id
    const fieldValue = e.target.value
    const updatedValue = {
      ...form,
      [fieldID]: fieldValue,
    }
    setForm(updatedValue)
    if (JSON.stringify(updatedValue) === JSON.stringify(initialState)) {
      setIsFormChanged(false)
    } else {
      setIsFormChanged(true)
    }
  }

  const saveHandler = () => {
    const createdContact = {
      ...form,
      sorting:
        `${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase(),
    }

    FirebaseFirestore.createDoc(
      `users/${authUser.uid}/contacts/`,
      createdContact
    )
    setForm(initialState)
  }

  const profilePictureHandler = () => {}
  return (
    <Page>
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <Paper
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '10px',
            alignItems: 'center',
            padding: '30px',
            borderRadius: '20px',
            backgroundColor: 'inherit',
            backdropFilter: 'contrast(120%)',
          }}
        >
          <Typography variant="h5" sx={{ gridColumn: '1/-1' }}>
            add Contact
          </Typography>
          <Box
            sx={{
              aspectRatio: '1',
              gridColumn: '1/-1',
              position: 'relative',
            }}
          >
            <Avatar
              src={form?.profile_picture_url}
              alt="profile_picture_url"
              sx={{
                width: '100%',
                height: '100%',
              }}
              onClick={profilePictureHandler}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{ position: 'absolute', bottom: '0', right: '0' }}
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCameraIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
          <Typography variant="h7">First Name</Typography>
          <TextField
            id="first_name"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={form?.first_name ?? ''}
            onChange={inputHandler}
          />
          <Typography variant="h7">Middle Name</Typography>
          <TextField
            id="middle_name"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={form?.middle_name ?? ''}
            onChange={inputHandler}
          />
          <Typography variant="h7">Last Name</Typography>
          <TextField
            id="last_name"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={form?.last_name ?? ''}
            onChange={inputHandler}
          />

          <Typography variant="h7">Email Address</Typography>
          <TextField
            id="email_address"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={form?.email_address ?? ''}
            onChange={inputHandler}
          />

          <Typography variant="h7">Phone Number</Typography>
          <TextField
            id="phone_number"
            size="small"
            inputProps={{
              style: {
                height: '20px',
              },
            }}
            value={form?.phone_number ?? ''}
            onChange={inputHandler}
          />
          {isFormChanged ? (
            <Button
              variant="contained"
              sx={{
                gridColumn: '1/-1',
                fontWeight: 'bold',
              }}
              onClick={saveHandler}
            >
              SAVE CHANGE
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled
              sx={{ gridColumn: '1/-1', fontWeight: 'bold' }}
            >
              SAVE CHANGE
            </Button>
          )}
        </Paper>
      </Box>
    </Page>
  )
}

export default ProtectedPage(Add)
