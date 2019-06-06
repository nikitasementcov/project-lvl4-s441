import { createAction } from 'redux-actions';

export const showChannelDeletionModal = createAction(
  'CHANNEL_DELETION_MODAL_SHOW'
);
export const hideChannelDeletionModal = createAction(
  'CHANNEL_DELETION_MODAL_HIDE'
);

export const showAlertModal = createAction('ALERT_MODAL_SHOW');
export const hideAlertModal = createAction('ALERT_MODAL_HIDE');

export const showChannelEditingModal = createAction(
  'CHANNEL_EDITING_MODAL_SHOW'
);
export const hideChannelEditingModal = createAction(
  'CHANNEL_EDITING_MODAL_HIDE'
);
