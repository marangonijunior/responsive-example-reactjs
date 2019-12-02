import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Map from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Map />', () => {
  it('Should renders the Map component', () => {
    const component = shallow(<Map />);
    expect(component.find('[data-test="map"]').exists()).equal(true);
  });
});