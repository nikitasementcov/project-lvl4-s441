import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as actions from '../../../actions/channels/creators';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.channelReceived](
      state,
      {
        payload: {
          data: {
            attributes: { id, name, ...rest },
          },
        },
      },
    ) {
      return {
        byId: { ...state.byId, [id]: { id, name, ...rest } },
        allIds: state.allIds.concat(id),
      };
    },
    [actions.channelDeleted](
      state,
      {
        payload: {
          data: { id },
        },
      },
    ) {
      return {
        byId: update(state.byId, { $unset: [id] }),
        allIds: state.allIds.filter(channelId => channelId !== id),
      };
    },
    [actions.channelUpdated](
      state,
      {
        payload: {
          data: {
            attributes: { id, name, ...rest },
          },
        },
      },
    ) {
      return {
        byId: update(state.byId, { [id]: { $set: { id, name, ...rest } } }),
        allIds: state.allIds,
      };
    },
  },
  initialState,
);
