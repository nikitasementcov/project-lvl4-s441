import 'core-js/stable';
import 'regenerator-runtime/runtime';
// eslint-disable-next-line import/no-unresolved
import gon from 'gon';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';

import { initRandomUserName, getCurrentUserName } from './userManager';
import buildStore from './store';
import App from './components/App';
import UserContext from './userContext';
import { actions as channelActions } from './store/channels';
import { actions as messageActions } from './store/messages';
import { actions as appActions } from './store/app';

import '../assets/favicon.ico';
import '../assets/css/gridLayout.css';
import { isProd } from './config';

if (!isProd) {
  localStorage.debug = 'chat:*';
}

initRandomUserName();
const store = buildStore(gon);
const userName = getCurrentUserName();
const socket = io();

socket.on('newMessage', data => {
  const action = messageActions.receive(data);
  store.dispatch(action);
});

socket.on('newChannel', data => {
  const action = channelActions.receive(data);
  store.dispatch(action);
});

socket.on('removeChannel', data => {
  const deleteAction = channelActions.delete(data);
  const setDefaultChannelAction = appActions.changeToDefaultChannel();
  store.dispatch(setDefaultChannelAction);
  store.dispatch(deleteAction);
});

socket.on('renameChannel', data => {
  const action = channelActions.update(data);
  store.dispatch(action);
});

ReactDOM.render(
  <UserContext.Provider value={userName}>
    <Provider store={store}>
      <App />
    </Provider>
  </UserContext.Provider>,
  document.getElementById('root'),
);
