import { ContactCard } from '@/common/contactsCardContainer/contactCard'
import { useSyncGlobalVariable } from '@/lib/hooks/useSync'
import { Avatar, Box, Paper, Typography } from '@mui/material'
import { useState } from 'react'

const groupNameMapping = {
    first_name: 'Matching First Name',
    middle_name: 'Matching Middle Name',
    last_name: 'Matching Last Name',
    contact_no: 'Matching Contact Number',
    contact_email: 'Matching Contact Email'
}

export const SearchResultsGroup = ({ content }) => {
    const { group, contacts } = content
    if (!groupNameMapping[group]) {
        return
    }
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                padding: '20px',
                borderBottom: '1px dashed grey',
                
            }}
        >
            <Typography variant="h5"
                sx={{
                }}
            >
                {groupNameMapping[group]}
            </Typography>
            <Box sx={{
                backgroundColor: 'inherit',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                alignItems: 'start',
                gap: '10px',
                flex: '1',
            }}>
                {contacts.map((el, index) => {
                    return (
                        <ContactCard key={index} contact={el} />
                    )
                })}
            </Box>
        </Box>
    )
}