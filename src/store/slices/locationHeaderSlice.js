// slice
import { createSlice } from "@reduxjs/toolkit";
import { fetchForcastData } from "../thunks/fetchForcastData";
const locationHeaderSlice = createSlice({
  name: "locationHeader",
  initialState: {
    header: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    selectedHeader(state, action) {
      state.header = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForcastData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchForcastData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchForcastData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectedHeader } = locationHeaderSlice.actions;
export const locationHeaderReducer = locationHeaderSlice.reducer;
