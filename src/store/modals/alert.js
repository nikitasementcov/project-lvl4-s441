import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'alert',
  initialState: {
    isShown: false,
    message: null,
  },
  reducers: {
    deleteChannelFailure: (state, { payload: message }) => ({
      ...state,
      isShown: true,
      message,
    }),
    show: (state, { payload: message }) => ({
      ...state,
      isShown: true,
      message,
    }),
    hide: state => ({
      ...state,
      isShown: false,
    }),
  },
});
