import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import channelSlice from './channels';
import { addMessage } from '../api';

export const createMessage = createAsyncThunk(
  'message/create',
  async ({ channelId, message }) => {
    const data = await addMessage(channelId, message);
    const {
      data: {
        data: { attributes },
      },
    } = data;
    return attributes;
  },
);

export default createSlice({
  name: 'message',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    receive: (
      state,
      {
        payload: {
          data: {
            attributes: { id, message, ...rest },
          },
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
