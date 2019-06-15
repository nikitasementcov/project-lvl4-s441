import { handleActions } from 'redux-actions';
import _ from 'lodash';

import * as actions from '../../../actions';

const initialState = { byId: {}, allIds: [] };

export default handleActions(
  {
    [actions.messageReceived](
      state,
      {
        payload: {
          data: {
            attributes: { id, message, ...rest },
          },
        },
      }
    ) {
      return {
        byId: { ...state.byId, [id]: { id, message, ...rest } },
        allIds: state.allIds.concat(id),
      };
    },
    [actions.channelDeleted](
      state,
      {
        payload: {
          data: { id },
        },
      }
    ) {
      const byId = _.omitBy(state.byId, message => message.channelId === id);
      return {
        byId,
        allIds: _.keys(byId).map(Number),
      };
    },
  },
  initialState
);
