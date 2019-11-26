import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from './index';

describe('<Footer />', () => {
  it('Should renders the Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).to.have.lengthOf(1);
  });
});