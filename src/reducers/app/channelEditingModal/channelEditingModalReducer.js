import { handleActions } from 'redux-actions';

import * as actions from '../../../actions/modals/creators';

const initialState = {
  isShown: false,
  channelId: null,
  channelName: null,
};

export default handleActions(
  {
    [actions.showChannelEditingModal](
      state,
      {
        payload: { id, channelName },
      }
    ) {
      return {
        ...state,
        isShown: true,
        channelId: id,
        channelName,
      };
    },
    [actions.hideChannelEditingModal](state) {
      return {
        ...state,
        isShown: false,
      };
    },
  },
  initialState
);
