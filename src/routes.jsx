import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './hoc/layouts/Layout';
import Chat from './components/chat/Chat';

const Routes = props => (
  <BrowserRouter>
    <Layout path="/" component={Chat} {...props} />
  </BrowserRouter>
);

export default Routes;
