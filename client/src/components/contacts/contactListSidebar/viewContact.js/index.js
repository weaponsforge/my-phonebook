import { setSyncStore, useSyncGlobalVariable, useSyncStore } from '@/lib/hooks/useSync'
import { Avatar, Box, Button, TextField, Typography } from '@mui/material'


export const ViewContact = ({ type }) => {
  const viewContact = useSyncStore('viewContact')
  if (!viewContact) return
  const editContactHandler = (e) => {
    const fieldID = e.target.id
    const fieldValue = e.target.value
    const updatedValue = {
      ...viewContact,
      [fieldID]: fieldValue
    }
    setSyncStore('viewContact', updatedValue)
  }
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '10px',
        width:'100%',
        height:'auto'
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        width: '100%',
        padding: '30px',
      }}>
        <Avatar sx={{
          width: '50vw',
          maxWidth: '200px',
          maxHeight: '200px',
          height: '50vw',
          justifySelf: 'center',
          gridColumn: '1/-1',
          border: '5px dashed gray'
        }}>
        </Avatar>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          width:'100%'
        }}>
          <Typography variant="h8">
                        First Name :
          </Typography>
          <TextField id="first_name" value={viewContact.first_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          width:'100%'
        }}>
          <Typography variant="h8">
                        Middle Name :
          </Typography>
          <TextField id="middle_name" value={viewContact.middle_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          width:'100%'
        }}>
          <Typography variant="h8">
                        Last Name:
          </Typography>
          <TextField id="last_name" value={viewContact.last_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          width:'100%'
        }}>
          <Typography variant="h8">
                        Contact Number:
          </Typography>
          <TextField id="contact_no" value={viewContact.contact_no} size="small" sx={{ width: '100%' }} onChange={editContactHandler} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          width:'100%'
        }}>
          <Typography variant="h8">
                        Contact Email:
          </Typography>
          <TextField id="contact_email" value={viewContact.contact_email} size="small" sx={{ width: '100%' }} onChange={editContactHandler} />
        </Box>
        <Button variant="contained" fullWidth disabled>Save</Button>
      </Box>
    </Box>
  )
}