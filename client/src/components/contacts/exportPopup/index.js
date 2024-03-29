import { useEffect, useMemo } from 'react'
import { useTheme } from '@emotion/react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { readSyncV, updateSyncV, updateAsyncV, useAsyncV } from 'use-sync-v'
import { exportContacts } from '@/lib/services/contacts'
import SimpleSnackbar from '@/common/snackbars/simpleSnackbar'
import CircularProgress from '@mui/material/CircularProgress'

export const ExportPopup = () => {
  const theme = useTheme()
  const [exportAs, setExportAs] = useState('csv')
  const [exportSource, setExportSource] = useState('all_contacts')
  const { data: response, loading, error } = useAsyncV('exportfile')

  const file = useMemo(() => {
    return (!loading && response && error === false)
      ? response
      : null
  }, [loading, response, error])

  useEffect(() => {
    if (file) {
      const fileType = file.headers['content-type']
      const blob = new Blob([file.data], { type: fileType })

      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.setAttribute('download', decodeURI('contacts'))

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [file])

  const exportContactsHandler = async () => {
    const params = { type: exportAs }

    if (exportSource === 'search_results') {
      params.ids = readSyncV('data.searchResults')?.sorting?.map(item => item.doc_id) ?? []
    }

    updateAsyncV('exportfile', async () => exportContacts(params))
  }

  const cancelExportHandler = () => {
    updateSyncV('show.exportPopup', false)
    updateSyncV('exportfile')
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
        background: 'inherit',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(e) => {
        if (e.target.id !== 'popupBackground') return
        cancelExportHandler()
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: '30px',
          borderRadius: '20px',
          zIndex: '200',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'hsla(10,100%,100%,50%)',
          maxWidth: '320px',
          gap: '10px',
        }}
      >
        <Typography>Export contacts</Typography>
        <FormControl disabled={loading} >
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
        <FormControl disabled={loading}>
          <Typography>Export as</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="google_csv"
            name="radio-buttons-group"
            onChange={handleExportAsChange}
            value={exportAs}
          >
            <FormControlLabel
              value="csv"
              control={<Radio />}
              label="CSV File"
            />
            <FormControlLabel
              value="pdf"
              control={<Radio />}
              label="PDF File"
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
            disabled={loading}
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 'bold',
              minWidth: '77px'
            }}
            onClick={cancelExportHandler}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            disabled={loading}
            sx={{
              color: theme.palette.primary.dark,
              fontWeight: 'bold',
              minWidth: '77px'
            }}
            onClick={exportContactsHandler}
          >
            {(loading)
              ? <CircularProgress size={24} />
              : <span>Export</span>
            }
          </Button>
        </Box>
      </Paper>

      {(typeof error !== 'boolean' && error?.message !== '') &&
        <SimpleSnackbar
          message={error?.message}
        />
      }
    </Box>
  )
}
