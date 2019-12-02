import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Top from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Top />', () => {
  it('Should renders the Top component', () => {
    const component = shallow(<Top />);
    expect(component.find('[data-test="top"]').exists()).equal(true);
  });
});