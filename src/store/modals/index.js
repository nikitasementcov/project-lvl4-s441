import { combineReducers } from 'redux';

import channelDeletion from './channelDeletion';
import channelEditing from './channelEditing';
import alert from './alert';

export default combineReducers({
  alert: alert.reducer,
  channelDeletion: channelDeletion.reducer,
  channelEditing: channelEditing.reducer,
});
