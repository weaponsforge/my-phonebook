import { Avatar, Paper, Typography, useTheme } from "@mui/material"
import { useState } from "react"

export const ContactCard = ({ contact }) => {
    const theme = useTheme()

    const backgroundColorGenerator = (name) => {
        let value = 0
        for (let i = 0; i < name.length; i++) {
            value = value + name.charCodeAt(i)
        }
        value = value % 255
        return value
    }

    const getInitial = (first, second, last) => {
        const firstInitial = (first.match(new RegExp(
            String.raw`(?<firstNameInitial>^[a-z])`, 'i')) ?? [''])[0]
        const middleInitial = (second.match(new RegExp(
            String.raw`(?<middleNameInitial>^[a-z])`, 'i')) ?? [''])[0]
        const lastInitial = (second.match(new RegExp(
            String.raw`(?<lastNameInitial>^[a-z])`, 'i')) ?? [''])[0]
        return `${firstInitial}${middleInitial}${lastInitial}`
    }

    const initial = getInitial(contact.first_name, contact.middle_name, contact.last_name).toUpperCase()

    const backgroundColor = backgroundColorGenerator(initial)
    return (
        <Paper elevation={3} sx={{
            backgroundColor: 'inherit',
            backdropFilter: 'blur(2px)',
            display: 'grid',
            gridTemplateColumns: '1fr 6fr',
            gridAutoRows: '1fr',
            padding: '15px',
            gap: '15px',
            alignItems: 'center',
            borderRadius: '10px',
            width: 'auto',
            '&:hover': {
                backdropFilter: 'contrast(120%)'
            }
        }}>
            <Avatar
                sx={{
                    backgroundColor: `hsla(${backgroundColor},50%,80%,50%)`,
                }}
            >
                {initial}
            </Avatar>

            <Typography
                variant="h6"
                sx={{
                    color: theme.palette.primary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}
            >
                {contact.first_name} {contact.middle_name} {contact.last_name}
            </Typography>
        </Paper>
    )
}