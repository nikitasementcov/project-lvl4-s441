import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import gon from 'gon';

import buildStore from './store/storeFactory';
import App from './components/App/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';

// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = buildStore(gon);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
