import { createSlice, isAnyOf, isPending, isRejected } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  fetchCreateContact,
  fetchDeleteContact,
  fetchReadContact,
  fetchReadContacts,
  fetchUpdateContact,
} from "./contactsThunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    entities: [],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: false,
    searchKeyword: "",
    searchResults: [],
    displayedContact: {},
  },
  reducers: {
    search: (state, action) => {
      state.searchKeyword = action.payload;

      const filterContacts = (searchFilter) => {
        const filteredContactsByField = state.entities.reduce((prev, curr) => {
          for (let [key, value] of Object.entries(curr)) {
            if (new RegExp(String.raw`${searchText}`, "i").test(value)) {
              if (!prev[key]) {
                prev[key] = [];
              }
              prev[key] = [...prev[key], curr];
            }
          }
          return prev;
        }, {});
        return filteredContactsByField;
      };

      const searchResults = filterContacts(search);
      const searchResultsArr = Object.entries(searchResults);
      state.searchResults = searchResultsArr;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadContacts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchReadContact.fulfilled, (state, action) => {
        state.loading = "succeeded";
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities[i] = action.payload;
          }
        }
        state.loading = "idle";
      })
      .addCase(fetchCreateContact.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities.push(action.payload);
        state.loading = "idle";
      })
      .addCase(fetchUpdateContact.fulfilled, (state, action) => {
        state.loading = "succeeded";
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities[i] = action.payload;
          }
        }
        state.loading = "idle";
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.loading = "succeeded";
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities.splice(i, 1);
          }
        }
        state.loading = "idle";
      })
      .addMatcher(
        isPending(
          fetchCreateContact,
          fetchReadContact,
          fetchReadContacts,
          fetchUpdateContact,
          fetchDeleteContact
        ),
        (state, action) => {
          state.loading = "pending";
        }
      )
      .addMatcher(
        isRejected(
          fetchCreateContact,
          fetchReadContact,
          fetchReadContacts,
          fetchUpdateContact,
          fetchDeleteContact
        ),
        (state, action) => {
          state.error = true
          console.log(action)
        }
      );
    // TODO: cases / matcher for loading and rejection / failed fetch
  },
});

export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
