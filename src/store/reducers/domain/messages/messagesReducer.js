import { handleActions } from 'redux-actions';

import * as actions from '../../../actions';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.createMessageSuccess](
      state,
      {
        payload: { id, message, ...rest },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { id, message, ...rest } },
        allIds: [...state.allIds, id],
      };
    },
    [actions.messageReceived](
      state,
      {
        payload: {
          data: {
            attributes: { id, message, ...rest },
          },
        },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { id, message, ...rest } },
        allIds: [...state.allIds, id],
      };
    },
  },
  initialState
);
