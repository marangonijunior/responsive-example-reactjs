import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import ItemGallery from './index';

Enzyme.configure({ adapter: new Adapter() });

const render = customProps => {
  const props = {
    item: {
      image:"ducks.jpg",
      color:"#000",
      title:"Test item gallery",
    },
    ...customProps,
  };
  const component = shallow(<ItemGallery {...props} />);
  return component;
};

describe('<ItemGallery />', () => {
  it('Should renders the ItemGallery component', () => {
    const component = render();
    expect(component.find('[data-test="itemGallery"]').exists()).equal(true);
  });
});