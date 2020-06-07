import '@babel/polyfill';
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

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/application.css';

if (process.env.NODE_ENV !== 'production') {
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
  const action = channelActions.delete(data);
  store.dispatch(action);
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
