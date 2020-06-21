import { combineReducers } from 'redux';

import channelDeletion, { actions as deletionActions } from './channelDeletion';
import channelEditing, { actions as editingActions } from './channelEditing';
import alert, { actions as alertActions } from './alert';
import channelCreation, { actions as creatingActions } from './channelCreation';

export default combineReducers({
  alert,
  channelDeletion,
  channelEditing,
  channelCreation,
});

export const actions = {
  ...deletionActions,
  ...editingActions,
  ...alertActions,
  ...creatingActions,
};
