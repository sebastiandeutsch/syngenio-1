import React, { Component } from 'react';
import Clock from './Clock';

export default class HelloWorld extends Component {
  state = {
    clockActive: true
  }

  handleToggleClick = () => {
    this.setState({
      clockActive: !this.state.clockActive
    });
  }

  render() {
    return (
      <div>
        Hello {this.props.greet}
        {this.state.clockActive && <Clock />}

        <button onClick={this.handleToggleClick}>Toggle</button>
      </div>
    );
  }
}
