import { setSyncStore, useSyncGlobalVariable } from "@/lib/hooks/useSync";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { useEffect } from "react";
import { SearchResultsGroup } from "./searchResultsGroup";

const { Box } = require("@mui/material");

export const SearchResultsContainer = () => {
  const [searchResults, setDisplayedContact, setDisplayedContactPhase] = useContactsStore((state) => [
    state.searchResults,
    state.setDisplayedContact,
    state.setDisplayedContactPhase
  ]);

  const searchResultsArr = Object.entries(searchResults);

  useEffect(() => {
    if (searchResultsArr.length === 1) {
      for (let [, value] of searchResultsArr) {
        if (value.length !== 1) break;
        setDisplayedContact(value[0]);
        setDisplayedContactPhase('edit')
      }
    } else {
      setDisplayedContactPhase()
    }
  }, [searchResults]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box>
        {searchResultsArr.map((el, index) => {
          return (
            <SearchResultsGroup
              key={index}
              content={{ group: el[0], contacts: el[1] }}
            />
          );
        })}
      </Box>
    </Box>
  );
};
