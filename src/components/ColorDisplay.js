import React from 'react';
import PropTypes from 'prop-types';
import style from '../index.css';

function ColorDisplay({ color }) {
  return <div className={style[color]}></div>;
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
