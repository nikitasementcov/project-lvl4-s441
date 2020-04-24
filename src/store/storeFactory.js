import { configureStore, combineReducers } from '@reduxjs/toolkit';
import _ from 'lodash';
import { reducer as formReducer } from 'redux-form';
import uiSlice from './ui';
import appSlice from './app';
import messagesSlice from './messages';
import modalsReducer from './modals';
import channelsSlice from './channels';

const rootReducer = combineReducers({
  channels: channelsSlice.reducer,
  messages: messagesSlice.reducer,
  ui: uiSlice.reducer,
  app: appSlice.reducer,
  modals: modalsReducer,
  form: formReducer,
});

export const mapItems = items => {
  const defaultState = { byId: {}, allIds: [] };
  if (items == null) return defaultState;
  return {
    byId: _.keyBy(items, 'id'),
    allIds: items.map(item => item.id),
  };
};

const storeFactory = gon => {
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

export default storeFactory;
