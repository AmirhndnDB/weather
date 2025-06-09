import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  ip: null,
  loading: false,
  error: null,
};

export const fetchUserIP = createAsyncThunk("user/fetchIP", async () => {
  const response = await axios.get("https://api.ipify.org/?format=json");
  return response.data.ip;
});

const mainLocationSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserIP.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserIP.fulfilled, (state, action) => {
        state.ip = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserIP.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const mainLocationReducer = mainLocationSlice.reducer;