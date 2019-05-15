import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('RandomColor component', () => {
  it('renders a RandomColor', () => {
    const wrapper = shallow(<RandomColor colors={['red', 'yellow', 'blue']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
