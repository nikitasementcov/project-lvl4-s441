/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const mapChannels = channels => {
  const defaultState = { byId: {}, allIds: [] };
  if (channels == null) return defaultState;
  return channels.reduce(
    (acc, current) => ({
      byId: { ...acc.byId, [current.id]: current },
      allIds: [...acc.allIds, current.id],
    }),
    defaultState
  );
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const buildStore = gon => {
  const { channels } = gon;
  const preloadedState = {
    domain: { channels: mapChannels(channels) },
  };
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default buildStore;
