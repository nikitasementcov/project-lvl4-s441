import * as actions from './creators';
import { postChannel } from '../../api';

export const createChannel = name => async dispatch => {
  dispatch(actions.createChannelRequest(name));
  try {
    dispatch(actions.createChannelSuccess);
    const {
      data: {
        data: { attributes: channel },
      },
    } = await postChannel(name);
    dispatch(actions.createChannelSuccess(channel));
  } catch (e) {
    dispatch(actions.createChannelFailure(e));
  }
};

export const removeChannel = () => {};

export const changeChannel = id => async dispatch => {
  dispatch(actions.changeChannelRequest);
  try {
    dispatch(actions.changeChannelSuccess(id));
  } catch (e) {
    dispatch(actions.changeChannelFailure());
  }
};
