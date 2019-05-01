import { createStore } from 'redux';

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

const buildStore = gon => {
  const { channels } = gon;
  const preloadedState = { domain: { channels: mapChannels(channels) } };
  return createStore(rootReducer, preloadedState);
};

export default buildStore;
