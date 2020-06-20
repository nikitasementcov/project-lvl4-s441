import { createSlice } from '@reduxjs/toolkit';
import { asyncActions } from './messages';

const slice = createSlice({
  name: 'ui',
  initialState: {
    isMessageLoading: false,
  },
  extraReducers: {
    [asyncActions.createMessage.pending]: state => ({
      ...state,
      isMessageLoading: true,
    }),
    [asyncActions.createMessage.fulfilled]: state => ({
      ...state,
      isMessageLoading: false,
    }),
    [asyncActions.createMessage.rejected]: state => ({
      ...state,
      isMessageLoading: false,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
