import { createSlice } from '@reduxjs/toolkit';
import { asyncActions as channelAsyncActions } from './channels';

const slice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    changeChannel: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
  },
  extraReducers: {
    [channelAsyncActions.deleteChannel.fulfilled]: state => ({
      ...state,
      currentChannelId: state.defaultChannelId,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
