import * as actions from './creators';
import { postChannel, deleteChannel as deleteChannelRequest, patchChannel } from '../../api';

export const createChannel = name => async (dispatch) => {
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

export const deleteChannel = id => async (dispatch) => {
  dispatch(actions.deleteChannelRequest);
  try {
    await deleteChannelRequest(id);
    dispatch(actions.deleteChannelSuccess(id));
  } catch (e) {
    dispatch(actions.deleteChannelFailure(e.message));
  }
};

export const changeChannel = id => async (dispatch) => {
  dispatch(actions.changeChannelRequest);
  try {
    dispatch(actions.changeChannelSuccess(id));
  } catch (e) {
    dispatch(actions.changeChannelFailure(e));
  }
};

export const updateChannel = (id, attributes) => async (dispatch) => {
  dispatch(actions.updateChannelRequest(id, attributes));
  try {
    await patchChannel(id, attributes);
    dispatch(actions.updateChannelSuccess);
  } catch (e) {
    dispatch(actions.updateChannelFailure(e));
  }
};
