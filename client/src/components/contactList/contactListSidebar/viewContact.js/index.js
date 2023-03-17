import { useSyncGlobalVariable } from "@/lib/hooks/useSync"
import { Avatar, Box, Button, TextField, Typography } from "@mui/material"
import { useRef, useState } from "react"

export const ViewContact = () => {
    const [viewContact, setViewContact] = useSyncGlobalVariable('viewContact')
    const [state, setState] = useState({isUpdated:false})

    const focusElement = useRef()
    if (!viewContact) {
        return
    }

    focusElement?.current?.scrollIntoView({ behaviour: 'smooth' })

    const editContactHandler = (e) => {
        const fieldID = e.target.id
        const fieldValue = e.target.value
        setViewContact({
            ...viewContact,
            [fieldID]:fieldValue
        })
    }
    return (
        <Box ref={focusElement}
            sx={{
                display: 'grid',
                gap: '10px',
            }}
        >
            {/* this will show a profile if either only 1 result appear after search, or if user click a profile on the right */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                maxWidth: '100%',
                border: '1px solid black',
                padding: '20px',


            }}>
                <Avatar sx={{
                    width: '50vw',
                    maxWidth: '200px',
                    maxHeight: '200px',
                    height: '50vw',
                    justifySelf: 'center',
                    gridColumn: '1/-1',
                    border: '1px dashed grey'
                }}>
                </Avatar>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography variant="h8">
                        First Name :
                    </Typography>
                    <TextField id="first_name" value={viewContact.first_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography variant="h8">
                        Middle Name :
                    </Typography>
                    <TextField id="middle_name" value={viewContact.middle_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography variant="h8">
                        Last Name:
                    </Typography>
                    <TextField id="last_name" value={viewContact.last_name} size="small" sx={{ width: '100%' }} onChange={editContactHandler}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography variant="h8">
                        Contact Number:
                    </Typography>
                    <TextField id="contact_no" value={viewContact.contact_no} size="small" sx={{ width: '100%' }} onChange={editContactHandler}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography variant="h8">
                        Contact Email:
                    </Typography>
                    <TextField id="contact_email" value={viewContact.contact_email} size="small" sx={{ width: '100%' }} onChange={editContactHandler}/>
                </Box>
                <Button variant="contained" fullWidth disabled={!state.isUpdated}>Save</Button>
            </Box>
        </Box>
    )
}