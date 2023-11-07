// slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchForcastData } from '../thunks/fetchForcastData';
const forcastWeatherSlice  = createSlice({
    name:'times',
    initialState:{

        presentTime:[],
        futearDay:["Sun","Mon","Tus","Wen","Thu","Fri","Sat"],
        isLoading: false,
        error: null,
        
    },
    reducers: {
        changeFutearDay(state,action){
            state.futearDay = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchForcastData.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchForcastData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.presentTime = action.payload;
          })
          .addCase(fetchForcastData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {changeFutearDay} = forcastWeatherSlice.actions
export const timesReducer = forcastWeatherSlice.reducer;