import ProtectedPage from '@/common/auth/protectedpage'
import Page from '@/common/layout/page'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { Avatar, Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'
const initialState = {
  sorting:'',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email_address: '',
  profile_picture_url: '',
}

const EditContact = () => {
  const router = useRouter()
  const { doc_id } = router.query
  const { authUser } = useSyncV('auth')
  const contacts = useAsyncV('contacts')
  const editedContact = contacts.data.filter((el) => el.doc_id === doc_id)[0]
  const [form, setForm] = useState(editedContact ?? initialState)

  const [isFormChanged, setIsFormChanged] = useState(false)

  useEffect(()=>{
    setForm(editedContact)
  },[editedContact])

  const inputHandler = (e) => {
    const fieldID = e.target.id
    const fieldValue = e.target.value
    const updatedValue = {
      ...form,
      [fieldID]: fieldValue,
    }
    setForm(updatedValue)
    if (JSON.stringify(updatedValue) === JSON.stringify(editedContact)) {
      setIsFormChanged(false)
    } else {
      setIsFormChanged(true)
    }
  }
  updateSyncV('contacts.loading', true)
  const saveHandler = () => {
    const createdContact = {
      ...form,
      sorting:
        `${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase(),
    }
    FirebaseFirestore.updateDoc(
      `users/${authUser.uid}/contacts/${doc_id}`,
      createdContact
    )
    router.push('/contacts')
  }
  const profilePictureHandler = () => {

  }
  const deleteHandler = () => {
    FirebaseFirestore.deleteDoc(`users/${authUser.uid}/contacts/${doc_id}`)
    setForm(initialState)
    router.push('/contacts')
  }
  return (
    <Page>
      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth:'100%'
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
            edit Contact
          </Typography>
          <Box
            sx={{
              aspectRatio: '1',
              gridColumn: '1/-1',
              position: 'relative'
            }}
          >
            <Avatar
              src={form?.profile_picture_url}
              alt="profile_picture_url"
              sx={(theme) => ({
                width: '342px',
                height: '342px',
                [theme.breakpoints.down('400')]: {
                  width: '100%',
                  height: '100%'
                },
              })}
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
          <Button
            variant="contained"
            fullWidth
            onClick={deleteHandler}
            sx={{
              gridColumn: '1/-1', fontWeight: 'bold'
            }}
          >
            Delete
          </Button>
        </Paper>
      </Box>
    </Page>
  )
}

export default ProtectedPage(EditContact)
