import { createSlice } from '@reduxjs/toolkit';
import { deleteChannel } from '../channels';

export default createSlice({
  name: 'alert',
  initialState: {
    isShown: false,
    message: null,
  },
  reducers: {
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
  extraReducers: {
    [deleteChannel.fulfilled]: (state, { payload: message }) => ({
      ...state,
      isShown: true,
      message,
    }),
  },
});
