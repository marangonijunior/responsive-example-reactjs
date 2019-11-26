import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Bottom from './index';

describe('<Bottom />', () => {
  it('Should renders the Bottom component', () => {
    const wrapper = shallow(<Bottom />);
    expect(wrapper.find('bottom')).to.have.lengthOf(1);
  });
});