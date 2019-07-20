import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ui from './uiReducer';
import app from './app';
import channels from './channelsReducer';
import messages from './messagesReducer';

export default combineReducers({
  channels,
  messages,
  ui,
  app,
  form: formReducer,
});
