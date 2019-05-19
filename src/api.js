import axios from 'axios';

import { apiUrl } from './consts';

function configAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 1000;
}

configAxios();

export const postMessage = (channelId, message) =>
  axios.post(`channels/${channelId}/messages`, {
    data: { attributes: { ...message } },
  });

export const postChannel = name => {
  axios.post('channels', { data: { attributes: { name } } });
};
