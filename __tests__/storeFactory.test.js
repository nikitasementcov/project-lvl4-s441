import * as storeFactory from '../src/store';

const channels = [
  { id: 1, name: 'general', removable: false },
  { id: 2, name: 'random', removable: false },
];

const messages = [
  { id: 1, message: 'message#1', userName: 'NS' },
  { id: 2, name: 'message#2', removable: 'NS' },
];

const emptyStateObject = { byId: {}, allIds: [] };

describe('mapItems function should map items from backend correctly', () => {
  test('Should Map channels to byId object', () => {
    const mappedChannels = storeFactory.mapItems(channels);
    expect.anything(mappedChannels.byId);
    expect(mappedChannels.byId).toEqual({
      1: { id: 1, name: 'general', removable: false },
      2: { id: 2, name: 'random', removable: false },
    });
  });

  test('Should Map channels to allIds array', () => {
    const mappedChannels = storeFactory.mapItems(channels);
    expect.anything(mappedChannels.allIds);
    expect(mappedChannels.allIds).toEqual([1, 2]);
  });

  test('Should Map messages to byId object', () => {
    const mappedChannels = storeFactory.mapItems(messages);
    expect.anything(mappedChannels.byId);
    expect(mappedChannels.byId).toEqual({
      1: { id: 1, message: 'message#1', userName: 'NS' },
      2: { id: 2, name: 'message#2', removable: 'NS' },
    });
  });

  test('Should Return empty byId and allIds When empty array pass', () =>
    expect(storeFactory.mapItems([])).toEqual(emptyStateObject));

  test('Should Return empty byId and allIds When null pass', () =>
    expect(storeFactory.mapItems(null)).toEqual(emptyStateObject));

  test('Should Return empty byId and allIds When undefined pass', () =>
    expect(storeFactory.mapItems()).toEqual(emptyStateObject));
});

describe('storeFactory should create store with backend data', () => {
  it('Should contains empty objects if there is no data from backend', () => {
    const emptyState = {
      channels: emptyStateObject,
      messages: emptyStateObject,
    };
    const actualState = storeFactory.default({}).getState();
    expect(actualState).toMatchObject(emptyState);
  });
});
