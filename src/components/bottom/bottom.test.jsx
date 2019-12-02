import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Bottom from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Bottom />', () => {
  it('Should renders the Bottom component', () => {
    const component = shallow(<Bottom />);
    expect(component.find('[data-test="bottom"]').exists()).equal(true);
  });
});