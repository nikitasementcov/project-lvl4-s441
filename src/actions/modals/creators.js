import { createAction } from 'redux-actions';

export const showConfirmModal = createAction('CONFIRM_MODAL_SHOW');
export const hideConfirmModal = createAction('CONFIRM_MODAL_HIDE');
export const confirm = createAction('CONFIRM_MODAL_CONFIRM');
