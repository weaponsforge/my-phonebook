// MUI
import Paper from "@mui/material/Paper";
// CSS
import { useMediaQuery } from "@mui/material";
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
          elevation={1}
          sx={{
            width: "100%",
            minHeight: (theme) => theme.spacing(4),
            padding: '10px',
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
    </>
  );
}

export default Footer;
