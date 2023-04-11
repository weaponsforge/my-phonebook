import ProtectedPage from '@/common/auth/protectedpage'
import Page from '@/common/layout/page'
import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useSyncV } from 'use-sync-v'

const initialState = {
  sorting:'',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email_address: '',
  profile_picture_url: '',
}

const Add = () => {
  const {authUser} = useSyncV('auth')

  const [form, setForm] = useState(initialState)
  const [isFormChanged, setIsFormChanged] = useState(false)

  const editContactHandler = (e) => {
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
      sorting:`${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase()
    }

    FirebaseFirestore.createDoc(`users/${authUser.uid}/contacts/`, createdContact)
    setForm(initialState)
  }

  return (
    <Page>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          height: 'auto',
          padding:'20px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" sx={{ alignSelf: 'start' }}>
            Add Contact
          </Typography>
          <Avatar
            sx={{
              width: '50vw',
              maxWidth: '200px',
              maxHeight: '200px',
              height: '50vw',
              justifySelf: 'center',
              gridColumn: '1/-1',
              border: '5px dashed gray',
              margin: '10px',
              src: `${form?.profile_picture_url}`,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h8">First Name :</Typography>
            <TextField
              id="first_name"
              value={form.first_name}
              size="small"
              sx={{ width: '100%' }}
              onChange={editContactHandler}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h8">Middle Name :</Typography>
            <TextField
              id="middle_name"
              value={form.middle_name}
              size="small"
              sx={{ width: '100%' }}
              onChange={editContactHandler}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h8">Last Name:</Typography>
            <TextField
              id="last_name"
              value={form.last_name}
              size="small"
              sx={{ width: '100%' }}
              onChange={editContactHandler}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h8">Phone Number:</Typography>
            <TextField
              id="phone_number"
              value={form.phone_number}
              size="small"
              sx={{ width: '100%' }}
              onChange={editContactHandler}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
            }}
          >
            <Typography variant="h8">Email Address:</Typography>
            <TextField
              id="email_address"
              value={form.email_address}
              size="small"
              sx={{ width: '100%' }}
              onChange={editContactHandler}
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            disabled={!isFormChanged}
            onClick={saveHandler}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Page>
  )
}

export default ProtectedPage(Add)
