// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addChannel as addChannelRequest,
//   deleteChannel as deleteChannelRequest,
//   renameChannel as renameChannelRequest,
// } from '../../api';
// import channelsSlice from '../../reducers/channels';
//
// export const addChannel = createAsyncThunk(actions.receive, async name => {
//   const {
//     data: {
//       data: { attributes: channel },
//     },
//   } = await addChannelRequest(name);
//   return channel;
// });
//
// export const deleteChannel = id => async dispatch => {
//   dispatch(actions.delete);
//   try {
//     await deleteChannelRequest(id);
//     // dispatch(actions.deleteChannelSuccess(id));
//   } catch (e) {
//     // dispatch(actions.deleteChannelFailure(e.message));
//   }
// };
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
