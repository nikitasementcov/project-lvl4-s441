import { mapChannels } from '../src/store/storeFactory';

const channels = [
  { id: 1, name: 'general', removable: false },
  { id: 2, name: 'random', removable: false },
];

test('Should_ReturnObjectWithEmptyByIdAndAllIds_EmptyArray', () =>
  expect(mapChannels([])).toEqual({ byId: {}, allIds: [] }));

test('Should_ReturnObjectWithEmptyByIdAndAllIds_Null', () =>
  expect(mapChannels(null)).toEqual({ byId: {}, allIds: [] }));

test('Should_ReturnObjectWithEmptyByIdAndAllIds_Undefined', () =>
  expect(mapChannels()).toEqual({ byId: {}, allIds: [] }));

test('Should_MapChannelsToByIdObject', () => {
  const mappedChannels = mapChannels(channels);
  expect.anything(mappedChannels.byId);
  expect(mappedChannels.byId).toEqual({
    1: { id: 1, name: 'general', removable: false },
    2: { id: 2, name: 'random', removable: false },
  });
});

test('Should_MapChannelsToAllIdsObject', () => {
  const mappedChannels = mapChannels(channels);
  expect.anything(mappedChannels.allIds);
  expect(mappedChannels.allIds).toEqual([1, 2]);
});
