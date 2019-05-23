import { mapItems } from '../src/storeFactory';

const channels = [
  { id: 1, name: 'general', removable: false },
  { id: 2, name: 'random', removable: false },
];

const messages = [
  { id: 1, message: 'message#1', userName: 'NS' },
  { id: 2, name: 'message#2', removable: 'NS' },
];

test('Should_ReturnObjectWithEmptyByIdAndAllIds_EmptyArray', () =>
  expect(mapItems([])).toEqual({ byId: {}, allIds: [] }));

test('Should_ReturnObjectWithEmptyByIdAndAllIds_Null', () =>
  expect(mapItems(null)).toEqual({ byId: {}, allIds: [] }));

test('Should_ReturnObjectWithEmptyByIdAndAllIds_Undefined', () =>
  expect(mapItems()).toEqual({ byId: {}, allIds: [] }));

test('Should_MapChannelsToByIdObject', () => {
  const mappedChannels = mapItems(channels);
  expect.anything(mappedChannels.byId);
  expect(mappedChannels.byId).toEqual({
    1: { id: 1, name: 'general', removable: false },
    2: { id: 2, name: 'random', removable: false },
  });
});

test('Should_MapChannelsToAllIdsObject', () => {
  const mappedChannels = mapItems(channels);
  expect.anything(mappedChannels.allIds);
  expect(mappedChannels.allIds).toEqual([1, 2]);
});

test('Should_MapMessagesToByIdObject', () => {
  const mappedChannels = mapItems(messages);
  expect.anything(mappedChannels.byId);
  expect(mappedChannels.byId).toEqual({
    1: { id: 1, message: 'message#1', userName: 'NS' },
    2: { id: 2, name: 'message#2', removable: 'NS' },
  });
});
