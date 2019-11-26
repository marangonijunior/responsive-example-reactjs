import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ItemGallery from './index';

describe('<ItemGallery />', () => {
  it('Should renders the ItemGallery component', () => {
    const wrapper = shallow(<ItemGallery />);
    expect(wrapper.find('ItemGallery')).to.have.lengthOf(1);
  });
});