import { handleActions } from 'redux-actions';

import * as actions from '../../../actions/modals/creators';
import * as channelActions from '../../../actions/channels/creators';

const initialState = {
  isShown: false,
  message: null,
};

export default handleActions(
  {
    [channelActions.deleteChannelFailure](state, { payload: message }) {
      return {
        ...state,
        isShown: true,
        message,
      };
    },
    [actions.showAlertModal](state, { payload: message }) {
      return {
        ...state,
        isShown: true,
        message,
      };
    },
    [actions.hideAlertModal](state) {
      return {
        ...state,
        isShown: false,
      };
    },
  },
  initialState,
);
