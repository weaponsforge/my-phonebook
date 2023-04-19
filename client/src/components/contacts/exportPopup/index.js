import { useTheme } from '@emotion/react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { readSyncV, updateSyncV } from 'use-sync-v'

export const ExportPopup = () => {
  const theme = useTheme()
  const [exportAs, setExportAs] = useState('google_csv')
  const [exportSource, setExportSource] = useState('all_contacts')

  const exportContactsHandler = () => {
    const exportPreferences = {
      exportAs,
      exportData: (() => {
        switch (exportSource) {
        case 'all_contacts':
          return readSyncV('contacts.data')
        case 'search_results':
          return readSyncV('data.searchResults')
        }
      })(),
    }
    exportPreferences.exportAs
  }

  const cancelExportHandler = () => {
    updateSyncV('show.exportPopup', false)
  }

  const handleExportAsChange = (e) => {
    setExportAs(e.target.value)
  }
  const handleExportSourceChange = (e) => {
    setExportSource(e.target.value)
  }
  return (
    <Box
      id="popupBackground"
      sx={{
        position: 'fixed',
        zIndex: '100',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'hsla(100, 100%,100%,50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(e) => {
        if (e.target.id !== 'popupBackground') return
        cancelExportHandler()
      }}
    >
      <Box
        sx={{
          padding: '30px',
          borderRadius: '20px',
          zIndex: '200',
          backgroundColor: theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          gap: '10px',
        }}
      >
        <Typography>Export contacts</Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="google_csv"
            name="radio-buttons-group"
            onChange={handleExportSourceChange}
            value={exportSource}
          >
            <FormControlLabel
              value="all_contacts"
              control={<Radio />}
              label="All contacts"
            />
            <FormControlLabel
              value="search_results"
              control={<Radio />}
              label="Search results"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <Typography
            sx={{
              color: theme.palette.primary.dark,
            }}
          >
            Export as
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="google_csv"
            name="radio-buttons-group"
            onChange={handleExportAsChange}
            value={exportAs}
          >
            <FormControlLabel
              value="google_csv"
              control={<Radio />}
              label="Google CSV"
            />
            <FormControlLabel
              value="outlook_csv"
              control={<Radio />}
              label="Outlook CSV"
            />
            <FormControlLabel
              value="v_card"
              control={<Radio />}
              label="vCard (for iOS contacts)"
            />
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="text"
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 'bold',
            }}
            onClick={cancelExportHandler}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 'bold',
            }}
            onClick={exportContactsHandler}
          >
            Export
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
