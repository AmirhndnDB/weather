// store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  searchReducer,
  changeSearchTerm,
  clierRecivedData,
} from "./slices/searchSlice";
import {
  timesReducer,
  changeFutearDay,
  changeTemperType,
  changeForcastPeriodType,
  changeChartDataType,
} from "./slices/forcastWeatherSlice";
import { selectedHeader } from "./slices/locationHeaderSlice";
import { locationHeaderReducer } from "./slices/locationHeaderSlice";
import { NewsReducer } from "./slices/NewsSlice";
import { fetchSearchData } from "./thunks/fetchSearchData";
import { fetchForcastData } from "./thunks/fetchForcastData";
import { fetchNewsData } from "./thunks/NewsThunk";
import { fetchUserIP } from "./slices/mainLocationSlice";
import { mainLocationReducer } from "./slices/mainLocationSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    locationHeader: locationHeaderReducer,
    userIP:mainLocationReducer,
    times: timesReducer,
    News: NewsReducer,
  },
});
export {
  fetchSearchData,
  fetchForcastData,
  fetchNewsData,
  changeSearchTerm,
  clierRecivedData,
  changeFutearDay,
  changeTemperType,
  changeForcastPeriodType,
  changeChartDataType,
  selectedHeader,
  fetchUserIP
};
