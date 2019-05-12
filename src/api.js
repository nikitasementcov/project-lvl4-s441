import axios from 'axios';

import { apiUrl } from './consts';

function configAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 1000;
}

configAxios();

const postMessage = (channelId, message) =>
  axios.post(`channels/${channelId}/messages`, {
    data: { attributes: { ...message } },
  });

export default postMessage;
