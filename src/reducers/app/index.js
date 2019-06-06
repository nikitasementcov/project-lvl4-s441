import { combineReducers } from 'redux';

import channelDeletionModal from './channelDeletionModalReducer/channelDeletionModalReducer';
import channels from './channels/appChannelsReducer';

export default combineReducers({ channelDeletionModal, channels });
