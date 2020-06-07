import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channelDeletion',
  initialState: {
    isShown: false,
    channelId: null,
    channelName: null,
  },
  reducers: {
    showDeletionModal: (state, { payload: { id, channelName } }) => ({
      ...state,
      isShown: true,
      channelId: id,
      channelName,
    }),
    hideDeletionModal: state => ({
      ...state,
      isShown: false,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
