import getApp from '../index';

const port = process.env.PORT || 4000;
// eslint-disable-next-line no-console
getApp().listen(port, () => console.log(`port: ${port}`));
