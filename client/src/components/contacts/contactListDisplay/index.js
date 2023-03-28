import { useSyncGlobalVariable, useSyncStore } from "@/lib/hooks/useSync";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { FirebaseFirestore } from "@/lib/utils/firebase/firestore";
import { Box } from "@mui/material";
import { useDeferredValue, useEffect } from "react";
import {
  createSyncV,
  debugSyncV,
  useAsyncV,
  useQueryV,
  useSyncV,
} from "use-sync-v";
import { ContactCardsContainer } from "./contactsCardContainer";
import { SearchResultsContainer } from "./searchResultsContainer";

export const ContactListDisplay = ({ state }) => {
  const { search } = useSyncV("ui.phase");

  return (
    <>
      <Box
        sx={{
          flex: 6.8,
          minWidth: "500px",
          maxHeight: "100%",
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          userSelect: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {search ? <SearchResultsContainer /> : <ContactCardsContainer />}
      </Box>
    </>
  );
};
