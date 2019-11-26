import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Slider from './index';

describe('<Slider />', () => {
  it('Should renders the Slider component', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper.find('slider')).to.have.lengthOf(1);
  });
});