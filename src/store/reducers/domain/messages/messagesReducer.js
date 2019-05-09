import { handleActions } from 'redux-actions';

import * as actions from '../../../actions';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.createMessageSuccess](
      state,
      {
        payload: { id, message },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { message } },
        allIds: { ...state.allIds, id },
      };
    },
    [actions.messageReceived](
      state,
      {
        payload: {
          data: {
            attributes: { id, message },
          },
        },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { message } },
        allIds: { ...state.allIds, id },
      };
    },
  },
  initialState
);
