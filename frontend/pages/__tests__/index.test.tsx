import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../index';

describe('index page', () => {
  it('should have SignUp component', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper.find('SignUp')).toHaveLength(1);
  });
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<Index />);

    expect(wrapper).toMatchSnapshot();
  });
});
