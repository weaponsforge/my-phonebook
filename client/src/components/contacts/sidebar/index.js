import { useContactsStore } from "@/lib/store/contacts/contactsStore.js";
import { Button, Paper, Typography } from "@mui/material";
import { createSyncV, debugSyncV, readSyncV, updateSyncV, useSyncV } from "use-sync-v";
import { SearchField } from "./searchField/searchField.js";

import { ViewContactComponent } from "./viewContact.js/index.js";

export const SidebarComponent = () => {
  const phase = useSyncV("ui.phase")
  console.log("phase")
  const createContactHandler = () => {
    createSyncV("ui.phase.createContact", true)
    createSyncV("ui.activeContact", {
      doc_id:"",
      first_name:"",
      middle_name:"",
      last_name:"",
      phone_number:"",
      email_address:"",
      profile_picture_url:""
    })
  };

  const deleteContactHandler = () => {
    const docIdToDelete = displayedContact.doc_id;
    const response = deleteContact(
      "wtghuScAMuaWp0AKI7OKTBEwKb02",
      docIdToDelete
    );
  };

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
      {(phase.editContact || phase.createContact) && (
        <ViewContactComponent />
      )}
      {!phase.createContact && (
        <Button variant="contained" onClick={createContactHandler}>
          <Typography>Create Contact</Typography>
        </Button>
      )}
      <Button variant="contained" onClick={deleteContactHandler}>
        <Typography>Delete Contact</Typography>
      </Button>
    </Paper>
  );
};
