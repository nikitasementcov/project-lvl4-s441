import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'channelEditing',
  initialState: {
    isShown: false,
    channelId: null,
    channelName: null,
  },
  reducers: {
    showEditingModal: (state, { payload: { id, channelName } }) => ({
      ...state,
      isShown: true,
      channelId: id,
      channelName,
    }),
    hideEditingModal: state => ({
      ...state,
      isShown: false,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
