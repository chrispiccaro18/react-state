import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  state = {
    color: 'white'
  }

  clickHandler = () => {

  }

  render() {
    const colorButtons = this.props.colors.map(color => {
      return <button key={color} onClick={this.clickHandler} className={color}>{color.toUpperCase()}</button>;
    });
    return (
      <>
        {colorButtons}
        <ColorDisplay color={this.state.divColor}/>
      </>
    );
  }
}
