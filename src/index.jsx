import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import gon from 'gon';
import io from 'socket.io-client';

import { setRandomUserName, getUserName } from './cookies';
import buildStore from './storeFactory';
import App from './components/App/App.jsx';
import * as actions from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/application.css';
import UserContext from './userContext';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

setRandomUserName();
const store = buildStore(gon);
const userName = getUserName();
const socket = io();

socket.on('newMessage', data => {
  const action = actions.messageReceived(data);
  store.dispatch(action);
});

socket.on('newChannel', data => {
  const action = actions.channelReceived(data);
  store.dispatch(action);
});

ReactDOM.render(
  <UserContext.Provider value={userName}>
    <Provider store={store}>
      <App />
    </Provider>
  </UserContext.Provider>,
  document.getElementById('root')
);
