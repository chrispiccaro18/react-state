import React from 'react';
import PropTypes from 'prop-types';
import style from '../index.css';

function ColorPicker({ colors, clickHandler }) {
  return colors.map(color => {
    return <button key={color} onClick={clickHandler} className={style[color]}>{color.toUpperCase()}</button>;
  });
}

ColorPicker.propTypes = {
  colors: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default ColorPicker;
