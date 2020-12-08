import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0
  }

  handleIncrementClick = (event) => {
    this.setState({
      counter: this.state.counter+1
    });
  }

  handleDecrementClick = (event) => {
    this.setState({
      counter: this.state.counter-1
    });
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  render() {
    return (
      <div>
        Counter: {this.state.counter}

        <button onClick={this.handleIncrementClick}>+</button>
        <button onClick={this.handleDecrementClick}>-</button>
      </div>
    );
  }
};

