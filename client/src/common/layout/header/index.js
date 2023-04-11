
import { authSignOut } from '@/lib/hooks/useInitAuth'
import { setSyncLocalStorage, useSyncLocalStorage } from '@/lib/hooks/useSync'
import { AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Paper, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { updateSyncV, useSyncV } from 'use-sync-v'
import { SearchFieldComponent } from './searchField'

const loggedInSettings = [
  {
    name: 'Profile',
    route: '/profile',
  },
  {
    name: 'Account',
    route: '/',
  },
  {
    name: 'Logout',
    route: '#',
  },
]
const loggedOutSettings = [
  {
    name: 'Register',
    route: 'register',
  },
  {
    name: 'Login',
    route: 'login',
  },
  {
    name: 'Recover Password',
    route: 'recoverPassword',
  },
]

function Header() {
  const router = useRouter()
  const [setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const activeTheme = useSyncLocalStorage('activeTheme')
  const { authUser } = useSyncV('auth')
  const isMobile = useMediaQuery('(max-width:900px)')
  const [showSearch, setShowSearch] = useState(false)

  class eventsHandler {
    static themeHandler = () => {
      setSyncLocalStorage(
        'activeTheme',
        activeTheme === 'dark' ? 'light' : 'dark'
      )
    }
    static handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget)
    }
    static handleOpenUserMenu = (e) => {
      setAnchorElUser(e.currentTarget)
    }
    static handleCloseNavMenu = () => {
      setAnchorElNav(null)
    }
    static handleCloseUserMenu = () => {
      setAnchorElUser(null)
    }
    static handleClickNavMenu = (route) => {
      router.push(route)
    }
  }
  const {
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleClickNavMenu,
  } = eventsHandler

  const showSearchHandler = () => {
    setShowSearch((p) => !p)
  }

  const toggleSidebar = () => {
    updateSyncV('show.sidebar', (p) => !p)
  }

  return (
    <Paper
      elevation={1}
      sx={{
        position: 'relative',
        zIndex: 100,
        background: 'inherit',
        backdropFilter: 'blur(5px)',
        padding: '10px',
        pt: '10px',
        pb: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        borderRadius:0
      }}
    >
      {authUser && isMobile && (
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      )}
      <Box
        sx={{
          display: 'flex',
          flex: '1',
          justifyContent: 'right',
        }}
      >
        {!showSearch && router.route === '/contacts' && (
          <SearchFieldComponent />
        )}
        {router.route === '/contacts' && (
          <IconButton
            sx={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={showSearchHandler}
          >
            {activeTheme === 'dark' && (
              <SearchIcon
                style={{
                  filter:
                    'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)',
                }}
              />
            )}
            {activeTheme === 'light' && <SearchIcon />}
          </IconButton>
        )}
      </Box>
      {authUser && (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {loggedInSettings.map((setting, id) => {
              return setting.name === 'Logout' ? (
                <MenuItem key={id} onClick={() => authSignOut()}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ) : (
                <MenuItem
                  key={id}
                  onClick={() => handleClickNavMenu(setting.route)}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              )
            })}
          </Menu>
        </>
      )}
      {!authUser && (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {loggedOutSettings.map((setting, id) => {
              return (
                <MenuItem
                  key={id}
                  onClick={() => handleClickNavMenu(setting.route)}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              )
            })}
          </Menu>
        </>
      )}
    </Paper>
  )
}
export default Header
