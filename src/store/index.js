// store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { headerReducer, changeSearchTerm,changeHeader,clierRecivedData } from './slices/searchSlice';
import { timesReducer,changeFutearDay,changeTemperType,changeForcastPeriodType,changeChartDataType} from "./slices/forcastWeatherSlice";
import { timeZoneReducer } from "./slices/timeZoneSlice";
import { NewsReducer } from "./slices/NewsSlice";
import { fetchSearchData } from './thunks/fetchSearchData';
import { fetchTimeZone } from "./thunks/fetchTimeZone";
import { fetchForcastData } from "./thunks/fetchForcastData";
import { fetchNewsData } from "./thunks/NewsThunk";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    times:timesReducer,
    timeZone: timeZoneReducer,
    News:NewsReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
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