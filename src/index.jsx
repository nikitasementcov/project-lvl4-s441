import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import gon from 'gon';
import io from 'socket.io-client';

import { setRandomUserName } from './cookies';
import buildStore from './store/storeFactory';
import App from './components/App/App.jsx';
import * as actions from './store/actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

setRandomUserName();

const store = buildStore(gon);

const socket = io();
socket.on('newMessage', data => {
  const action = actions.messageReceived(data);
  store.dispatch(action);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
