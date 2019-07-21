import axios from 'axios';

import { apiUrl } from './consts';

function configAxios() {
  axios.defaults.baseURL = apiUrl;
  axios.defaults.timeout = 1000;
}

configAxios();

export const addMessage = (channelId, message) =>
  axios.post(`channels/${channelId}/messages`, {
    data: { attributes: { ...message } },
  });

export const addChannel = name =>
  axios.post('channels', { data: { attributes: { name } } });

export const deleteChannel = id => axios.delete(`channels/${id}`);

export const renameChannel = (id, { name }) =>
  axios.patch(`channels/${id}`, { data: { attributes: { name } } });
