import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../src/components/Message';

it('renders correctly', () => {
  const stubMessage = { userName: 'name', message: 'hello' };
  const wrapper = shallow(<Message message={stubMessage} />);
  expect(wrapper).toMatchSnapshot();
});
