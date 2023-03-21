import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload.doc_id === state[i].doc_id) {
          state[i] = action.payload;
        }
      }
    },
    remove: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (action.payload.doc_id === state[i].doc_id) {
          state.splice(i, 1);
          break;
        }
      }
    },
  },
});
export const {create, update, remove} = contactsSlice.actions

export default contactsSlice.reducer