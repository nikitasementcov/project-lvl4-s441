import { handleActions } from 'redux-actions';

import * as actions from '../../../actions/modals/creators';

const initialState = {
  isShown: false,
  channelId: null,
  channelName: null,
};

export default handleActions(
  {
    [actions.showChannelDeletionModal](
      state,
      {
        payload: { id, channelName },
      },
    ) {
      return {
        ...state,
        isShown: true,
        channelId: id,
        channelName,
      };
    },
    [actions.hideChannelDeletionModal](state) {
      return {
        ...state,
        isShown: false,
      };
    },
  },
  initialState,
);
