import { useSyncGlobalVariable } from "@/lib/hooks/useSync.js";
import { useContactsStore } from "@/lib/store/contacts/contactsStore.js";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore.js";
import { Button, Paper, Typography } from "@mui/material";
import { SearchField } from "./searchField/searchField.js";

import { ViewContact, ViewContactComponent } from "./viewContact.js/index.js";

export const SidebarComponent = () => {
  const [displayedContact,deleteContact] = useContactsStore((state)=> [state.displayedContact, state.deleteContact])
  const [phase, setPhase] = useContactsStore((state) => [
    state.displayedContactPhase,
    state.setDisplayedContactPhase,
  ]);
  const createContactHandler = () => {
    setPhase("create");
  };

  const deleteContactHandler = () => {
    const docIdToDelete = displayedContact.doc_id
    const response = deleteContact('wtghuScAMuaWp0AKI7OKTBEwKb02', docIdToDelete)
  }
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
      {phase === "create" && (
        <ViewContactComponent actionType={"Create contact"} />
      )}
      {phase === "edit" && <ViewContactComponent actionType={"Edit contact"} />}
      {phase !== "create" && (
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
