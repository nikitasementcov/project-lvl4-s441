import { mapItems } from '../src/buildStore';

const channels = [
  { id: 1, name: 'general', removable: false },
  { id: 2, name: 'random', removable: false },
];

const messages = [
  { id: 1, message: 'message#1', userName: 'NS' },
  { id: 2, name: 'message#2', removable: 'NS' },
];

test('Should Return empty byId and allIds When empty array pass', () =>
  expect(mapItems([])).toEqual({ byId: {}, allIds: [] }));

test('Should Return empty byId and allIds When null pass', () =>
  expect(mapItems(null)).toEqual({ byId: {}, allIds: [] }));

test('Should Return empty byId and allIds When undefined pass', () =>
  expect(mapItems()).toEqual({ byId: {}, allIds: [] }));

test('Should Map channels to byId object', () => {
  const mappedChannels = mapItems(channels);
  expect.anything(mappedChannels.byId);
  expect(mappedChannels.byId).toEqual({
    1: { id: 1, name: 'general', removable: false },
    2: { id: 2, name: 'random', removable: false },
  });
});

test('Should Map channels to allIds array', () => {
  const mappedChannels = mapItems(channels);
  expect.anything(mappedChannels.allIds);
  expect(mappedChannels.allIds).toEqual([1, 2]);
});

test('Should Map messages to byId object', () => {
  const mappedChannels = mapItems(messages);
  expect.anything(mappedChannels.byId);
  expect(mappedChannels.byId).toEqual({
    1: { id: 1, message: 'message#1', userName: 'NS' },
    2: { id: 2, name: 'message#2', removable: 'NS' },
  });
});
