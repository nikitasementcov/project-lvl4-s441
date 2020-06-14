import routes from '../src/routes.js';

describe('routes.channels', () => {
  test('should return route without id when id is not passed', () => {
    const expectedRoute = '/channels';
    const channelRoute = routes.channels();
    expect(channelRoute).toEqual(expectedRoute);
  });

  test('should return route with id when id is passed', () => {
    const channelId = 2;
    const expectedRoute = `/channels/${channelId}`;
    const channelRoute = routes.channels(channelId);
    expect(channelRoute).toEqual(expectedRoute);
  });
});
