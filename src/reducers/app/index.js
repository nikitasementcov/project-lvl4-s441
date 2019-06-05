import { combineReducers } from 'redux';

import confirmModal from './confirmModal/confirmModalReducer';
import channels from './channels/appChannelsReducer';

export default combineReducers({ confirmModal, channels });
