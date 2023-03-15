import { Avatar, Paper, Typography } from "@mui/material"
import { useState } from "react"


export const ContactCard = ({ contact }) => {
    return (
        <Paper elevation={3} sx={{
            backgroundColor:'hsla(0,100%,100%,0%)',
            display:'grid',
            maxWidth:'300px',
            gridTemplateColumns:'1fr 4fr'
        }}>
            <Avatar/>
            <Typography>{contact.first_name}</Typography>
        </Paper>
    )
}