import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Chat from './components/Chat';
import Layout from './components/Layout';

const Routes = props => (
  <BrowserRouter>
    <Layout path="/" component={Chat} {...props} />
  </BrowserRouter>
);

export default Routes;
