import { setSyncLocalStorage, useSyncLocalStorage } from '@/lib/hooks/useSync'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import PauseIcon from '@mui/icons-material/Pause'
import PersonIcon from '@mui/icons-material/Person'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PrintIcon from '@mui/icons-material/Print'
import SettingsIcon from '@mui/icons-material/Settings'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Slide,
} from '@mui/material'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { updateSyncV } from 'use-sync-v'

export const Sidebar = () => {
  const router = useRouter()
  const activeTheme = useSyncLocalStorage('activeTheme')
  const animate = useSyncLocalStorage('animate')

  const animateHandler = () => {
    setSyncLocalStorage('animate', animate ? false : true)
    updateSyncV('show.sidebar', false)
  }

  const themeHandler = () => {
    setSyncLocalStorage(
      'activeTheme',
      activeTheme === 'dark' ? 'light' : 'dark'
    )
    updateSyncV('show.sidebar', false)
  }

  const contactsHandler = () => {
    router.push('/contacts')
    updateSyncV('show.sidebar', false)
  }

  const addContactHandler = () => {
    router.push('/contacts/add')
    updateSyncV('show.sidebar', false)
  }

  const settingsHandler = () => {
    router.push('/settings')
    updateSyncV('show.sidebar', false)
  }

  const showExportPopup = () => {
    updateSyncV('show.exportPopup', true)
  }
  return (
    <Box>
      <Slide
        direction="right"
        mountOnEnter
        unmountOnExit
        timeout={500}
        in={true}
      >
        <Paper
          elevation={0}
          sx={{
            width: '200px',
            zIndex: 50,
            height: '100%',
            background: 'inherit',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <List
            sx={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ListItem disablePadding>
              <ListItemButton onClick={contactsHandler}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={addContactHandler}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Upload" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={showExportPopup}>
                <ListItemIcon>
                  <CloudDownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Download" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disabled>
                <ListItemIcon>
                  <PrintIcon />
                </ListItemIcon>
                <ListItemText primary="Print" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={animateHandler}>
                <ListItemIcon>
                  {!animate && <PlayArrowIcon />}
                  {animate && <PauseIcon />}
                </ListItemIcon>
                <ListItemText primary="Animate" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={themeHandler}>
                <ListItemIcon>
                  {activeTheme === 'dark' ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Theme" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={settingsHandler}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem
              sx={{
                flex: '1',
              }}
            ></ListItem>
            <ListItem>
              <ListItemText primary="myPhonebook@2023" />
            </ListItem>
          </List>
        </Paper>
      </Slide>
    </Box>
  )
}
