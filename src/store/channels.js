import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import update from 'immutability-helper';
import {
  addChannel as addChannelRequest,
  deleteChannel as deleteChannelRequest,
  updateChannel as updateChannelRequest,
} from '../api';

const addChannel = createAsyncThunk('channel/addChannel', async name => {
  await addChannelRequest(name);
});

const deleteChannel = createAsyncThunk('channel/deleteChannel', async id => {
  await deleteChannelRequest(id);
  return id;
});

const updateChannel = createAsyncThunk(
  'channel/renameChannel',
  async ({ id, name }) => {
    const { data: updatedChannel } = await updateChannelRequest(id, { name });
    return updatedChannel;
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

const asyncActions = { addChannel, deleteChannel, updateChannel };
const { actions } = channelsSlice;

export { actions, asyncActions };
export default channelsSlice.reducer;
