import { createAction } from 'redux-actions';

export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILURE');
export const channelReceived = createAction('CHANNEL_RECEIVED');

export const changeChannelRequest = createAction('CHANNEL_CHANGE_REQUEST');
export const changeChannelSuccess = createAction('CHANNEL_CHANGE_SUCCESS');
export const changeChannelFailure = createAction('CHANNEL_CHANGE_FAILURE');

export const deleteChannelRequest = createAction('CHANNEL_DELETE_REQUEST');
export const deleteChannelSuccess = createAction('CHANNEL_DELETE_SUCCESS');
export const deleteChannelFailure = createAction('CHANNEL_DELETE_FAILURE');
export const channelDeleted = createAction('CHANNEL_DELETED');

export const updateChannelRequest = createAction('CHANNEL_UPDATE_REQUEST');
export const updateChannelSuccess = createAction('CHANNEL_UPDATE_SUCCESS');
export const updateChannelFailure = createAction('CHANNEL_UPDATE_FAILURE');
export const channelUpdated = createAction('CHANNEL_UPDATED');
