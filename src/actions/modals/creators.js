import { createAction } from 'redux-actions';

export const showChannelDeletionModal = createAction(
  'CHANNEL_DELETION_MODAL_SHOW'
);
export const hideChannelDeletionModal = createAction(
  'CHANNEL_DELETION_MODAL_HIDE'
);
