import { handleActions } from 'redux-actions';

import * as actions from '../../../actions/modals/creators';

const initialState = {};

export default handleActions(
  {
    [actions.showConfirmModal](state) {
      return {
        ...state,
        isShown: true,
      };
    },
    [actions.hideConfirmModal](state) {
      return {
        ...state,
        isShown: false,
      };
    },
  },
  initialState
);
