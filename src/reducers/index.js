import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import app from './app';
import channels from './channels';
import messages from './messages';
import modals from './modals';

export default combineReducers({
  channels: channels.reducer,
  messages: messages.reducer,
  ui: ui.reducer,
  app: app.reducer,
  modals,
  form: formReducer,
});
