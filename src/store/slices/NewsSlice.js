// slice
import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsData } from '../thunks/NewsThunk';

const NewsSlice  = createSlice({
    name:'News',
    initialState :{
      NewsDataArays:[],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchNewsData.pending, (state) => {
            state.isLoading = true;
            state.error =null;
          })
          .addCase(fetchNewsData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.NewsDataArays = action.payload;
            state.error =null;
          })
          .addCase(fetchNewsData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },

      
    
});


export const NewsReducer = NewsSlice.reducer;
export default NewsSlice ;