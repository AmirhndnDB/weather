import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForcastData = createAsyncThunk(
  "times/fetch/pending",
  async (userIP, thunkAPI) => {
    const queryParams = userIP;
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: {
        q: queryParams,
        days: "3",
      },
      headers: {
        "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Forecast API Error:", error.response?.status, error.response?.data);
      return thunkAPI.rejectWithValue("خطا در دریافت اطلاعات آب‌وهوا"); // مهم!
    }
  }
);