import { createSlice } from "@reduxjs/toolkit";
import { fetchTimeZone } from "../thunks/fetchTimeZone";


const timeZoneSlice = createSlice({
    name:'timeZone',
    initialState:{
        timeZone:[],
        isLoading: false,
        error: null,
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTimeZone.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchTimeZone.fulfilled, (state, action) => {
            state.isLoading = false;
            state.timeZone = action.payload;
          })
          .addCase(fetchTimeZone.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {} = timeZoneSlice.actions
export const timeZoneReducer = timeZoneSlice.reducer;

