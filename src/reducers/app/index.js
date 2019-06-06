import { combineReducers } from 'redux';

import channelDeletionModal from './channelDeletionModal/channelDeletionModalReducer';
import channels from './channels/appChannelsReducer';
import alertModal from './alertModal/alertModalReducer';

export default combineReducers({ channelDeletionModal, channels, alertModal });
