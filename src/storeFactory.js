import { configureStore } from '@reduxjs/toolkit';
import _ from 'lodash';
import rootReducer from './reducers';

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
