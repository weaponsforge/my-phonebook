import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReadContacts.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = "idle";
      })
      .addCase(fetchReadContact.fulfilled, (state, action) => {
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities[i] = action.payload;
          }
        }
        state.loading = "idle";
      })
      .addCase(fetchCreateContact.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.loading = "idle";
      })
      .addCase(fetchUpdateContact.fulfilled, (state, action) => {
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities[i] = action.payload;
          }
        }
        state.loading = "idle";
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        for (let i = 0; i < state.entities.length; i++) {
          if (action.arg.doc_id === state.entities[i].doc_id) {
            state.entities.splice(i, 1);
          }
        }
        state.loading = "idle";
      });
    // TODO: cases / matcher for loading and rejection / failed fetch
  },
});

export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
