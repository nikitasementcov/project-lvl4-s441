import * as actions from './creators';
import {
  addChannel as addChannelRequest,
  deleteChannel as deleteChannelRequest,
  renameChannel as renameChannelRequest,
} from '../../api';

export const addChannel = name => async dispatch => {
  dispatch(actions.createChannelRequest(name));
  try {
    dispatch(actions.createChannelSuccess);
    const {
      data: {
        data: { attributes: channel },
      },
    } = await addChannelRequest(name);
    dispatch(actions.createChannelSuccess(channel));
  } catch (e) {
    dispatch(actions.createChannelFailure(e));
  }
};

export const deleteChannel = id => async dispatch => {
  dispatch(actions.deleteChannelRequest);
  try {
    await deleteChannelRequest(id);
    dispatch(actions.deleteChannelSuccess(id));
  } catch (e) {
    dispatch(actions.deleteChannelFailure(e.message));
  }
};

export const changeChannel = id => async dispatch => {
  dispatch(actions.changeChannelRequest);
  try {
    dispatch(actions.changeChannelSuccess(id));
  } catch (e) {
    dispatch(actions.changeChannelFailure(e));
  }
};

export const renameChannel = (id, attributes) => async dispatch => {
  dispatch(actions.updateChannelRequest(id, attributes));
  try {
    await renameChannelRequest(id, attributes);
    dispatch(actions.updateChannelSuccess);
  } catch (e) {
    dispatch(actions.updateChannelFailure(e));
  }
};
