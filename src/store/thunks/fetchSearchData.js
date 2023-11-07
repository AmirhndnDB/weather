// thunks/fetchSearchData.js


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchData = createAsyncThunk(
  'header/fetch/pending',
  async (searchTerm) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/search.json',
      params: { q: searchTerm },
      headers: {
        'X-RapidAPI-Key': '8d59fce8acmshba1ffed0f630742p18a83ajsn9447ef14669b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        throw new Error(error.response.data);
      }
    }


  
);