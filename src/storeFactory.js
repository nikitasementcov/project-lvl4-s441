import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const mapItems = items => {
  const defaultState = { byId: {}, allIds: [] };
  if (items == null) return defaultState;
  return items.reduce(
    (acc, current) => ({
      byId: { ...acc.byId, [current.id]: current },
      allIds: [...acc.allIds, current.id],
    }),
    defaultState,
  );
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

export default storeFactory;
