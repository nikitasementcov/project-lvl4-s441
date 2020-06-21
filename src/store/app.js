import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {},
  reducers: {
    changeChannel: (state, { payload: id }) => ({
      ...state,
      currentChannelId: id,
    }),
    changeToDefaultChannel: state => ({
      ...state,
      currentChannelId: state.defaultChannelId,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
