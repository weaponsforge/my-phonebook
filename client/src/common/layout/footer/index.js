// MUI
import Paper from "@mui/material/Paper";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SettingsIcon from "@mui/icons-material/Settings";
// CSS
import styles from "./styles";
import { Box, Button, IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";

function Footer() {
  const mobile = useMediaQuery("(max-width:500px)");
  const theme = useTheme();
  const router = useRouter();
  
  const showContactHandler = () => {};

  const addContactHandler = () => {};

  const searchContactHandler = () => {};

  const fixAndManageHandler = () => {};

  return (
    <>
      {!mobile && (
        <Paper
          elevation={10}
          sx={{
            width: "100%",
            minHeight: (theme) => theme.spacing(4),
            padding: (theme) => theme.spacing(2),
            textAlign: "center",
            marginTop: "auto",
            zIndex: 100,
            background: "inherit",
            backdropFilter: "blur(5px)",
            fontWeight: "bold",
          }}
          component="footer"
        >
          myPhonebook @2023
        </Paper>
      )}
      {mobile && router.route === "/contacts" && (
        <>
          <Paper
            elevation={10}
            sx={{
              width: "100%",
              minHeight: (theme) => theme.spacing(4),
              textAlign: "center",
              marginTop: "auto",
              zIndex: 100,
              background: "inherit",
              backdropFilter: "blur(5px)",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={showContactHandler}
            >
              <ContactPageIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={addContactHandler}
            >
              <PersonAddIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={searchContactHandler}
            >
              <PersonSearchIcon sx={{ fontSize: "2rem" }} />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                padding: "20px",
                color: theme.palette.primary.primary,
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;",
                  color: theme.palette.secondary.main,
                },
              }}
              onClick={fixAndManageHandler}
            >
              <SettingsIcon sx={{ fontSize: "2rem" }} />
            </Box>
          </Paper>
        </>
      )}
    </>
  );
}

export default Footer;
