import { createAction } from 'redux-actions';

// isShown: app.confirmModal.isShown,
//     title: app.confirmModal.title,
//     body: app.confirmModal.body,
//     footer: app.confirmModal.footer,
//     confirmActionType: app.confirmModal.confirmActionType,
//     confirmActionPayload: app.confirmModal.confirmPayload,

const confirm = (actionType, payload) => async dispatch => {
  dispatch(createAction(actionType)(payload));
};

export default confirm;
