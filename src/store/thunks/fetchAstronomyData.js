// thunks/fetchAstronomyData.js


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAstronomyData = createAsyncThunk(
  'header/fetch/pending',
  async (userIP) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
        params: {
          q: userIP,
          dt: '2023-10-20'
        },
        headers: {
          'X-RapidAPI-Key': '8d59fce8acmshba1ffed0f630742p18a83ajsn9447ef14669b',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data;
      } catch (error) {
          console.error(error);
      }
    }


  
);


