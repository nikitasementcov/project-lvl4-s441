import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'channelDeletion',
  initialState: {
    isShown: false,
    channelId: null,
    channelName: null,
  },
  reducers: {
    show: (state, { payload: { id, channelName } }) => ({
      ...state,
      isShown: true,
      channelId: id,
      channelName,
    }),
    hide: state => ({
      ...state,
      isShown: false,
    }),
  },
});
