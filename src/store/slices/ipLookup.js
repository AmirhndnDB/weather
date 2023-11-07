// slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchIPLookup } from '../thunks/fetchIPLookup';
const ipLookupSlice  = createSlice({
    name:'ipLookup',
    initialState:{
        ipData:[],
        isLoading: false,
        error: null,
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchIPLookup.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchIPLookup.fulfilled, (state, action) => {
            state.isLoading = false;
            state.ipData = action.payload;
          })
          .addCase(fetchIPLookup.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {} = ipLookupSlice.actions
export const ipLookupReducer = ipLookupSlice.reducer;