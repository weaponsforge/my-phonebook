import { useTheme } from "@emotion/react";
import { Box, Divider, Paper, Typography, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { updateSyncV, useAsyncV } from "use-sync-v";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import { Slide } from "@mui/material";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();
  const contacts = useAsyncV("contacts");
  const theme = useTheme();
  const maxWidth1000px = useMediaQuery("(max-width:1000px)");

  return (
    <Box>
      <Slide
        direction="right"
        mountOnEnter
        unmountOnExit
        timeout={500}
        in={!maxWidth1000px}
      >
        <Box>Desktop</Box>
      </Slide>
      <Slide
        direction="right"
        mountOnEnter
        unmountOnExit
        timeout={500}
        in={maxWidth1000px}
      >
        <Paper
          sx={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            zIndex: "200",
            width: "350px",
            borderRadius: "0",
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            pr: "30px",
          }}
          onClick={() => updateSyncV("show.sidebar", false)}
        >
          <Typography
            variant="h4"
            sx={{
              p: "20px",
              pl: "30px",
            }}
          >
            myPhonebook
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              p: "10px",
              pl: "30px",
              pr: "30px",
              borderRadius: "0px 30px 30px 0px",
              transition: "0.3s all",
              userSelect:'none' ,
              backgroundColor:
                router.route === "/contacts"
                  ? theme.palette.primary.main
                  : "inherit",
              "&:hover": {
                backdropFilter: "contrast(80%)",
              },
            }}
          >
            <PersonIcon
              fontSize="medium"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                flex: "1",
                color: theme.palette.primary.contrastText,
              }}
            >
              Contacts
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              {contacts.data.length}
            </Typography>
          </Box>
          <Divider
            sx={{
              mt: "20px",
              mb: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              p: "10px",
              pl: "30px",
              borderRadius: "0px 30px 30px 0px",
              transition: "0.3s all",
              "&:hover": {
                backdropFilter: "contrast(80%)",
              },
            }}
          >
            <CloudUploadIcon fontSize="medium" />
            <Typography
              variant="h6"
              sx={{
                flex: "1",
              }}
            >
              Upload
            </Typography>
            <Typography variant="h6"></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              p: "10px",
              pl: "30px",
              borderRadius: "0px 30px 30px 0px",
              transition: "0.3s all",
              "&:hover": {
                backdropFilter: "contrast(80%)",
              },
            }}
          >
            <CloudDownloadIcon fontSize="medium" />
            <Typography
              variant="h6"
              sx={{
                flex: "1",
              }}
            >
              Download
            </Typography>
            <Typography variant="h6"></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              p: "10px",
              pl: "30px",
              borderRadius: "0px 30px 30px 0px",
              transition: "0.3s all",
              "&:hover": {
                backdropFilter: "contrast(80%)",
              },
            }}
          >
            <PrintIcon fontSize="medium" />
            <Typography
              variant="h6"
              sx={{
                flex: "1",
              }}
            >
              Print
            </Typography>
            <Typography variant="h6"></Typography>
          </Box>
          <Divider
            sx={{
              mt: "20px",
              mb: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              p: "10px",
              pl: "30px",
              borderRadius: "0px 30px 30px 0px",
              transition: "0.3s all",
              "&:hover": {
                backdropFilter: "contrast(80%)",
              },
            }}
          >
            <DeleteIcon fontSize="medium" />
            <Typography
              variant="h6"
              sx={{
                flex: "1",
              }}
            >
              Trash
            </Typography>
            <Typography variant="h6"></Typography>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
};
