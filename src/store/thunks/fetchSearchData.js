// thunks/fetchSearchData.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchData = createAsyncThunk(
  "header/fetch/pending",
  async (searchTerm) => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/search.json",
      params: { q: searchTerm },
      headers: {
        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);
