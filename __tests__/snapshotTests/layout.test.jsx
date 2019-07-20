import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../../src/components/Layout';

jest.mock('../../src/components/AlertModal/AlertModal', () => () => <div />);

it('renders correctly', () => {
  const mockComponent = () => <></>;
  const tree = renderer
    .create(
      <MemoryRouter>
        <Layout path="/" component={mockComponent} />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
