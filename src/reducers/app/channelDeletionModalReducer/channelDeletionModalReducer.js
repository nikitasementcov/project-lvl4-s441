import { handleActions } from 'redux-actions';

import * as actions from '../../../actions/modals/creators';

const initialState = {};

export default handleActions(
  {
    [actions.showChannelDeletionModal](state, { payload: id }) {
      return {
        ...state,
        isShown: true,
        channelId: id,
      };
    },
    [actions.hideChannelDeletionModal](state) {
      return {
        ...state,
        isShown: false,
      };
    },
  },
  initialState
);
