import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Slider from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Slider />', () => {
  it('Should renders the Slider component', () => {
    const component = shallow(<Slider />);
    expect(component.find('[data-test="slider"]').exists()).equal(true);
  });
});