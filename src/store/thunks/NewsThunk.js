// // thunk
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mockNewsData } from "../mockDatas/mockNewsData";

// export const fetchNewsData = createAsyncThunk("news/fetchData", async () => {
//   const options = {
//     method: "GET",
//     url: "https://google-news13.p.rapidapi.com/world",
//     params: { lr: "en-US" },
//     headers: {
//       "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p123",
//       "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     // console.log(response.data);
//     return response.data; // Return the response data
//   } catch (error) {
//     console.error(error);
//     throw error; // Throw the error to be caught by the rejection action
//   }
// });

// // '39f1d947dcmsh2b94c7c16913b95p12337cjsn575ec4a3ede9' key

const USE_MOCK = true;

export const fetchNewsData = createAsyncThunk("news/fetchData", async () => {
  if (USE_MOCK) {
    await new Promise((res) => setTimeout(res, 500));
    return mockNewsData;
  }

  // REAL REQUEST
  const options = {
    method: "GET",
    url: "https://google-news13.p.rapidapi.com/world",
    params: { lr: "en-US" },
    headers: {
      "X-RapidAPI-Key": "39f1d947dcmsh2b94c7c16913b95p123",
      "X-RapidAPI-Host": "google-news13.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
});
