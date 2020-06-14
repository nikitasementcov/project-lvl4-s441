export default {
  channels: id => `/channels${id ? `/${id}` : ''}`,
  channelMessages: channelId => `/channels/${channelId}/messages`,
};
