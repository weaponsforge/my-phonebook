// REACT
import { useState } from "react";

// NEXT
import Link from "next/link";
import { useRouter } from "next/router";

// MUI
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

// LIB
import { authSignOut } from "@/lib/hooks/useInitAuth";
import { setSyncLocalStorage, useSyncLocalStorage } from "@/lib/hooks/useSync";
import { Avalon } from "@/lib/mui/theme";
import { AccountCircle } from "@mui/icons-material";
import { useSyncV } from "use-sync-v";
import { Button, Paper, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

// VARIABLES
const loggedInSettings = [
  {
    name: "Profile",
    route: "profile",
  },
  {
    name: "Account",
    route: "/",
  },
  {
    name: "Contacts",
    route: "contacts",
  },
  {
    name: "Logout",
    route: "#",
  },
];
const loggedOutSettings = [
  {
    name: "Register",
    route: "register",
  },
  {
    name: "Login",
    route: "login",
  },
  {
    name: "Recover Password",
    route: "recoverPassword",
  },
];

function Header() {
  // HOOKS
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const activeTheme = useSyncLocalStorage("activeTheme");
  const animate = useSyncLocalStorage("animate");
  const { authUser } = useSyncV("auth");
  const router = useRouter();
  const maxWidth900 = useMediaQuery("(max-width:900px)");
  class eventsHandler {
    static themeHandler = () => {
      setSyncLocalStorage(
        "activeTheme",
        activeTheme === "dark" ? "light" : "dark"
      );
    };
    static handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget);
    };
    static handleOpenUserMenu = (e) => {
      setAnchorElUser(e.currentTarget);
    };
    static handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    static handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    static handleClickNavMenu = (route) => {
      router.push(route);
    };
    static animateHandler = () => {
      setSyncLocalStorage("animate", animate ? false : true);
    };
  }
  const {
    themeHandler,
    handleOpenUserMenu,
    handleCloseUserMenu,
    handleClickNavMenu,
    animateHandler,
  } = eventsHandler;
  const searchHandler = () => {

  };

  return (
    <Paper
      elevation={10}
      sx={{
        position: "relative",
        zIndex: 100,
        background: "inherit",
        backdropFilter: "blur(5px)",
        padding: "20px",
        pt: "10px",
        pb: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        alignItems: "center",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
        {!maxWidth900 && (
          <Typography
            className={Avalon.className}
            variant="h6"
            noWrap
            sx={{
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            myPhonebook
          </Typography>
        )}
        {maxWidth900 && (
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/myphonebook-app-dev.appspot.com/o/Icons%2Fmyphonebook-low-resolution-logo-black-on-transparent-background.svg?alt=media&token=09e85161-4a07-4ce2-9542-b2f52af19b80"
            alt="Phonebook Logo"
            width={36}
            height={36}
            style={
              activeTheme === "dark" && {
                filter:
                  "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
              }
            }
            priority
          />
        )}
      </Link>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {maxWidth900 && (
          <>
            <Button
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              onClick={animateHandler}
            >
              {activeTheme === "dark" ? (
                <>
                  {!animate && (
                    <PlayArrowIcon
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
                      }}
                    />
                  )}
                  {animate && (
                    <PauseIcon
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
                      }}
                    />
                  )}
                </>
              ) : (
                <>
                  {!animate && <PlayArrowIcon />}
                  {animate && <PauseIcon />}
                </>
              )}
            </Button>
            <Button
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              onClick={themeHandler}
            >
              {activeTheme === "dark" ? (
                <LightModeIcon
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
                  }}
                />
              ) : (
                <DarkModeIcon />
              )}
            </Button>
            <Button
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              onClick={searchHandler}
            >
              {activeTheme === "dark" && (
                <SearchIcon
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
                  }}
                />
              )}
              {activeTheme === "light" && <SearchIcon />}
            </Button>
          </>
        )}
        {!maxWidth900 && (
          <>
            <Button
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              onClick={animateHandler}
            >
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Animation
              </Typography>
            </Button>
            <Button
              sx={{
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              onClick={themeHandler}
            >
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                Theme
              </Typography>
            </Button>
            {authUser && (
              <Button
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1",
                }}
                onClick={searchHandler}
              >
                {activeTheme === "dark" && (
                  <SearchIcon
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(7440%) hue-rotate(111deg) brightness(126%) contrast(112%)",
                    }}
                  />
                )}
                {activeTheme === "light" && <SearchIcon />}
              </Button>
            )}
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        {authUser && (
          <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {loggedInSettings.map((setting, id) => {
                return setting.name === "Logout" ? (
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
                );
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
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
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
                );
              })}
            </Menu>
          </>
        )}
      </Box>
    </Paper>
  );
}
export default Header;
