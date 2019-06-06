import { handleActions } from 'redux-actions';

import * as actions from '../actions/channels/creators';

const initialState = {};

export default handleActions(
  {
    [actions.changeChannelSuccess](state, { payload: id }) {
      return {
        ...state,
        currentChannelId: id,
      };
    },
    [actions.channelDeleted](state) {
      return {
        ...state,
        currentChannelId: state.defaultChannelId,
      };
    },
  },
  initialState
);
