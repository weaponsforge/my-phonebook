import { useTheme } from "@emotion/react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PauseIcon from "@mui/icons-material/Pause";
import PersonIcon from "@mui/icons-material/Person";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PrintIcon from "@mui/icons-material/Print";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

import { setSyncLocalStorage, useSyncLocalStorage } from "@/lib/hooks/useSync";
import { Avalon } from "@/lib/mui/theme";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { useAsyncV } from "use-sync-v";

export const Sidebar = () => {
  const contacts = useAsyncV("contacts");
  const theme = useTheme();
  const maxWidth1000px = useMediaQuery("(max-width:1000px)");
  const router = useRouter();
  const activeTheme = useSyncLocalStorage("activeTheme");
  const animate = useSyncLocalStorage("animate");

  const animateHandler = () => {
    setSyncLocalStorage("animate", animate ? false : true);
  };

  const themeHandler = () => {
    setSyncLocalStorage(
      "activeTheme",
      activeTheme === "dark" ? "light" : "dark"
    );
  };
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
          elevation={1}
          sx={{
            width: "200px",
            zIndex: 300,
            height: "100%",
            background: "inherit",
            backdropFilter: "blur(5px)",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="myPhonebook"
                  className={Avalon.className}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: "bolder",
                  }}
                  sx={{
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    textDecoration: "none",
                    width: "270px",
                    color: (theme) => theme.palette.text.primary,
                    userSelect: "none",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CloudUploadIcon />
                </ListItemIcon>
                <ListItemText primary="Upload" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CloudDownloadIcon />
                </ListItemIcon>
                <ListItemText primary="Download" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrintIcon />
                </ListItemIcon>
                <ListItemText primary="Print" />
              </ListItemButton>
            </ListItem>
            <Divider />
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
                  {activeTheme === "dark" ? (
                    <LightModeIcon />
                  ) : (
                    <DarkModeIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary="Theme" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Slide>
    </Box>
  );
};
