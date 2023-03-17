import { useSyncGlobalVariable } from "@/lib/hooks/useSync"
import { Avatar, Box, TextField, Typography } from "@mui/material"
import { useRef } from "react"

export const ViewContact = () => {
    const [viewContact, setViewContact] = useSyncGlobalVariable('viewContact')
    const focusElement = useRef()
    if (!viewContact) {
        return
    }
    
    focusElement?.current?.scrollIntoView({behaviour:'smooth'})
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
                    <Typography variant="h8" sx={{}}>
                        First Name :
                    </Typography>
                    <TextField value={viewContact.first_name} size="small" sx={{ width: '100%' }} />

                </Box>
                <Typography variant="h8">
                    Middle Name :
                </Typography>
                <TextField value={viewContact.middle_name} size="small" />
                <Typography variant="h8">
                    Last Name:
                </Typography>
                <TextField value={viewContact.last_name} size="small" />
                <Typography variant="h8">
                    Contact Number:
                </Typography>
                <TextField value={viewContact.contact_no} size="small" />
                <Typography variant="h8">
                    Contact Email:
                </Typography>
                <TextField value={viewContact.contact_email} size="small" />
            </Box>
        </Box>
    )
}