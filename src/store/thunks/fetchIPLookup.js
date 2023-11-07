import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIPLookup = createAsyncThunk(
  'header/fetch/pending',
  async (userIP) => {

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
        params: {q: userIP},
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