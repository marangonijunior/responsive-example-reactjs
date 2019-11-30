
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import Gallery from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('<Gallery />', () => {
  it('Should renders the Gallery component', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('.gallery')).to.have.lengthOf(1);
  });
});