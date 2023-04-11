import { useTheme } from "@emotion/react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonIcon from "@mui/icons-material/Person";
import PrintIcon from "@mui/icons-material/Print";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useAsyncV } from "use-sync-v";

export const SidebarItems = () => {
  const theme = useTheme();
  const router = useRouter();
  const contacts = useAsyncV("contacts");

  const contactsHandler = () => {
    router.push('contacts')
  }
  return (
      <List
        sx={{
          width: "350px",
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
      </List>
  );
};
