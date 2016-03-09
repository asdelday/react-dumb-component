import React from 'react';
import { shallow } from 'enzyme';
import DumbCounter from './DumbCounter';
import ButtonComponent from '../ButtonComponent';

describe('<DumbCounter />', () => {
  it('should has two ButtonComponent', () => {
    const wrapper = shallow(<DumbCounter />);
    expect(wrapper.find(ButtonComponent)).to.have.length(2);
  });
});
