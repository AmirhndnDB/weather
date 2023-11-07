// slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchAstronomyData } from '../thunks/fetchAstronomyData';
const astromySlice  = createSlice({
    name:'astromy',
    initialState:{
        astromyData:[],
        isLoading: false,
        error: null,
        
    },
    reducers: {
        changeAstromyData(state,action){

        }

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAstronomyData.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchAstronomyData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.astromyData = action.payload;
          })
          .addCase(fetchAstronomyData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {changeAstromyData} = astromySlice.actions
export const astromyReducer = astromySlice.reducer;