import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'ui',
  initialState: {
    newMessageLoading: false,
  },
  reducers: {
    createMessageRequest: state => {
      return { ...state, newMessageLoading: true };
    },
    createMessageSuccess: state => {
      return { ...state, newMessageLoading: false };
    },
  },
});
