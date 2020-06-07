import { configureStore, combineReducers } from '@reduxjs/toolkit';
import _ from 'lodash';
import { reducer as form } from 'redux-form';
import ui, { actions as uiActions } from './ui';
import app, { actions as appActions } from './app';
import messages, {
  actions as messageActions,
  asyncActions as messageAsyncActions,
} from './messages';
import modals, { actions as modalActions } from './modals';
import channels, {
  actions as channelActions,
  asyncActions as channelAsyncActions,
} from './channels';

const rootReducer = combineReducers({
  channels,
  messages,
  ui,
  app,
  modals,
  form,
});

export const asyncActions = {
  ...channelAsyncActions,
  ...messageAsyncActions,
};
export const actions = {
  ...uiActions,
  ...appActions,
  ...messageActions,
  ...modalActions,
  ...channelActions,
};

export const normalize = items => {
  const defaultState = { byId: {}, allIds: [] };
  if (items == null) return defaultState;
  return {
    byId: _.keyBy(items, 'id'),
    allIds: items.map(item => item.id),
  };
};

const createStore = gon => {
  const {
    channels: gonChannels,
    messages: gonMessages,
    currentChannelId,
  } = gon;
  const preloadedState = {
    channels: normalize(gonChannels),
    messages: normalize(gonMessages),
    app: {
      currentChannelId,
      defaultChannelId: currentChannelId,
    },
  };
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default createStore;
