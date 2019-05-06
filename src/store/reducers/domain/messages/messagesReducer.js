import { handleActions } from 'redux-actions';

import * as actions from '../../../actions';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.createMessageSuccess]: (state, { payload: { id, message } }) => ({
      byId: { ...state.byId, [id]: { message } },
      allIds: { ...state.allIds, id },
    }),
  },
  initialState
);
