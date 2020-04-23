// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addChannel as addChannelRequest,
//   deleteChannel as deleteChannelRequest,
//   renameChannel as renameChannelRequest,
// } from '../../api';
// import channelsSlice from '../../reducers/channels';
//
//
// export const changeChannel = id => async dispatch => {
//   // dispatch(actions.changeChannelRequest);
//   try {
//     // dispatch(actions.changeChannelSuccess(id));
//   } catch (e) {
//     // dispatch(actions.changeChannelFailure(e));
//   }
// };
//
// export const renameChannel = (id, attributes) => async dispatch => {
//   dispatch(actions.update(id, attributes));
//   try {
//     await renameChannelRequest(id, attributes);
//     // dispatch(actions.updateChannelSuccess);
//   } catch (e) {
//     // dispatch(actions.updateChannelFailure(e));
//   }
// };
