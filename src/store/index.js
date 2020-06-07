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

export const mapItems = items => {
  const defaultState = { byId: {}, allIds: [] };
  if (items == null) return defaultState;
  return {
    byId: _.keyBy(items, 'id'),
    allIds: items.map(item => item.id),
  };
};

export default gon => {
  const { channels, messages, currentChannelId } = gon;
  const preloadedState = {
    channels: mapItems(channels),
    messages: mapItems(messages),
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
