#! /usr/bin/env node

import getApp from '..';
import { PORT } from '../config';

const port = process.env.PORT || PORT;
const app = getApp({ port });
app.listen(port, '0.0.0.0', () => {
  console.log(`Server has been started on ${port} port`);
});
