import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../src/components/Layout';

jest.mock('../../src/components/AlertModal', () => () => <div />);

it('renders correctly', () => {
  const mockComponent = () => <></>;
  const wrapper = shallow(<Layout path="/" component={mockComponent} />);
  expect(wrapper).toMatchSnapshot();
});
