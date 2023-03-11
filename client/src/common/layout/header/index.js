// REACT
import { useState } from 'react'

// NEXT
import Link from 'next/link'

// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import LoginIcon from '@mui/icons-material/Login'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import HowToRegIcon from '@mui/icons-material/HowToReg'

// LIB
import { Avalon } from '@/lib/mui/theme'
import { useGlobalState } from '@/lib/hooks/useGlobalState'

// VARIABLES
const pages = ['about']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
  // HOOKS
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [isLoggedIn] = useState(false)
  const [globalState, setGlobalState] = useGlobalState()


  class eventsHandler {
    static themeHandler = () => {
      setGlobalState({
        ...globalState,
        activeTheme:globalState.activeTheme === 'dark' ? 'light' : 'dark'
      })
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
  }
  const {themeHandler, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu} = eventsHandler

  return (
    <AppBar elevation={10} sx={{
      position:'sticky',
      top: 0,
      zIndex: 100,
      background: 'inherit',
      backdropFilter: 'blur(5px)',
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Link href='/' style={{ textDecoration: 'none', display: 'flex' }}>
            <Typography
              className={Avalon.className}
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                textDecoration: 'none',
                color: (theme)=>theme.palette.text.primary,
              }}
            >
              myPhonebook
            </Typography>
          </Link>

          <Box sx={{  display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href='/' style={{ textDecoration: 'none', display: 'flex', flex:1, justifyContent:'center' }}>
            <Typography
              className={Avalon.className}
              variant="h5"
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                textDecoration: 'none',
                marginTop: '5px',
                color: (theme)=>theme.palette.text.primary,
              }}
            >
              myPhonebook
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} href={`/${page}`} style={{ textDecoration:'none'}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color:(theme)=>theme.palette.text.primary, display: 'block', fontWeight: 'bold' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {isLoggedIn 
            ?
            <Box sx={{ flex: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* will use google profile picture from firebase ? */}
                  <Avatar alt="avatarPicture" src="/static/images/avatar/2.jpg" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            :
            <Box sx={{
              display: 'flex',
            }}>
              <Link href='/login' style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ 
                    my: 2,
                    color: 'black',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Typography variant="h8" sx={{ fontWeight: 'bold', color: (theme)=>theme.palette.text.primary, }}>
                    Login
                  </Typography>
                </Button>
              </Link>
              <Link href='/register' style={{ textDecoration: 'none' }}>
                <Button
                  sx={{ 
                    my: 2,
                    color: 'black',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Typography variant="h8" sx={{ fontWeight: 'bold', color: (theme)=>theme.palette.text.primary, }}>
                    Register
                  </Typography>
                </Button>
              </Link>
            </Box>
          }
          <Link href='/login' style={{ textDecoration: 'none' }}>
            <IconButton
              sx={{ 
                color: 'black',
                display: { xs: 'flex', md: 'none' },
                justifyContent:'center',
                alignItems:'center',
              }}
            >
              {globalState.activeTheme === 'dark'
                ?
                <LoginIcon style={{
                  filter: 'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)'
                }}/>
                :
                <LoginIcon/>
              }
            </IconButton>
          </Link>
          <Link href='/register' style={{ textDecoration: 'none' }}>
            <IconButton
              sx={{ 
                color: 'black',
                display: { xs: 'flex', md: 'none' },
                justifyContent:'center',
                alignItems:'center',
              }}
            >
              {globalState.activeTheme === 'dark'
                ?
                <HowToRegIcon style={{
                  filter: 'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)',
                }}/>
                :
                <HowToRegIcon />
              }
            </IconButton>
          </Link>
          <IconButton sx={{
            color: 'black',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
          }} onClick={themeHandler}
          >
            {globalState.activeTheme === 'dark' 
              ?
              <LightModeIcon style={{ filter: 'invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)'}}/>
              :
              <DarkModeIcon />
            }
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
