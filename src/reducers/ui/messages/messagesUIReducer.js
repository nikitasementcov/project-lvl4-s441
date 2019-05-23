import { handleActions } from 'redux-actions';

import * as actions from '../../../actions';

const initialState = {
  newMessageLoading: false,
};

export default handleActions(
  {
    [actions.createMessageRequest](state) {
      return {
        ...state,
        newMessageLoading: true,
      };
    },
    [actions.createMessageSuccess](state) {
      return {
        ...state,
        newMessageLoading: false,
      };
    },
  },
  initialState
);
