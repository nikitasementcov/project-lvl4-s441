import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'alert',
  initialState: {
    isShown: false,
    message: null,
  },
  reducers: {
    showAlertModal: (state, { payload: message }) => ({
      ...state,
      isShown: true,
      message,
    }),
    hideAlertModal: state => ({
      ...state,
      isShown: false,
    }),
  },
});

export const { actions } = slice;
export default slice.reducer;
