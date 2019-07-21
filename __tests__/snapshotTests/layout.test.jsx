import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../src/components/Layout';

jest.mock('../../src/components/AlertModal', () => () => <div />);

it('renders correctly', () => {
  const mockComponent = () => <></>;
  const tree = renderer
    .create(<Layout path="/" component={mockComponent} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
