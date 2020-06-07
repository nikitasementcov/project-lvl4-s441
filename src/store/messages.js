import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { actions as channelActions } from './channels';
import { addMessage } from '../api';

const createMessage = createAsyncThunk(
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

const slice = createSlice({
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
    [channelActions.delete]: (
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

const asyncActions = { createMessage };
const { actions } = slice;

export { actions, asyncActions };
export default slice.reducer;
