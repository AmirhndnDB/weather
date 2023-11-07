import { createSlice } from "@reduxjs/toolkit";
import { fetchRealtimeWeather } from "../thunks/fetchRealtimeWeather";


const realTimeSlice = createSlice({
    name:'realTime',
    initialState:{
        realTimeData:[],
        isLoading: false,
        error: null,
        
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchRealtimeWeather.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchRealtimeWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.realTimeData = action.payload;
          })
          .addCase(fetchRealtimeWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
          });
      },
    
});

export const {} = realTimeSlice.actions
export const realTimeReducer = realTimeSlice.reducer;

