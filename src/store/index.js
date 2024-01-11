// store.js
import { configureStore} from "@reduxjs/toolkit";
import { headerReducer, changeSearchTerm,changeHeader,clierRecivedData } from './slices/searchSlice';
import { timesReducer,changeFutearDay,changeTemperType,changeForcastPeriodType,changeChartDataType} from "./slices/forcastWeatherSlice";
import { timeZoneReducer } from "./slices/timeZoneSlice";
import { NewsReducer } from "./slices/NewsSlice";
import { fetchSearchData } from './thunks/fetchSearchData';
import { fetchTimeZone } from "./thunks/fetchTimeZone";
import { fetchForcastData } from "./thunks/fetchForcastData";
import { fetchNewsData } from "./thunks/NewsThunk";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    times:timesReducer,
    timeZone: timeZoneReducer,
    News:NewsReducer,
  },
});
export { 
  fetchSearchData ,
  fetchForcastData,
  fetchTimeZone,
  fetchNewsData,
  changeSearchTerm,
  changeHeader,
  clierRecivedData,
  changeFutearDay,
  changeTemperType,
  changeForcastPeriodType,
  changeChartDataType,
};