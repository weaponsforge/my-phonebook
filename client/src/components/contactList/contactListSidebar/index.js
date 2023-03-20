import { useSyncGlobalVariable } from "@/lib/hooks/useSync.js";
import { Paper } from "@mui/material";
import { SearchField } from "./searchField/searchField.js";

import { ViewContact } from "./viewContact.js";

export const ContactListSidebar = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 3.14,
        display: "flex",
        flexDirection: "column",
        minWidth: "200px",
        zIndex: "50",
        backgroundColor: "inherit",
        padding: "20px",
        paddingBottom: "0",
        width: "100%",
        gap: "20px",
        overflowY: "scroll",
        userSelect: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <SearchField />
      <ViewContact />
    </Paper>
  );
};
