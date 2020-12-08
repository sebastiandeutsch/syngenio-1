import React, { Component } from 'react';

export default class Clock extends Component {
  state = {
    date: new Date()
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}
