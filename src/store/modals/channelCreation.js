import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channelCreation',
  initialState: {
    isShown: false,
  },
  reducers: {
    showCreationModal: state => ({
      ...state,
      isShown: true,
    }),
    hideCreationModal: state => ({
      ...state,
      isShown: false,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
