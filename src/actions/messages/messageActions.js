import * as actions from './creators';
import { addMessage } from '../../api';

export const createMessage = (channelId, message) => async dispatch => {
  dispatch(actions.createMessageRequest());
  try {
    const {
      data: {
        data: { attributes },
      },
    } = await addMessage(channelId, message);
    dispatch(actions.createMessageSuccess(attributes));
  } catch (e) {
    dispatch(actions.createMessageFailure());
  }
};

export const removeMessage = () => {};
