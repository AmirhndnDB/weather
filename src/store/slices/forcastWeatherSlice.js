// slice
import { createSlice } from "@reduxjs/toolkit";
import { fetchForcastData } from "../thunks/fetchForcastData";
const forcastWeatherSlice = createSlice({
  name: "times",
  initialState: {
    presentTime: [],
    temperType: "c",
    forcastPeriodType: "daily",
    chartDataType: "Humdy",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFutearDay(state, action) {
      state.futearDay = action.payload;
    },
    changeTemperType(state, action) {
      state.temperType = action.payload;
    },
    changeForcastPeriodType(state, action) {
      state.forcastPeriodType = action.payload;
    },
    changeChartDataType(state, action) {
      state.chartDataType = action.payload;
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
        state.error = action.payload || "unknu eror"
      });
  },
});

export const {
  changeFutearDay,
  changeTemperType,
  changeForcastPeriodType,
  changeChartDataType,
} = forcastWeatherSlice.actions;
export const timesReducer = forcastWeatherSlice.reducer;
