import { useMemo } from 'react'

import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { uploadFileToStorage } from '@/lib/utils/firebase/storageutils'
import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'

import ProtectedPage from '@/common/auth/protectedpage'
import Page from '@/common/layout/page'
import FileUploadButton from '@/common/ui/fileuploadbutton'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'

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

const CONTACT_PHOTO_ID = 'picturefile'

const Add = () => {
  const [form, setForm] = useState(initialState)
  const [errorUpload, setErrorUpload] = useState(null)
  const [isFormChanged, setIsFormChanged] = useState(false)
  const { authUser } = useSyncV('auth')
  const photoFile = useSyncV(CONTACT_PHOTO_ID)

  const photoPictureSrc = useMemo(() => {
    if (!photoFile) {
      return ''
    } else {
      return photoFile?.imgSrc ?? ''
    }
  }, [photoFile])

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

  const saveHandler = async () => {
    const docPath = `users/${authUser.uid}/contacts/`
    const docId = FirebaseFirestore.generateDocId(docPath)

    const createdContact = {
      ...form,
      id: docId,
      sorting:
        `${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase(),
    }

    if (photoFile) {
      try {
        createdContact.profile_picture_url = await uploadFileToStorage(
          `photos/${authUser.uid}`,
          photoFile.file,
          `photo_${docId}`
        )
      } catch (err) {
        setErrorUpload(err?.response?.data ?? err.message)
        return
      }
    }

    FirebaseFirestore.createDoc(
      `users/${authUser.uid}/contacts/${docId}`,
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
              src={photoPictureSrc}
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

            <FileUploadButton
              fileDomID={CONTACT_PHOTO_ID}
              styles={{position: 'absolute', bottom: '0', right: '0'}}
              errorCallback={(error) => setErrorUpload(error)}
            />
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

      {errorUpload &&
        <SimpleSnackbar
          message={errorUpload}
          closeHandler={() => setErrorUpload(null)}
        />
      }
    </Page>
  )
}

export default ProtectedPage(Add)
