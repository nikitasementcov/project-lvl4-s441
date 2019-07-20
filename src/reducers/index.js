import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ui from './ui';
import app from './app';
import channels from './channels';
import messages from './messages';
import modals from './modals';

export default combineReducers({
  channels,
  messages,
  ui,
  app,
  modals,
  form: formReducer,
});
