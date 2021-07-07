import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const mockFunction = jest.fn(x => 42 + x);
    const wrapper = shallow(<ColorPicker colors={['red', 'yellow', 'blue']} clickHandler={mockFunction}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
