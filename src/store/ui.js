import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
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

export const { actions } = slice;
export default slice.reducer;
