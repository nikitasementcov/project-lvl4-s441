import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export const mapItems = channels => {
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

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const buildStore = gon => {
  const { channels, messages, currentChannelId } = gon;
  const preloadedState = {
    domain: {
      channels: mapItems(channels),
      messages: mapItems(messages),
    },
    app: {
      channels: {
        currentChannelId,
        defaultChannelId: currentChannelId,
      },
      channelDeletionModal: {
        isShown: false,
        channelId: null,
        channelName: null,
      },
      alertModal: {
        isShown: false,
        message: null,
      },
      channelEditingModal: {
        isShown: false,
        channelId: null,
        channelName: null,
      },
    },
  };
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default buildStore;
