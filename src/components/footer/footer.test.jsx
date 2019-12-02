import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('Should renders the Footer component', () => {
    const component = shallow(<Footer />);
    expect(component.find('[data-test="footer"]').exists()).equal(true);
  });
});