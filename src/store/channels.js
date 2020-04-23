import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';
import {
  addChannel as addChannelRequest,
  deleteChannel as deleteChannelRequest,
} from '../api';

export const addChannel = createAsyncThunk('channel/addChannel', async name => {
  await addChannelRequest(name);
});

export const deleteChannel = createAsyncThunk(
  'channel/deleteChannel',
  async id => {
    await deleteChannelRequest(id);
    return id;
  },
);

const channelsSlice = createSlice({
  name: 'channel',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    receive: (
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
    delete: (
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
    update: (
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

export default channelsSlice;
