import { combineReducers } from 'redux';

import channelDeletion from './channelDeletion/channelDeletion';
import channelEditing from './channelEditing/channelEditing';
import alert from './alert/alert';

export default combineReducers({
  alert,
  channelDeletion,
  channelEditing,
});
