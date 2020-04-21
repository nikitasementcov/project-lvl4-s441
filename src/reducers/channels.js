import { createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';

export default createSlice({
  name: 'channel',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    received: (
      state,
      {
        payload: {
          data: {
            attributes: { id, name, ...rest },
          },
        },
      },
    ) => {
      return {
        byId: { ...state.byId, [id]: { id, name, ...rest } },
        allIds: state.allIds.concat(id),
      };
    },
    deleted: (
      state,
      {
        payload: {
          data: { id },
        },
      },
    ) => {
      return {
        byId: update(state.byId, { $unset: [id] }),
        allIds: state.allIds.filter(channelId => channelId !== id),
      };
    },
    updated: (
      state,
      {
        payload: {
          data: {
            attributes: { id, name, ...rest },
          },
        },
      },
    ) => {
      return {
        byId: update(state.byId, { [id]: { $set: { id, name, ...rest } } }),
        allIds: state.allIds,
      };
    },
  },
});
