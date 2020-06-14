import axios from 'axios';

import { apiUrl } from './consts';
import routes from './routes';

function configAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 1000;
}

configAxios();

export const addMessage = (channelId, message) =>
  axios.post(routes.channelMessages(channelId), {
    data: { attributes: { ...message } },
  });

export const addChannel = name =>
  axios.post(routes.channels(), { data: { attributes: { name } } });

export const deleteChannel = id => axios.delete(routes.channels(id));

export const updateChannel = (id, attributes) =>
  axios.patch(routes.channels(id), { data: { attributes } });
