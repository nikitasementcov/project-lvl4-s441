import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'app',
  reducers: {
    changeChannelSuccess: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
    channelDeleted: state => ({
      ...state,
      currentChannelId: state.defaultChannelId,
    }),
  },
});
