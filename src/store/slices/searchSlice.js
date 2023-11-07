// slices/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchData } from '../thunks/fetchSearchData';


const searchSlice = createSlice({
  name: 'header',
  initialState: {
    searchTerm: '',
    receivedData: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.receivedData = action.payload;
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {changeSearchTerm } = searchSlice.actions;
export const headerReducer = searchSlice.reducer;
