import * as actions from './creators';

export const createChannel = () => {};

export const removeChannel = () => {};

export const changeChannel = id => async dispatch => {
  dispatch(actions.changeChannelRequest);
  try {
    dispatch(actions.changeChannelSuccess(id));
  } catch (e) {
    dispatch(actions.changeChannelFailure());
  }
};
