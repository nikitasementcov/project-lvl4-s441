import { createSlice } from '@reduxjs/toolkit';
import { deleteChannel } from './channels';

export default createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    changeChannel: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
  },
  extraReducers: {
    [deleteChannel.fulfilled]: state => ({
      ...state,
      currentChannelId: state.defaultChannelId,
    }),
  },
});
