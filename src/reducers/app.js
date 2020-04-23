import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    changeChannelSuccess: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
    // TODO: use extraReducers here?
    channelDeleted: state => ({
      ...state,
      currentChannelId: state.defaultChannelId,
    }),
  },
});
