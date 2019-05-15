import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

const colorArr = ['red', 'yellow', 'blue'];

export default class App extends PureComponent {
  state = {
    divColor: 'white'
  }

  clickHandler = event => {
    this.setState({ divColor: event.target.textContent.toLowerCase() });
  }

  render() {
    return (
      <>
        <ColorPicker colors={colorArr} clickHandler={this.clickHandler}/>
        <ColorDisplay color={this.state.divColor}/>
      </>
    );
  }
}
