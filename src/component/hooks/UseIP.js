
// hook component that gets IP (UseIP.js)
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {
  fetchForcastData,
  fetchTimeZone ,
  fetchAstronomyData,
  fetchHistoryWeather,
  fetchIPLookup,
  fetchRealtimeWeather,
}
from "../../store";
import useLocalTime from "./UseLocalTime";


function UseIP() {
  const [ip, setIP] = useState("");
  const dispatch = useDispatch();
  const LocalTime = useLocalTime(ip);
  

  const getData = async () => {
   try{
      const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
    dispatch(fetchForcastData(res.data.ip));
    dispatch(fetchTimeZone(res.data.ip));
    // dispatch(fetchHistoryWeather(res.data.ip));
    // dispatch(fetchAstronomyData(res.data.ip));
    // dispatch(fetchRealtimeWeather(res.data.ip));
    // dispatch(fetchIPLookup(res.data.ip));
    // Pass the IP to the thunk action creator
  } catch (error){
    console.error('error fetching IP', error);
  }
};

  useEffect(() => {
    getData();
  }, []);
  
  return ip;
}

export default UseIP;