
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
        'X-RapidAPI-Key':  'b0a6d5ef86msh81d321f9167d784p167d71jsn24094a7b9876'
        ,
        'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data; // Return the response data
    } catch (error) {
      console.error(error);
      throw error; // Throw the error to be caught by the rejection action
    }
  }
);

// 'da52e93f65msh63dacb488dfbddcp1eb624jsne47626bd426a' EXPIRECODE