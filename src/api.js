import axios from 'axios';

import { API_PATH_PREFIX, HTTP_TIMEOUT } from './config';
import routes from './routes';

const configAxios = () => {
  axios.defaults.baseURL = API_PATH_PREFIX;
  axios.defaults.timeout = HTTP_TIMEOUT;
};

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
