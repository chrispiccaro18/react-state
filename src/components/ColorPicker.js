import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  state = {
    divColor: 'white'
  }

  clickHandler = (event) => {
    this.setState({ divColor: event.target.textContent });
  }

  render() {
    const colorButtons = this.props.colors.map(color => {
      return <button key={color} onClick={this.clickHandler} className={styles[color]}>{color.toUpperCase()}</button>;
    });
    return (
      <>
        {colorButtons}
        <div className={this.state.divColor}></div>
      </>
    );
  }
}
