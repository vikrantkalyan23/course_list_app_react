import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';
import enquiriesReducer from './enquiriesSlice';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    enquiries: enquiriesReducer,
  },
});

export default store;
