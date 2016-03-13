import React from 'react';
import { shallow, mount } from 'enzyme';
import DumbCounter from './DumbCounter';
import ButtonComponent from '../ButtonComponent';

describe('<DumbCounter />', () => {
  it('should has two ButtonComponent', () => {
    const wrapper = shallow(<DumbCounter />);
    expect(wrapper.find(ButtonComponent)).to.have.length(2);
  });

  it('calls componentDidMount', () => {
    sinon.spy(DumbCounter.prototype, 'componentDidMount');
    const wrapper = mount(<DumbCounter />);
    expect(DumbCounter.prototype.componentDidMount.calledOnce).to.be.true;
    DumbCounter.prototype.componentDidMount.restore();
  });
});
