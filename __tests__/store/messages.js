import messagesSlice from '../../src/store/messages';
import channelsSlice from '../../src/store/channels';
describe('message reducer', () => {
  it('Should Add new message When it was received and the store had been empty', () => {
    const newMessage = { id: 1, message: 'message #1' };
    const state = { byId: {}, allIds: [] };
    const action = messagesSlice.actions.receive({
      data: {
        attributes: newMessage,
      },
    });

    const expectedState = {
      byId: { 1: newMessage },
      allIds: [1],
    };
    const actualState = messagesSlice.reducer(state, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Should Add new message When it was received and the store hadn"t been empty', () => {
    const newMessage = { id: 2, message: 'message #2' };
    const state = {
      byId: { 1: { id: 1, message: 'message #1' } },
      allIds: [1],
    };
    const action = messagesSlice.actions.receive({
      data: {
        attributes: newMessage,
      },
    });
    const expectedState = {
      byId: { ...state.byId, 2: newMessage },
      allIds: [1, 2],
    };

    const actualState = messagesSlice.reducer(state, action);

    expect(actualState).toEqual(expectedState);
  });

  it('Should Delete channel messages After channel was deleted', () => {
    const state = {
      byId: {
        1: { id: 1, message: 'message #1', channelId: 10 },
        2: { id: 2, message: 'message #2', channelId: 11 },
      },
      allIds: [1, 2],
    };
    const action = channelsSlice.actions.delete({
      data: { id: 11 },
    });
    const expectedState = {
      byId: { 1: { id: 1, message: 'message #1', channelId: 10 } },
      allIds: [1],
    };

    const actualState = messagesSlice.reducer(state, action);

    expect(actualState).toEqual(expectedState);
  });
});
