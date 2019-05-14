import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

export default class RandomColor extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  state = {
    color: 'blue'
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.randomColorGen(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  randomColorGen() {
    const random = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
    if(random === this.state.color) {
      this.setState({ color: 'duplicate' });
    } else {
      this.setState({ color: random });
    }
  }
  
  render() {
    return (
      <div className={styles[this.state.color]}></div>
    );
  }
}
