import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




export  const fetchForcastData = createAsyncThunk(

    'times/fetch/pending',
    async(userIP) =>{
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
              q: userIP,
              days: "1"
            },
            headers: {
              'X-RapidAPI-Key': 'da52e93f65msh63dacb488dfbddcp1eb624jsne47626bd426a',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              return response.data
          } catch (error) {
              console.error(error);
          }
    }
);


