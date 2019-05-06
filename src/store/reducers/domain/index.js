import { combineReducers } from 'redux';
import channels from './channels/channelsReducer';
import messages from './messages/messagesReducer';

export default combineReducers({ channels, messages });
