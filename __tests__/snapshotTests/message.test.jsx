import React from 'react';
import renderer from 'react-test-renderer';
import Message from '../../src/components/Message';

it('renders correctly', () => {
  const stubMessage = { userName: 'name', message: 'hello' };
  const tree = renderer.create(<Message message={stubMessage} />).toJSON();
  expect(tree).toMatchSnapshot();
});
