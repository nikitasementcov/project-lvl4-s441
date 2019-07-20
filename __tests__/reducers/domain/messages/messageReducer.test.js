import messageReducer from '../../../../src/reducers/messages';
import * as creators from '../../../../src/actions/messages/creators';
import { channelDeleted } from '../../../../src/actions/channels/creators';

describe('message reducer', () => {
  it('Should Add new message When it is received and store is empty', () => {
    const newMessage = { id: 1, message: 'message #1' };
    const state = { byId: {}, allIds: [] };
    const action = creators.messageReceived({
      data: {
        attributes: newMessage,
      },
    });

    const expectedState = {
      byId: { 1: newMessage },
      allIds: [1],
    };
    const actualState = messageReducer(state, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Should Add new message When it is received and store is not empty', () => {
    const newMessage = { id: 2, message: 'message #2' };
    const state = {
      byId: { 1: { id: 1, message: 'message #1' } },
      allIds: [1],
    };
    const action = creators.messageReceived({
      data: {
        attributes: newMessage,
      },
    });
    const expectedState = {
      byId: { ...state.byId, 2: newMessage },
      allIds: [1, 2],
    };

    const actualState = messageReducer(state, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Should Delete channel messages When channel is deleted', () => {
    const state = {
      byId: {
        1: { id: 1, message: 'message #1', channelId: 10 },
        2: { id: 2, message: 'message #2', channelId: 11 },
      },
      allIds: [1, 2],
    };
    const action = channelDeleted({
      data: { id: 11 },
    });
    const expectedState = {
      byId: { 1: { id: 1, message: 'message #1', channelId: 10 } },
      allIds: [1],
    };

    const actualState = messageReducer(state, action);

    expect(actualState).toEqual(expectedState);
  });
});
