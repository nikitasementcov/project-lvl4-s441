import * as actions from './creators';
import { postMessage } from '../../api';

export const createMessage = (channelId, message) => async (dispatch) => {
  dispatch(actions.createMessageRequest());
  try {
    const {
      data: {
        data: { attributes },
      },
    } = await postMessage(channelId, message);
    dispatch(actions.createMessageSuccess(attributes));
  } catch (e) {
    dispatch(actions.createMessageFailure());
  }
};

export const removeMessage = () => {};
