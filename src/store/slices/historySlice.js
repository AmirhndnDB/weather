// slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchHistoryWeather } from '../thunks/fetchHistoryWeather';
const historySlice  = createSlice({
    name:'history',
    initialState:{
        historyWeather:[],
        isLoading: false,
        error: null,
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchHistoryWeather.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchHistoryWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.historyWeather = action.payload;
          })
          .addCase(fetchHistoryWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {} = historySlice.actions
export const historyReducer = historySlice.reducer;