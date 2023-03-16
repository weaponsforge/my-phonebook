import { Avatar, Box, Paper, Typography } from "@mui/material"
import { useState } from "react"
import { ContactCard } from "./contactCard"


export const ContactCardsContainer = ({ content }) => {
    const { group, contacts } = content
    return (
        <Box>
            <Typography variant="h4">{group === 'misc' ? '' : group}</Typography>
            <Box sx={{
                backgroundColor: 'inherit',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                alignItems: 'start',
                gap: '15px',
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