import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import channelSlice from './channels';

export default createSlice({
  name: 'message',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    received: (
      state,
      {
        data: {
          attributes: { id, message, ...rest },
        },
      },
    ) => {
      return {
        byId: { ...state.byId, [id]: { id, message, ...rest } },
        allIds: state.allIds.concat(id),
      };
    },
  },
  extraReducers: {
    [channelSlice.actions.delete]: (
      state,
      {
        payload: {
          data: { id },
        },
      },
    ) => {
      const byId = _.omitBy(state.byId, message => message.channelId === id);
      return {
        byId,
        allIds: _.keys(byId).map(Number),
      };
    },
  },
});
