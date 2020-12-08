import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={{ backgroundColor: '#000', color: '#fff', padding: '1em' }}>
        {this.props.children}
      </div>
    );
  }
}
