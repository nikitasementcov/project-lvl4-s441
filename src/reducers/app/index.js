import { combineReducers } from 'redux';

import channelDeletionModal from './channelDeletionModal/channelDeletionModalReducer';
import channelEditingModal from './channelEditingModal/channelEditingModalReducer';
import channels from './channels/appChannelsReducer';
import alertModal from './alertModal/alertModalReducer';

export default combineReducers({
  alertModal,
  channels,
  channelDeletionModal,
  channelEditingModal,
});
