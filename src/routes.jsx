import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Chat from './components/chat/Chat';
import Layout from './components/Layout/Layout';

const Routes = props => (
  <BrowserRouter>
    <Layout path="/" component={Chat} {...props} />
  </BrowserRouter>
);

export default Routes;
