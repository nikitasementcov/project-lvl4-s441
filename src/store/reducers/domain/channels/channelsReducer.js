import { handleActions } from 'redux-actions';
import * as actions from '../../../actions/channels/creators';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.channelReceived](
      state,
      {
        payload: {
          data: {
            attributes: { id, name, ...rest },
          },
        },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { id, name, ...rest } },
        allIds: state.allIds.concat(id),
      };
    },
  },
  initialState
);
