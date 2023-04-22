import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { updateSyncV, useAsyncV, useSyncV } from 'use-sync-v'

import { FirebaseFirestore } from '@/lib/utils/firebase/firestore'
import { uploadFileToStorage, deleteFileFromStorage } from '@/lib/utils/firebase/storageutils'
import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'

import ProtectedPage from '@/common/auth/protectedpage'
import Page from '@/common/layout/page'
import FileUploadButton from '@/common/ui/fileuploadbutton'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'

const initialState = {
  sorting:'',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  email_address: '',
  profile_picture_url: '',
}

const CONTACT_PHOTO_ID = 'picturefile'

const EditContact = () => {
  const router = useRouter()
  const { doc_id } = router.query
  const { authUser } = useSyncV('auth')
  const contacts = useAsyncV('contacts')
  const photoFile = useSyncV(CONTACT_PHOTO_ID)
  const editedContact = contacts.data.filter((el) => el.doc_id === doc_id)[0]
  const [form, setForm] = useState(editedContact ?? initialState)
  const [initialPhotoCleared, setInitialPhotoCleared] = useState(false)

  const [isFormChanged, setIsFormChanged] = useState(false)
  const [errorUpload, setErrorUpload] = useState(null)

  const photoPictureSrc = useMemo(() => {
    return (!initialPhotoCleared)
      ? editedContact?.profile_picture_url ?? ''
      : photoFile?.imgSrc ?? ''
  }, [photoFile, editedContact, initialPhotoCleared])

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
  const saveHandler = async () => {
    const createdContact = {
      ...form,
      sorting:
        `${form.first_name}${form.middle_name}${form.last_name}`.toUpperCase(),
    }

    if (photoFile) {
      try {
        createdContact.profile_picture_url = await uploadFileToStorage(
          `photos/${authUser.uid}`,
          photoFile.file,
          `photo_${doc_id}`
        )
      } catch (err) {
        setErrorUpload(err?.response?.data ?? err.message)
        return
      }
    }

    FirebaseFirestore.updateDoc(
      `users/${authUser.uid}/contacts/${doc_id}`,
      createdContact
    )
    router.push('/contacts')
  }
  const profilePictureHandler = () => {

  }
  const deleteHandler = async () => {
    try {
      await Promise.all([
        FirebaseFirestore.deleteDoc(`users/${authUser.uid}/contacts/${doc_id}`),
        deleteFileFromStorage({
          pathToStorageDirectory: `photos/${authUser.uid}`,
          fileName: `photo_${doc_id}`,
          allowMissingError: true
        })
      ])

      setForm(initialState)
      router.push('/contacts')
    } catch (err) {
      setErrorUpload(err?.response?.data ?? err.message)
    }
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
              clearFileCallback={() => {
                if (!initialPhotoCleared) {
                  setInitialPhotoCleared(true)
                }
              }}
              hasFile={(photoPictureSrc !== '')}
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

      {errorUpload &&
        <SimpleSnackbar
          message={errorUpload}
          closeHandler={() => setErrorUpload(null)}
        />
      }
    </Page>
  )
}

export default ProtectedPage(EditContact)
