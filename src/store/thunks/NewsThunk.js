
// thunk
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewsData = createAsyncThunk(
  'news/fetchData',
  async () => {
    const options = {
      method: 'GET',
      url: 'https://google-news13.p.rapidapi.com/world',
      params: {lr: 'en-US'},
      headers: {
        'X-RapidAPI-Key': 'da52e93f65msh63dacb488dfbddcp1eb624jsne47626bd426a',
        'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data; // Return the response data
      console.log(response.data)
    } catch (error) {
      console.error(error);
      throw error; // Throw the error to be caught by the rejection action
    }
  }
);
