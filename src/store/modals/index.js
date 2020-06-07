import { combineReducers } from 'redux';

import channelDeletion, { actions as deletionActions } from './channelDeletion';
import channelEditing, { actions as editingActions } from './channelEditing';
import alert, { actions as alertActions } from './alert';

export default combineReducers({
  alert,
  channelDeletion,
  channelEditing,
});

export const actions = {
  ...deletionActions,
  ...editingActions,
  ...alertActions,
};
