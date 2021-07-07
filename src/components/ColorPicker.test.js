import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colors={['red', 'yellow', 'blue']}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
