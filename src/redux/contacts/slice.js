import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from "./operations";

import { logout } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoader: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.items = [...state.items, payload];
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoader = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
        state.isLoader = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoader = false;
        state.items = state.items.filter(
          (contact) => contact.id !== payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoader = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoader = false;
      })
      .addCase(updateContact.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          (contact) => contact.id === payload.id
        );
        state.items[index] = payload;
        state.isLoader = false;
      })
      .addCase(updateContact.rejected, (state) => {
        state.isLoader = false;
      });
  },
});

export const contactReducer = contactsSlice.reducer;
