import { createAction } from 'redux-actions';

export const createChannelRequest = createAction('CHANNEL_CREATE_REQUEST');
export const createChannelSuccess = createAction('CHANNEL_CREATE_SUCCESS');
export const createChannelFailure = createAction('CHANNEL_CREATE_FAILURE');

export const changeChannelRequest = createAction('CHANNEL_CHANGE_REQUEST');
export const changeChannelSuccess = createAction('CHANNEL_CHANGE_SUCCESS');
export const changeChannelFailure = createAction('CHANNEL_CHANGE_FAILURE');
