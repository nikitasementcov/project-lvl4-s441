import { combineReducers } from 'redux';
import channels from './channels/channelsUIReducer';
import messages from './messages/messagesUIReducer';

export default combineReducers({ channels, messages });
