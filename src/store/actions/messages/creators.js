import { createAction } from 'redux-actions';

export const createMessageRequest = createAction('MESSAGE_CREATE_REQUEST');
export const createMessageSuccess = createAction('MESSAGE_CREATE_SUCCESS');
export const createMessageFailure = createAction('MESSAGE_CREATE_FAILURE');
export const messageReceived = createAction('MESSAGE_RECEIVED');
