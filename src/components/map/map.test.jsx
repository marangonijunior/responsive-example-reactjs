import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Map from './index';

describe('<Map />', () => {
  it('Should renders the Map component', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper.find('map')).to.have.lengthOf(1);
  });
});