import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        console.log(payload);
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        console.log(payload);
      });
  },
});

export const authReducer = authSlice.reducer;
