import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  static propTypes = {

  }

  state = {
    count: 0
  }

  clickHandler = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    return (
      <>
      <p>Current Count: {this.state.count}</p>
      <button onClick={this.clickHandler}>Increase Count</button>
      </>
    );
  }
}
