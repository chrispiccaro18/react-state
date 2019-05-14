import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ColorDisplay from './ColorDisplay';
import style from '../index.css';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  state = {
    divColor: 'white'
  }

  clickHandler = (event) => {
    this.setState({ divColor: event.target.textContent.toLowerCase() });
  }

  render() {
    const colorButtons = this.props.colors.map(color => {
      return <button key={color} onClick={this.clickHandler} className={style[color]}>{color.toUpperCase()}</button>;
    });
    return (
      <>
        {colorButtons}
        <ColorDisplay color={this.state.divColor}/>
      </>
    );
  }
}
