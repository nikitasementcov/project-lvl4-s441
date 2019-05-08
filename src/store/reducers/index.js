import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import domain from './domain';
import ui from './ui';

export default combineReducers({ domain, ui, form: formReducer });
