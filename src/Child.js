import React from 'react';

export class Child extends React.Component {
  render() {
    return <h2>Hey, my name is {this.props.name}!</h2>;
  }
}