import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/enquiries';

export const addEnquiry = createAsyncThunk('enquiries/addEnquiry', async (enquiry) => {
  const response = await axios.post(API_URL, enquiry);
  return response.data;
});

const enquiriesSlice = createSlice({
  name: 'enquiries',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEnquiry.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default enquiriesSlice.reducer;
