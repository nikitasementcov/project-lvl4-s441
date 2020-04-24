import { combineReducers } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import app from '../store/app';
import messages from './messages';
import modals from './modals';
import channels from '../store/channels';

export default combineReducers({
  channels: channels.reducer,
  messages: messages.reducer,
  ui: ui.reducer,
  app: app.reducer,
  modals,
  form: formReducer,
});
