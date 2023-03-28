import {
  setSyncStore,
  useSyncGlobalVariable,
  useSyncStore,
} from "@/lib/hooks/useSync";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useContactsStore } from "@/lib/store/contacts/contactsStore";
import { createSyncV, useSyncV } from "use-sync-v";

export const SearchField = () => {
  const { searchKeyword } = useSyncV("ui.search");
  const searchFieldHandler = (e) => {
    e.stopPropagation();
    createSyncV("ui.search.searchKeyword", e.target.value);
    if (e.target.value === "") {
      createSyncV("ui.phase.search", false);
    } else {
      createSyncV("ui.phase.search", true);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <SearchIcon fontSize="large" sx={{ aspectRatio: 1 }} />

      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={searchKeyword ?? ""}
        onChange={searchFieldHandler}
        id="searchField"
      />
    </Box>
  );
};
