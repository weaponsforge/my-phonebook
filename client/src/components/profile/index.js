import Page from '@/common/layout/page'
import { LoadingLinear } from '@/common/ui/loadingLinear'
import { useAuth } from '@/lib/hooks/useAuth'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { updateAsyncV, useAsyncV } from 'use-sync-v'

export const ProfileComponent = () => {
  const user_uid = useAuth()?.authUser?.uid
  const { data, loading } = useAsyncV('user')
  const [form, setForm] = useState()
  const [isProfileChanged, setIsProfileChanged] = useState(false)

  useEffect(() => {
    if (!user_uid) return
    FirebaseFirestore.subscribeDoc(`users/${user_uid}`, async (snapshot) => {
      const snapshotData = snapshot.data()
      updateAsyncV('user', snapshotData )
      setForm(snapshotData)
    })
  }, [user_uid])

  const inputHandler = (e) => {
    const formKey = e.target.id
    const formValue = e.target.value

    setForm((p) => ({
      ...p,
      [formKey]: formValue,
    }))

    // check change
    if (JSON.stringify(form) === JSON.stringify(data)){
      setIsProfileChanged(false)
    } else {
      setIsProfileChanged(true)
    }
  }

  const profilePictureHandler = () => {}

  const updateUserHandler = () => {
    FirebaseFirestore.updateDoc(`users/${user_uid}`, form)
    setIsProfileChanged(false)
  }
  return (
    <Page>
      {loading && <LoadingLinear />}
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={6}
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
            my Profile
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
            value={form?.last_name ??''}
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
            value={form?.phone_number ??''}
            onChange={inputHandler}
          />
          {isProfileChanged ? (
            <Button
              variant="contained"
              sx={{
                gridColumn: '1/-1',
                fontWeight: 'bold',
              }}
              onClick={updateUserHandler}
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

ProfileComponent.propTypes = {
  state: PropTypes.object,
  eventsHandler: PropTypes.func,
}
