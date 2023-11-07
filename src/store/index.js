// store.js
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { headerReducer, changeSearchTerm } from './slices/searchSlice';
import { timesReducer,changeFutearDay} from "./slices/forcastWeatherSlice";
import { astromyReducer,changeAstromyData } from "./slices/astromySlice";
import { historyReducer } from "./slices/historySlice";
import { ipLookupReducer } from "./slices/ipLookup";
import { realTimeReducer } from "./slices/realTimeSlice";
import { timeZoneReducer } from "./slices/timeZoneSlice";
import { fetchSearchData } from './thunks/fetchSearchData';
import { fetchTimeZone } from "./thunks/fetchTimeZone";
import { fetchForcastData } from "./thunks/fetchForcastData";
import { fetchAstronomyData } from "./thunks/fetchAstronomyData";
import { fetchHistoryWeather } from "./thunks/fetchHistoryWeather";
import { fetchIPLookup } from "./thunks/fetchIPLookup";
import { fetchRealtimeWeather } from "./thunks/fetchRealtimeWeather";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    times:timesReducer,
    astromy:astromyReducer,
    history:historyReducer,
    ipLookup: ipLookupReducer,
    realTime:realTimeReducer,
    timeZone: timeZoneReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});
export { 
  fetchSearchData ,
  fetchAstronomyData,
  fetchRealtimeWeather,
  fetchIPLookup,
  fetchHistoryWeather,
  fetchForcastData,
  fetchTimeZone,
  changeAstromyData,
  changeSearchTerm,
  changeFutearDay
};